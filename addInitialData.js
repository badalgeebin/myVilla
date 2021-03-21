const driver = require("./neo4j")
//const neo4j = require('neo4j-driver');
//const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "btp_1"));

const cypher = 'CREATE (n:Details {Name: $name, FID: $fid, Address: $addr, City: $city, District: $dist, State: $state, NoOfBedroom: $bed, DrawingRoom: $dwr, DiningRoom: $dnr, LaundryRoom: $lr, Kitchen: $kitchen, AttachedBathroom: $abr, SharedBathroom: $sbr, Balcony: $balcony, Flooring: $floor, MaxIntakes: $mi, Furnished: $furnish, YearOfContract: $yoc, Price: $price, Popularity: $popularity}) RETURN n.FID';
// const param = {name:"", fid:"", addr:"", city:"", dist:"", state:"", bed:"", dwr:"", dnr:"", lr:"", kitchen:"", abr:"", sbr:"", balcony:"", floor:"", mi:"", furnish:"", yoc:"", price:"", popularity:0};

var session = driver.session();
const param1 = { name: "Rahul Niwas", fid: "10125101", addr: "Gultera Bazar", city: "Bihta", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Marbled", mi: 10, furnish: false, yoc: 25, price: 40, popularity: 0 };
session.run(cypher, param1)
    .then(function (result) {
        //console.log(result);
        //console.log(result.records.length);
        // result.records.map(record => {
        //     console.log("Flat id " + record.get("n.FID") + " is added to database");
        // });
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param2 = { name: "Kumar Complex", fid: "10105102", addr: "Near Flyover, Main Road", city: "Bihta", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 2, floor: "Cemented", mi: 8, furnish: true, yoc: 5, price: 10, popularity: 0 };
session.run(cypher, param2)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
