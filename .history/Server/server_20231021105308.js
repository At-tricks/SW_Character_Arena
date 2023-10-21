const express = require('express');
const swapi = require('swapi-node');
const app = express();
const port = 3000;

app.get('/search', async (req, res) => {
    const character1Name = req.query.character1;
    const character2Name = req.query.character2;

    if(!character1 || !character2){
        res.status(400).json({error: 'Both character names are required'});
        return;
    }

    try{
        const {name1, name2} = req.query;
        const character1Data = await data;
        const character2Data = await swapi.get('people', {search: character2});


        res.json({character1: character1Data, character2: character2Data});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});
