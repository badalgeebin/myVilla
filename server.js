const express = require("express");
const driver = require("./neo4j");

const app = express();
const port = 80;

app.use(express.static("public"));
app.set('view engine', 'ejs');

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

app.get("/login", (req,res) => {
    res.render("login")
})

app.get("/signup", (req,res) => {
    res.render("signup")
})

app.get("/newpsw", (req,res) => {
    res.render("newpsw")
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
})