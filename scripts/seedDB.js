const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/assettrackinapp"
);

const assetSeed = [
  {
    id: 1,
    images : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjhkdPqo9DcAhVIuVMKHYseDEEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.issnetserv.com%2Fcloud-solutions-introduction-file-servers%2F&psig=AOvVaw2NmlIAheEUqJDt72DNcen1&ust=1533364979483703",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 2,
    images : "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjK8MSKpNDcAhUG3FMKHdhvATMQjRx6BAgBEAU&url=http%3A%2F%2Fredhillcomputers.co.uk%2Fservers%2F&psig=AOvVaw0HeyAkvh1fS6V9wzRaNEX6&ust=1533365046582323",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 3,
    images : "https://www.hostandstore.com/wp-content/uploads/2015/01/Wikimedia_Foundation_Servers-8055_08-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 4,
    images : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjYz9e_pNDcAhWNvlMKHftlCTcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.maximef.com%2Flearning-more-about-dedicated-servers.html&psig=AOvVaw0HeyAkvh1fS6V9wzRaNEX6&ust=1533365046582323",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 5,
    images : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiCs6PUpNDcAhXO2lMKHbZaCjUQjRx6BAgBEAU&url=https%3A%2F%2Fnavtechservers.com%2Fnavtech-servers%2Fteam-server%2F&psig=AOvVaw0HeyAkvh1fS6V9wzRaNEX6&ust=1533365046582323",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 6,
    images : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwibhv71pNDcAhVSvlMKHUpaDjUQjRx6BAgBEAU&url=https%3A%2F%2Fcis.verint.com%2F2016%2F11%2F29%2Fdetecting-cc-server-communications-context-key%2F&psig=AOvVaw0HeyAkvh1fS6V9wzRaNEX6&ust=1533365046582323",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 7,
    images : "https://usa.visa.com/dam/VCOM/global/run-your-business/images/visa-threat-intelligence-1-1600x900.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 8,
    images : "https://s26913.pcdn.co/wp-content/uploads/2017/01/AdobeStock_51121090-1024x682.jpeg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 9,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 10,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 11,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 12,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 13,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 14,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 15,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  },
  {
    id: 16,
    images : "https://set.odi.org/wp-content/uploads/2015/05/Data-%C2%A9-Creative-Commons-1024x682.jpg",
    modelNumber : "123344",
    serialNumber:"uiejf983",
    assetTag: "kljasd",
    IPaddress : "kll:jn:jnjk",
    rackId: 12,
    date: new Date(Date.now())
  }
];

db.Asset
  .remove({})
  .then(() => db.Asset.collection.insertMany(assetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
