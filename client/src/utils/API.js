import axios from "axios";

export default {
  // Gets all assets
  getAssets: function() {
    return axios.get("/api/assets");
  },
  // Gets the asset with the given id
  // getAssets: function(id) {
  //   return axios.get("/api/assets/" + id);
  // },
  // Deletes the asset with the given id
  deleteAsset: function(id) {
    return axios.delete("/api/assets/" + id);
  },
  // Saves a asset to the database
  saveAsset: function(assetData) {
    return axios.post("/api/assets", assetData);
  }
};
