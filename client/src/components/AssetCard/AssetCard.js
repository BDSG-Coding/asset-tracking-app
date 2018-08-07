import React from 'react';
import './AssetCard.css';
import '../../pages/Assets';

const AssetCard = props => (
  <div className="card">  
      <div className= "img-container">
          <img alt={props.modelNumber} src={props.image} />
      </div>
      <div className = "content">
          <ul>
          <li>
            <strong>Model Number:</strong> {props.modelNumber}
          </li>
          <li>
            <strong>Serial Number:</strong> {props.serialNumber}
          </li>
          <li>
            <strong>IP Address:</strong> {props.IPaddress}
          </li>
          <li>
            <strong>Asset Tag:</strong> {props.assetTag}
          </li>
          <li>
            <strong>Rack Id:</strong> {props.rackId}
          </li>
          <li>
            <strong>Latitude:</strong> {props.latitude}
          </li>
          <li>
            <strong>longitude:</strong> {props.longitude}
          </li>
          {/* <span onClick={()=> props.deleteAsset} >
          X
      </span> */}
          </ul>
      </div>
    
      {/* <span onClick={()=> props.deleteAsset(props.id)} >
          X
      </span> */}
    
  </div>
);
 
export default AssetCard;
