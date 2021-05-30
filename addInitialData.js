const driver = require("./neo4j")
//const neo4j = require('neo4j-driver');
//const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "btp_1"));

const cypher = 'CREATE (n:Details {Name: $name, FID: $fid, Address: $addr, City: $city, District: $dist, State: $state, NoOfBedroom: $bed, DrawingRoom: $dwr, DiningRoom: $dnr, LaundryRoom: $lr, Kitchen: $kitchen, AttachedBathroom: $abr, SharedBathroom: $sbr, Balcony: $balcony, Flooring: $floor, MaxIntakes: $mi, Furnished: $furnish, YearOfContract: $yoc, Price: $price, Popularity: $popularity, CarpetArea: $area, AgeOfFlat: $age}) RETURN n.FID';
// const param = {name:"", fid:"", addr:"", city:"", dist:"", state:"", bed:"", dwr:"", dnr:"", lr:"", kitchen:"", abr:"", sbr:"", balcony:"", floor:"", mi:"", furnish:"", yoc:"", price:"", popularity:0, area:700, age:12};

// var session = driver.session();
// const param1 = { name: "Rahul Niwas", fid: "10125101", addr: "Gultera Bazar", city: "Bihta", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Marbled", mi: 10, furnish: false, yoc: 25, price: 40, popularity: 0, area: 700, age: 12 };
// session.run(cypher, param1)
//     .then(function (result) {
//         //console.log(result);
//         //console.log(result.records.length);
//         // result.records.map(record => {
//         //     console.log("Flat id " + record.get("n.FID") + " is added to database");
//         // });
//         console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
//     .then(() => session.close());

var session = driver.session();
const param1 = { name: "Rahul Niwas", fid: "001", addr: "Gultera Bazar", city: "Bihta", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Marbled", mi: 10, furnish: false, yoc: 25, price: 40, popularity: 0, area: 1200, age: 5 };
session.run(cypher, param1)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param2 = { name: "Kumar Complex", fid: "002", addr: "Near Flyover, Main Road", city: "Bihta", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 2, floor: "Cemented", mi: 8, furnish: true, yoc: 5, price: 10, popularity: 0, area: 1200, age: 5 };
session.run(cypher, param2)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param3 = { name: "Himadri Palace", fid: "003", addr: "Boring Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 2, balcony: 1, floor: "Tiled", mi: 10, furnish: false, yoc: 49, price: 30, popularity: 0, area: 700, age: 15 };
session.run(cypher, param3)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param4 = { name: "Gangotri Palace", fid: "004", addr: "Bailey Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: true, kitchen: 2, abr: 1, sbr: 2, balcony: 1, floor: "Tiled", mi: 10, furnish: false, yoc: 10, price: 20, popularity: 0, area: 1000, age: 10 };
session.run(cypher, param4)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param5 = { name: "Kaveri Mahal", fid: "005", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 5, furnish: false, yoc: 49, price: 50, popularity: 0, area: 1700, age: 15 };
session.run(cypher, param5)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param6 = { name: "Kishan Villa", fid: "006", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Marbled", mi: 2, furnish: true, yoc: 99, price: 70, popularity: 0, area: 1700, age: 25 };
session.run(cypher, param6)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param7 = { name: "Swarg", fid: "007", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Marbled", mi: 2, furnish: true, yoc: 99, price: 500, popularity: 0, area: 2500, age: 15 };
session.run(cypher, param7)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param8 = { name: "Ajmal Manzil", fid: "008", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Tiled", mi: 7, furnish: false, yoc: 99, price: 50, popularity: 0, area: 1200, age: 12 };
session.run(cypher, param8)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param9 = { name: "Saquib Villa", fid: "009", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 10, price: 45, popularity: 0, area: 3500, age: 2 };
session.run(cypher, param9)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param10 = { name: "Brindavani", fid: "011", addr: "Nila Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param10)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param11 = { name: "Tilang", fid: "011", addr: "Nila Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param11)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param12 = { name: "Ram Manohar", fid: "012", addr: "Sadar Patel Nagar, Police Line, Hirapur", city: "Dhanbad", dist: "Dhanbad", state: "Jharkhand", bed: 1, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Marbled", mi: 6, furnish: false, yoc: 10, price: 15, popularity: 0, area: 1700, age: 15 };
session.run(cypher, param12)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param13 = { name: "Pathan House", fid: "013", addr: "Bari dargah, Nawada", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 10, furnish: true, yoc: 99, price: 20, popularity: 0, area: 800, age: 18 };
session.run(cypher, param13)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param14 = { name: "Bageshri", fid: "014", addr: "Nila Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param14)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param15 = { name: "Hostel-1", fid: "015", addr: "Ahalia Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param15)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param16 = { name: "Hostel-2", fid: "016", addr: "Ahalia Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param16)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param17 = { name: "Hostel-3", fid: "017", addr: "Ahalia Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param17)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param18 = { name: "Khan Manzil", fid: "018", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 11, furnish: true, yoc: 25, price: 20, popularity: 0, area: 2500, age: 35 };
session.run(cypher, param18)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param19 = { name: "Ashrafi Manzil", fid: "019", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 11, furnish: true, yoc: 10, price: 10, popularity: 0, area: 1800, age: 25 };
session.run(cypher, param19)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param20 = { name: "Sadar Cottage", fid: "020", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 11, furnish: true, yoc: 45, price: 45, popularity: 0, area: 1800, age: 30 };
session.run(cypher, param20)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param21 = { name: "Secret House", fid: "021", addr: "Surang 007", city: "Tarwara", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 5, furnish: true, yoc: 10, price: 20, popularity: 0, area: 2200, age: 7 };
session.run(cypher, param21)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param22 = { name: "Lakshmi Niwas", fid: "022", addr: "Doctors colony, Kankarbagh", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Cemented", mi: 4, furnish: true, yoc: 25, price: 35, popularity: 0, area: 1500, age: 5 };
session.run(cypher, param22)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param23 = { name: "Aastha", fid: "023", addr: "Basatpur Bangla", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 0, sbr: 2, balcony: 0, floor: "Cemented", mi: 5, furnish: false, yoc: 25, price: 25, popularity: 0, area: 1200, age: 12 };
session.run(cypher, param23)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param24 = { name: "Nilaya Home", fid: "024", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 0, floor: "Cemented", mi: 5, furnish: false, yoc: 10, price: 5, popularity: 0, area: 2000, age: 8 };
session.run(cypher, param24)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param25 = { name: "Kutumb", fid: "025", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: true, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 49, price: 25, popularity: 0, area: 1200, age: 5 };
session.run(cypher, param25)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param26 = { name: "Aashiyana", fid: "026", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 25, price: 30, popularity: 0, area: 1600, age: 6 };
session.run(cypher, param26)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param27 = { name: "Vaidehi Villa", fid: "027", addr: "Jamui Bazar", city: "Jamui", dist: "Jamui", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Cemented", mi: 10, furnish: false, yoc: 10, price: 15, popularity: 0, area: 3000, age: 26 };
session.run(cypher, param27)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param28 = { name: "Paaras", fid: "028", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 2, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 12, furnish: false, yoc: 25, price: 15, popularity: 0, area: 1600, age: 26 };
session.run(cypher, param28)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param29 = { name: "Verma Niwas", fid: "029", addr: "Patri chowk", city: "Ara", dist: "Bhojpur", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 2, abr: 2, sbr: 2, balcony: 2, floor: "Tiled", mi: 10, furnish: true, yoc: 49, price: 80, popularity: 0, area: 3000, age: 16 };
session.run(cypher, param29)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param30 = { name: "Dev Bhavan", fid: "030", addr: "Patri chowk", city: "Ara", dist: "Bhojpuran", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 3, floor: "Cemented", mi: 17, furnish: false, yoc: 25, price: 30, popularity: 0, area: 2000, age: 9 };
session.run(cypher, param30)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param31 = { name: "Bhavan Home", fid: "031", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Tiled", mi: 7, furnish: true, yoc: 49, price: 20, popularity: 0, area: 700, age: 5 };
session.run(cypher, param31)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param32 = { name: "Shanti Mahal", fid: "032", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Tiled", mi: 11, furnish: true, yoc: 99, price: 70, popularity: 0, area: 1500, age: 12 };
session.run(cypher, param32)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param33 = { name: "Amar Cottage", fid: "033", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 6, furnish: true, yoc: 25, price: 10, popularity: 0, area: 600, age: 2 };
session.run(cypher, param33)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param34 = { name: "Subhani Cottage", fid: "034", addr: "Castle Dio, Modern Society", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 3, sbr: 1, balcony: 2, floor: "Marbled", mi: 7, furnish: true, yoc: 25, price: 45, popularity: 0, area: 600, age: 2 };
session.run(cypher, param34)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param35 = { name: "Salman Cottage", fid: "035", addr: "Castle Dio, Modern Society", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Marbled", mi: 5, furnish: true, yoc: 25, price: 40, popularity: 0, area: 600, age: 2 };
session.run(cypher, param35)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param36 = { name: "Ramu Cottage", fid: "036", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 25, price: 40, popularity: 0, area: 1600, age: 12 };
session.run(cypher, param36)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param37 = { name: "Lalu Cottage", fid: "037", addr: "Castle Dio, Modern Society", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Marbledled", mi: 6, furnish: true, yoc: 25, price: 10, popularity: 0, area: 600, age: 2 };
session.run(cypher, param37)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param38 = { name: "Rabri Cottage", fid: "038", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Tiled", mi: 4, furnish: true, yoc: 25, price: 30, popularity: 0, area: 2600, age: 20 };
session.run(cypher, param38)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param39 = { name: "Jitendra Cottage", fid: "039", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 3, abr: 3, sbr: 3, balcony: 3, floor: "Marbled", mi: 15, furnish: true, yoc: 25, price: 35, popularity: 0, area: 2600, age: 2 };
session.run(cypher, param39)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param40 = { name: "T 19", fid: "040", addr: "CMPDI Kanke", city: "Ranchi", dist: "Ranchi", state: "Jharkhand", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 3, sbr: 3, balcony: 3, floor: "Marbled", mi: 10, furnish: true, yoc: 10, price: 19, popularity: 0, area: 1700, age: 15 };
session.run(cypher, param40)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());


var session = driver.session();
const param41 = { name: "Arman Home", fid: "041", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 1, balcony: 0, floor: "Cemented", mi: 11, furnish: true, yoc: 10, price: 8, popularity: 0, area: 1800, age: 35 };
session.run(cypher, param41)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param42 = { name: "Shamsher Manzil", fid: "042", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 0, floor: "Cemented", mi: 8, furnish: true, yoc: 10, price: 12, popularity: 0, area: 1800, age: 10 };
session.run(cypher, param42)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param43 = { name: "Gilani House", fid: "043", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 2, balcony: 0, floor: "Cemented", mi: 11, furnish: true, yoc: 10, price: 8, popularity: 0, area: 1800, age: 30 };
session.run(cypher, param43)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param44 = { name: "Aslam Manzil", fid: "044", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 0, floor: "Cemented", mi: 11, furnish: true, yoc: 25, price: 20, popularity: 0, area: 1600, age: 35 };
session.run(cypher, param44)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param45 = { name: "Indulekha Niwas", fid: "045", addr: "Fraser Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 2, balcony: 1, floor: "Marbled", mi: 8, furnish: true, yoc: 49, price: 40, popularity: 0, area: 650, age: 15 };
session.run(cypher, param45)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param46 = { name: "Prakash Devi", fid: "046", addr: "Shibipatti", city: "Madhubani", dist: "Madhubani", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Marbled", mi: 10, furnish: true, yoc: 25, price: 40, popularity: 0, area: 850, age: 25 };
session.run(cypher, param46)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param47 = { name: "Pariwar", fid: "047", addr: "Benipatti", city: "Madhubani", dist: "Madhubani", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Tiled", mi: 8, furnish: true, yoc: 99, price: 60, popularity: 0, area: 850, age: 5 };
session.run(cypher, param47)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param48 = { name: "Naman Niwas", fid: "048", addr: "Bairva", city: "Madhubani", dist: "Madhubani", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Tiled", mi: 6, furnish: true, yoc: 99, price: 50, popularity: 0, area: 550, age: 12 };
session.run(cypher, param48)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param49 = { name: "Maya Mahal", fid: "049", addr: "Mahendru", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 3, balcony: 3, floor: "Tiled", mi: 8, furnish: true, yoc: 99, price: 45, popularity: 0, area: 750, age: 10 };
session.run(cypher, param49)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param50 = { name: "Prakash Mahal", fid: "050", addr: "Motihari", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 2, abr: 3, sbr: 1, balcony: 0, floor: "Marbled", mi: 8, furnish: true, yoc: 25, price: 25, popularity: 0, area: 1000, age: 8 };
session.run(cypher, param50)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param51 = { name: "Peace Apartment", fid: "051", addr: "Gali no. 2", city: "Tarwara", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Tiled", mi: 7, furnish: true, yoc: 5, price: 7, popularity: 0, area: 700, age: 9 };
session.run(cypher, param51)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param52 = { name: "Mini Palais", fid: "052", addr: "Gali no. 2", city: "Tarwara", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Tiled", mi: 7, furnish: true, yoc: 5, price: 7, popularity: 0, area: 700, age: 9 };
session.run(cypher, param52)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param53 = { name: "The Dorm Room", fid: "053", addr: "Jagdishpur Road", city: "Jagdishpur", dist: "Siwan", state: "Bihar", bed: 1, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 0, floor: "Marbled", mi: 4, furnish: true, yoc: 10, price: 12, popularity: 0, area: 400, age: 5 };
session.run(cypher, param53)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param54 = { name: "EcoStay", fid: "054", addr: "Jagdishpur", city: "Jagdishpur", dist: "Siwan", state: "Bihar", bed: 1, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Marbled", mi: 4, furnish: true, yoc: 5, price: 4, popularity: 0, area: 350, age: 3 };
session.run(cypher, param54)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param55 = { name: "Sun's Ray Palace", fid: "055", addr: "Bazar Samity", city: "Rajendranagar", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 0, abr: 0, sbr: 1, balcony: 0, floor: "Cemented", mi: 6, furnish: false, yoc: 99, price: 30, popularity: 0, area: 600, age: 11 };
session.run(cypher, param55)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param56 = { name: "Joyful Palace", fid: "056", addr: "Kankarbagh", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 2, abr: 3, sbr: 0, balcony: 3, floor: "Marbled", mi: 15, furnish: true, yoc: 99, price: 75, popularity: 0, area: 1200, age: 10 };
session.run(cypher, param56)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param57 = { name: "Jolly Ville", fid: "057", addr: "Near Raja Bazar", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 5, furnish: true, yoc: 10, price: 13, popularity: 0, area: 500, age: 7 };
session.run(cypher, param57)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param58 = { name: "Sherlock Home", fid: "058", addr: "Near Patna Railway Station", city: "Patna", dist: "Patna", state: "Bihar", bed: 1, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 1, sbr: 0, balcony: 1, floor: "Tiled", mi: 2, furnish: true, yoc: 25, price: 8, popularity: 0, area: 200, age: 6 };
session.run(cypher, param58)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param59 = { name: "Kusum", fid: "059", addr: "Vijay Hata Road", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Tiled", mi: 5, furnish: true, yoc: 10, price: 17, popularity: 0, area: 550, age: 3 };
session.run(cypher, param59)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param60 = { name: "Jagat", fid: "060", addr: "Station Road, Opp.to Raj Complex", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 1, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 1, balcony: 1, floor: "Marbled", mi: 2, furnish: true, yoc: 5, price: 7, popularity: 0, area: 250, age: 6 };
session.run(cypher, param60)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param61 = { name: "Iksha", fid: "061", addr: "Zafar Market", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Marbled", mi: 5, furnish: true, yoc: 5, price: 11, popularity: 0, area: 750, age: 4 };
session.run(cypher, param61)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param62 = { name: "Godavari", fid: "062", addr: "Sugar mill bypass road", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Cemented", mi: 8, furnish: true, yoc: 25, price: 25, popularity: 0, area: 950, age: 8 };
session.run(cypher, param62)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param63 = { name: "Ekta bhawan", fid: "063", addr: "Tarwara Road, Opp. IDBI bank", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 9, popularity: 0, area: 300, age: 8 };
session.run(cypher, param63)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param64 = { name: "Chaman", fid: "064", addr: "Nawalpur Road", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 0, balcony: 2, floor: "Marbled", mi: 6, furnish: true, yoc: 49, price: 30, popularity: 0, area: 900, age: 18 };
session.run(cypher, param64)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param65 = { name: "Sunshine Palace", fid: "065", addr: "Near PMCH Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: true, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Cemented", mi: 6, furnish: false, yoc: 10, price: 13, popularity: 0, area: 500, age: 15 };
session.run(cypher, param65)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param66 = { name: "Chhaya", fid: "066", addr: "Station Road", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 2, floor: "Marbled", mi: 6, furnish: true, yoc: 10, price: 17, popularity: 0, area: 500, age: 5 };
session.run(cypher, param66)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param67 = { name: "The River", fid: "067", addr: "Plot no. 14, East boring Canal Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Marbled", mi: 7, furnish: false, yoc: 10, price: 12, popularity: 0, area: 450, age: 10 };
session.run(cypher, param67)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param68 = { name: "Aastha Bhawan", fid: "068", addr: "Pillar no. 41, Bailey Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: true, kitchen: 2, abr: 0, sbr: 1, balcony: 2, floor: "Tiled", mi: 11, furnish: true, yoc: 25, price: 20, popularity: 0, area: 850, age: 12 };
session.run(cypher, param68)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param69 = { name: "Akash Palace", fid: "069", addr: "Sahyogi Marg, Exhibition Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 2, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 6, furnish: true, yoc: 10, price: 15, popularity: 0, area: 550, age: 11 };
session.run(cypher, param69)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param70 = { name: "Amrita Palace", fid: "070", addr: "Opp. Children Park", city: "Patna", dist: "Patna", state: "Bihar", bed: 1, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 0, floor: "Cemented", mi: 4, furnish: true, yoc: 25, price: 15, popularity: 0, area: 250, age: 8 };
session.run(cypher, param70)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param71 = { name: "Pooja Palace", fid: "071", addr: "Siswan Tola", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 2, balcony: 0, floor: "Marbled", mi: 8, furnish: true, yoc: 49, price: 35, popularity: 0, area: 750, age: 12 };
session.run(cypher, param71)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param72 = { name: "Bhavan", fid: "072", addr: "Rajendra Nagar Path, Near Babunia More", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 2, abr: 1, sbr: 2, balcony: 1, floor: "Marbled", mi: 6, furnish: true, yoc: 10, price: 15, popularity: 0, area: 650, age: 7 };
session.run(cypher, param72)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param73 = { name: "Bhuvi Bam", fid: "073", addr: "Sabun Toli, Near Shiv jee Mandir", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 3, sbr: 0, balcony: 3, floor: "Marbled", mi: 10, furnish: true, yoc: 99, price: 45, popularity: 0, area: 650, age: 7 };
session.run(cypher, param73)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param74 = { name: "Bhole Sadan", fid: "074", addr: "Siswan Dhala", city: "Siwan", dist: "Siwan", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 1, sbr: 1, balcony: 1, floor: "Tiled", mi: 7, furnish: true, yoc: 10, price: 14, popularity: 0, area: 450, age: 5 };
session.run(cypher, param74)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param75 = { name: "Ramsharan Villa", fid: "075", addr: "Kankarbagh", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Tiled", mi: 7, furnish: false, yoc: 49, price: 30, popularity: 0, area: 550, age: 5 };
session.run(cypher, param75)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param76 = { name: "Dayaram Villa", fid: "076", addr: "Patliputra", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Cemented", mi: 9, furnish: false, yoc: 49, price: 25, popularity: 0, area: 550, age: 7 };
session.run(cypher, param76)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param77 = { name: "Radheshyam Villa", fid: "077", addr: "Makhdumpur", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 15, furnish: true, yoc: 49, price: 55, popularity: 0, area: 1250, age: 4 };
session.run(cypher, param77)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param78 = { name: "Govardhan Sthal", fid: "078", addr: "Ashiyana Digha", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Marbled", mi: 10, furnish: true, yoc: 99, price: 75, popularity: 0, area: 750, age: 4 };
session.run(cypher, param78)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param79 = { name: "Govardhan Sthal", fid: "079", addr: "Ashiyana Digha", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 3, floor: "Marbled", mi: 15, furnish: true, yoc: 99, price: 100, popularity: 0, area: 1000, age: 4 };
session.run(cypher, param79)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param80 = { name: "Kaveri Niwas", fid: "080", addr: "Near Ashiyana More", city: "Banaras", dist: "Banaras", state: "Uttar Pradesh", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Tiled", mi: 8, furnish: true, yoc: 10, price: 25, popularity: 0, area: 600, age: 7 };
session.run(cypher, param80)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param81 = { name: "Nayi Villa", fid: "081", addr: "Jawahar Path", city: "Banaras", dist: "Banaras", state: "Uttar Pradesh", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Tiled", mi: 8, furnish: false, yoc: 5, price: 8, popularity: 0, area: 450, age: 10 };
session.run(cypher, param81)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param82 = { name: "Mukund Niwas", fid: "082", addr: "Rajeev Path", city: "Banaras", dist: "Banaras", state: "Uttar Pradesh", bed: 1, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Cemented", mi: 3, furnish: false, yoc: 10, price: 10, popularity: 0, area: 350, age: 6 };
session.run(cypher, param82)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param83 = { name: "Jim Jilly", fid: "083", addr: "Near Shiv jee Mandir", city: "Banaras", dist: "Banaras", state: "Uttar Pradesh", bed: 1, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Tiled", mi: 2, furnish: true, yoc: 25, price: 25, popularity: 0, area: 350, age: 7 };
session.run(cypher, param83)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param84 = { name: "Bhagwat Bhawan", fid: "084", addr: "Lok Nagar", city: "Banaras", dist: "Banaras", state: "Uttar Pradesh", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 0, floor: "Tiled", mi: 7, furnish: true, yoc: 25, price: 35, popularity: 0, area: 500, age: 9 };
session.run(cypher, param84)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param85 = { name: "Asharam Niwas", fid: "085", addr: "Bhagwan Bazar", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 0, floor: "Tiled", mi: 7, furnish: true, yoc: 25, price: 25, popularity: 0, area: 450, age: 5 };
session.run(cypher, param85)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param86 = { name: "Rahul Bhawan", fid: "086", addr: "Bhagwan Bazar", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 0, floor: "Tiled", mi: 7, furnish: true, yoc: 25, price: 25, popularity: 0, area: 450, age: 5 };
session.run(cypher, param86)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param87 = { name: "Shyamlal Palace", fid: "087", addr: "Opp. to SBI bank", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Cemented", mi: 6, furnish: true, yoc: 10, price: 8, popularity: 0, area: 550, age: 15 };
session.run(cypher, param87)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param88 = { name: "Gulshan Palace", fid: "088", addr: "Shiv Bazar", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Marbled", mi: 10, furnish: true, yoc: 25, price: 30, popularity: 0, area: 850, age: 13 };
session.run(cypher, param88)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param89 = { name: "Rambha Sadan", fid: "089", addr: "Ngada Road", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Tiled", mi: 8, furnish: true, yoc: 10, price: 10, popularity: 0, area: 500, age: 14 };
session.run(cypher, param89)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param90 = { name: "Ganga Sadan", fid: "090", addr: "Police Line Road", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 0, floor: "Cemented", mi: 7, furnish: true, yoc: 10, price: 8, popularity: 0, area: 450, age: 8 };
session.run(cypher, param90)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param91 = { name: "Radhika Niwas", fid: "091", addr: "Hanuman Nagar", city: "Chapra", dist: "Saran", state: "Bihar", bed: 1, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Cemented", mi: 3, furnish: false, yoc: 5, price: 2, popularity: 0, area: 250, age: 13 };
session.run(cypher, param91)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param92 = { name: "Mahindra Bhawan", fid: "092", addr: "Mahindra Road", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 8, furnish: true, yoc: 49, price: 40, popularity: 0, area: 700, age: 15 };
session.run(cypher, param92)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param93 = { name: "Mannat", fid: "093", addr: "Gaya Lane", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 3, abr: 3, sbr: 0, balcony: 3, floor: "Marbled", mi: 12, furnish: true, yoc: 99, price: 99, popularity: 0, area: 1150, age: 6 };
session.run(cypher, param93)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());