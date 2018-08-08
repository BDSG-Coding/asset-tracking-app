import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import AssetCard from "../../components/AssetCard";
//import Footer from "../../components/Footer/Footer";
import Map from "../../MapApi/Map";


class Assets extends Component {

  // Setting our component's initial state
  state = {
    assets: [],
    modelNumber: "",
    serialNumber: "",
    assetTag : "",
    IPaddress : "",
    rackId : "",
    latitude:"",
    longitude:""
  };
  // When the component mounts, load all assets and save them to this.state.assets
  componentDidMount() {
    this.loadAssets();
  }

  // Loads all assets  and sets them to this.state.assets
  loadAssets = () => {
    API.getAssets()
      .then(res =>
        this.setState({ assets: res.data, modelNumber: "", serialNumber: "", assetTag: "", IPaddress:"", rackId:"",latitude:"",longitude:""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a asset from the database with a given id, then reloads assets from the db
  deleteAsset = id => {
    API.deleteAsset(id)
      .then(res => this.loadAssets())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload assets from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.modelNumber && this.state.serialNumber) {
      API.saveAsset({
        modelNumber: this.state.modelNumber,
        serialNumber: this.state.serialNumber,
        assetTag: this.state.assetTag,
        IPaddress: this.state.IPaddress,
        rackId: this.state.rackId,
        latitude: this.state.latitude,
        longitude: this.state.longitude
      })
        .then(res => this.loadAssets())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Jumbotron>
            <h1>Asset Tracking app</h1>
        </Jumbotron>
        <Row>
          <Col size="md-6">
            <form>
              <label><strong> Model Number</strong>  </label>
              <Input
                value={this.state.modelNumber}
                onChange={this.handleInputChange}
                name="modelNumber"
                placeholder="Model number (required)"
              />
              <label><strong> Serial Number</strong>  </label>
              <Input
                value={this.state.serialNumber}
                onChange={this.handleInputChange}
                name="serialNumber"
                placeholder="Serial Number (required)"
              />
              <label><strong>Asset Tag </strong>  </label>
              <Input
                value={this.state.assetTag}
                onChange={this.handleInputChange}
                name="assetTag"
                placeholder="assetTag (required)"
              />
              <label><strong> IP Address</strong>  </label>
              <Input
                value={this.state.IPaddress}
                onChange={this.handleInputChange}
                name="IPaddress"
                placeholder="IPaddress (required)"
              />
              <label><strong> Rack Id</strong>  </label>
               <Input
                value={this.state.rackId}
                onChange={this.handleInputChange}
                name="rackId"
                placeholder="rackId (required)"
              />
              <label><strong> Latitude </strong>  </label>
               <Input
                value={this.state.latitude}
                onChange={this.handleInputChange}
                name="latitude"
                placeholder="latitude (required)"
              />
              <label><strong> longitude</strong>  </label>
               <Input
                value={this.state.longitude}
                onChange={this.handleInputChange}
                name="longitude"
                placeholder="longitude (required)"
              />
            
              <FormBtn
                disabled={!(this.state.serialNumber && this.state.modelNumber)}
                onClick={this.handleFormSubmit}
              >
                Add
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12"> 
            <Map
                latitude={this.state.latitude}
                longitude={this.state.longitude}/>
            {this.state.assets.length ? (
                this.state.assets.map(asset => {
                  return (
                
                    <AssetCard key = {asset._id}
                      modelNumber={asset.modelNumber}
                      serialNumber={asset.serialNumber}
                      IPaddress ={asset.IPaddress}
                      assetTag = {asset.assetTag}
                      rackId = {asset.rackId}
                      latitude = {asset.latitude}
                      longitude ={asset.longitude}
                      >

                      <DeleteBtn onClick={() => this.deleteAsset(asset._id)} />
                    
                    </AssetCard>
              );
                })
            ) : (
              <h3>No Results to Display</h3> 
            )} 
          </Col> 
        {/* <Footer/> */}
        </Row>
      </Container>
    );
  }
}

export default Assets;
