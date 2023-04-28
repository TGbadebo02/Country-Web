const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// add middlewares

const root = require('path').join(__dirname, '..', 'client', 'build');
app.use(express.static(root));

const port = process.env.PORT

app.get('/country/:name', async (req, res) => {
    try { 
        let country = '';
        await axios.get('https://restcountries.com/v3.1/name/'+req.params.name)
        .then((response) => {country = response.data})
        .catch(error => {country = error});
        res.send(country);
    }
    catch(error){
        console.log('Country not found', error);
    }
});

app.get('/currency/:currency', async (req, res) => {
    try { 
        let country = '';
        await axios.get('https://restcountries.com/v3.1/currency/'+req.params.currency)
        .then((response) => {country = response.data})
        .catch(error => {country = error});
        res.send(country.json());
    }
    catch(error){
        console.log('Country not found', error);
    }
});

app.get('/language/:language', async (req, res) => {
    try { 
        let country = '';
        await axios.get('https://restcountries.com/v3.1/lang/'+req.params.language)
        .then((response) => {country = response.data})
        .catch(error => {country = error});
        res.send(country);
    }
    catch(error){
        console.log('Country not found', error);
    }
});

app.get('/capital/:city', async (req, res) => {
    try { 
        let country = '';
        await axios.get('https://restcountries.com/v3.1/capital/'+req.params.city)
        .then((response) => {country = response.data})
        .catch(error => {country = error});
        res.send(country);
    }
    catch(error){
        console.log('Country not found', error);
    }
});

app.get('/region/:reg', async (req, res) => {
    try { 
        let country = '';
        await axios.get('https://restcountries.com/v3.1/region/'+req.params.reg)
        .then((response) => {country = response.data})
        .catch(error => {country = error});
        res.send(country);
    }
    catch(error){
        console.log('Country not found', error);
    }
});

app.get('/subregion/:sub', async (req, res) => {
    try { 
        let country = '';
        await axios.get('https://restcountries.com/v3.1/subregion/'+req.params.sub)
        .then((response) => {country = response.data})
        .catch(error => {country = error});
        res.send(country);
    }
    catch(error){
        console.log('Country not found', error);
    }
});


app.listen(port || 3100 , () => {
console.log(`Example app listening on port ${port}`);
});
