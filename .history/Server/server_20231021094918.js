const express = require('express');
const swapi = require('swapi-api');
const app = express();

app.get('/api/characters', async (req, res) => {
    try{
        const {name1, name2} = req.query;
        const character1 = await swapi.get('people/?search=${name1}');
        const character1 = await swapi.get('people/?search=${name1}');


        res.status(200).json(characterComparisonResult);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
    
    
});
