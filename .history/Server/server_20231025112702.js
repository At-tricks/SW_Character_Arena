const express = require('express');
const dataAccess = require('./dataAccess');
const character = require('./characterModel')
const missingData = require('./missingDatalogic')
const compareson = require('./comparisonLogic')
const app = express();

app.get('/people-names', async (req, res) => {
    try {
        const allCharacterNames = await dataAccess.getAllPeopleNames();
        res.json(allCharacterNames);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
        error: 'Internal server error'
        });
    }
});

app.get('/character-details', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

app.get('/search', async (req, res) => {
    //const character1Name = req.query.character1;
    //const character2Name = req.query.character2;
    const character1Name = "Luke Skywalker";
    const character2Name = "R2-D2";

    if (!character1Name || !character2Name) {
        res.status(400).json({
            error: 'Both character names are required'
        });
        return;
    }

    try {
        const character1Data = await dataAccess.getCharacterByName(character1Name);
        const character2Data = await dataAccess.getCharacterByName(character2Name);

        const comparisonResult = compareson.compareAttributes(character1Data, character2Data);
        const overallWinner = compareson.calculateOverallWinner(comparisonResult)

        res.json({
            characters: {character1Data, character2Data},
            comparisonResult,
            overallWinner
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
});