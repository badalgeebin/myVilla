const express = require("express");
const driver = require("./neo4j");
var bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res)=>{

    var session = driver.session();
    session.run("Match (n) return n")
        .then(result => {
            flatArray = []
            result.records.forEach(record => {
                //console.log(record)
                flatArray.push({
                    name: record._fields[0].properties.Name,
                    bed: record._fields[0].properties.NoOfBedroom,
                    city: record._fields[0].properties.City,
                    district: record._fields[0].properties.District,
                    yoc: record._fields[0].properties.YearOfContract,
                    price: record._fields[0].properties.Price,
                    FID: record._fields[0].properties.FID
                });
            });
            //console.log(flatArray);
			res.render('homepage', {
				flats: flatArray
			});
        })
        .catch(function(err) {
			console.log (err);
			session.close();
		});   
})

app.get("/adddata", (req,res) => {
    res.render("adddata")
})

app.get("/search", (req,res) => {
    res.render("search")
})

app.get("/login", (req,res) => {
    res.render("login")
})

app.get("/signup", (req,res) => {
    res.render("signup")
})

app.get("/newpsw", (req,res) => {
    res.render("newpsw")
})

app.post('/details/add', function(req,res) {
    var name = req.body.Name;
	var fid = req.body.FID;
	var addr = req.body.Address;
	var city = req.body.City;
	var dist = req.body.District;
	var state = req.body.State;
	const bed = req.body.NoOfBedroom;
	const dwr = req.body.DrawingRoom;
	const dnr = req.body.DiningRoom;
	const lr = req.body.LaundryRoom;
	const kitchen = req.body.Kitchen;
	const abr = req.body.AttachedBathroom;
	const sbr = req.body.SharedBathroom;
	const balcony = req.body.Balcony;
	var floor = req.body.Flooring;
	const mi = req.body.MaxIntakes;
	var furnish = req.body.Furnished;
	const yoc = req.body.YearOfContract;
	const price = req.body.Price;
	const popularity = req.body.Popularity;
	const area = req.body.CarpetArea;
	const age = req.body.AgeOfFlat;
    var session = driver.session();
	session
		.run('CREATE (n:Details {Name: $name, FID: $fid, Address: $addr, City: $city, District: $dist, State: $state, NoOfBedroom: $bed, DrawingRoom: $dwr, DiningRoom: $dnr, LaundryRoom: $lr, Kitchen: $kitchen, AttachedBathroom: $abr, SharedBathroom: $sbr, Balcony: $balcony, Flooring: $floor, MaxIntakes: $mi, Furnished: $furnish, YearOfContract: $yoc, Price: $price, Popularity: $popularity, CarpetArea: $area, AgeOfFlat: $age}) RETURN n', {name, fid, addr, city, dist, state, bed, dwr, dnr, lr, kitchen, abr, sbr, balcony, floor, mi, furnish, yoc, price, popularity, area, age})
		
		.then(function(result) {
			res.redirect('/');
			console.log("Flat ID " + fid + " is added to database");
		})
		.catch(function(err) {
			console.log(err);
			session.close();
		});
})

app.post('/searching', function(req,res) {
	var session = driver.session();
    //console.log(req.body);
	var state = req.body.State;
	var dist = req.body.District;
	var city = req.body.City;
	const bed = parseInt(req.body.NoOfBedroom);
	var floor = req.body.Flooring;
	const price = parseInt(req.body.Price);
	const yoc = parseInt(req.body.YearOfContract);
	
	var pMin=0, pMax=0;
	
	if(price == 10) {
		pMax = 10;
	}
	else if(price == 25) {
		pMin = 10;
		pMax = 25;
	}
	else if(price == 50) {
		pMin = 25;
		pMax = 50;
	}
	else if(price == 100) {
		pMin = 50;
		pMax = 100;
	}
	else {
		pMin = 100;
		pMax = 1000;
	}
	
    // session.run('MATCH (n {State: $state, District: $dist, City: $city, Flooring: $floor, NoOfBedroom: $bed, YearOfContract: $yoc}) WHERE n.Price >= $pMin and n.Price < $pMax RETURN n', {state, dist, city, floor, bed, yoc, pMin, pMax})
	session.run('MATCH (n {State: $state, District: $dist, NoOfBedroom: $bed, YearOfContract: $yoc}) WHERE n.Price >= $pMin and n.Price < $pMax RETURN n', {state, dist, bed, yoc, pMin, pMax})
		.then(result => {
            flatArray = []
            result.records.forEach(record => {
                flatArray.push({
                    name: record._fields[0].properties.Name,
                    bed: record._fields[0].properties.NoOfBedroom,
                    city: record._fields[0].properties.City,
                    district: record._fields[0].properties.District,
                    yoc: record._fields[0].properties.YearOfContract,
                    price: record._fields[0].properties.Price,
                    FID: record._fields[0].properties.FID,
                    addr: record._fields[0].properties.Address
                });
            });
            //console.log(typeof(price));
			res.render('homepage', {
				//console.log(flatArray),
				flats: flatArray
			});
        })
        .catch(function(err) {
			console.log (err);
			session.close();
		});
})

app.get('/search/particular', function(req,res) {
	var session = driver.session();
	var fid = req._parsedOriginalUrl.query;
    console.log(fid)
	
	session
		.run('MATCH (n {FID: $fid}) RETURN n', {fid})
		
		.then(result => {
            flatArray = []
            result.records.forEach(record => {
                flatArray.push({
                	id: record._fields[0].properties.FID,
                    name: record._fields[0].properties.Name,
                    bed: record._fields[0].properties.NoOfBedroom,
                    city: record._fields[0].properties.City,
                    district: record._fields[0].properties.District,
                    state: record._fields[0].properties.State,
                    yoc: record._fields[0].properties.YearOfContract,
                    price: record._fields[0].properties.Price,
                    FID: record._fields[0].properties.FID,
                    addr: record._fields[0].properties.Address,
                    dwr: record._fields[0].properties.DrawingRoom,
                    dnr: record._fields[0].properties.DiningRoom,
                    lr: record._fields[0].properties.LaundryRoom,
                    age: record._fields[0].properties.AgeOfFlat,
                    area: record._fields[0].properties.CarpetArea
                });
                
            });
            //console.log(flatArray);
			res.render('details', {
				flats: flatArray
			});
		})
		.catch(function(err) {
			console.log(err);
		});
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
})