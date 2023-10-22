const swapi = require('swapi-node');

//Return character home world's Name and Diameter
async function getHomeWorldDetails(url) {
    try {
        const homeWorldData = await swapi.getFromUrl(url);
        return {
            name: homeWorldData.name,
            diameter: homeWorldData.diameter,
        };
    } catch (error) {
        console.error('Error fetching homeWorld data:', error);
        throw error;
    }
}

//Return character species' Name and Life Span
async function getSpeciesDetails(url) {
    try {
        const speciesData = await swapi.getFromUrl(url);
        return {
            name: speciesData.name,
            lifeSpan: speciesData.lifespan,
        };
    } catch (error) {
        console.error('Error fetching species data:', error);
        throw error;
    }
}

//Return character vehicale's Name and Cargo Capacity
async function getVehicleDetails(url) {
    try {
        const vehicleData = await swapi.getFromUrl(url);
        return {
            name: vehicleData.name,
            cargoCapacity: vehicleData.cargo_capacity,
        };
    } catch (error) {
        console.error('Error fetching vehicle data:', error);
        throw error;
    }
}

//Return Character attributes
async function getCharacterByName(name) {
    try {
        const characterData = await swapi.get('people', {
            search: name
        });
        const character = characterData.results[0];

        // Fetch additional data
        const homeWorldDetails = await getHomeWorldDetails(character.homeworld);
        const speciesDetails = await getSpeciesDetails(character.species[0]);
        const vehicleDetails = await getVehicleDetails(character.vehicles[0]);

        // Combine the character data with the additional data
        const completeCharacter = {
            name: character.name,
            birthYear: character.birth_year,
            height: character.height,
            mass: character.mass,
            eyeColor: character.eye_color,
            hairColor: character.hair_color,
            homeWorld: homeWorldDetails,
            species: speciesDetails,
            vehicles: vehicleDetails,
        };

        return completeCharacter;

    } catch (error) {
        console.error('Error fetching character data:', error);
        throw error;
    }
};

module.exports = {
    getCharacterByName,
};