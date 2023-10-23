const swapi = require('swapi-node');

async function handleMissingAttribute(attribute, getDataFunction) {
    if (attribute === undefined) {
        return "0"; // or use a sentinel value like null
    }
    try {
        // Fetch additional data
        return await getDataFunction(attribute);
    } catch (error) {
        console.error(`Error fetching ${attribute} data:`, error);
        return "0"; // or use a sentinel value
    }
}

function assignDefaultIfUndefined(value, defaultValue) {
    return typeof value !== 'undefined' ? value : defaultValue;
}

//Return all Character names
async function getAllPeopleNames() {
    try {
        const allPeople = await swapi.get('people');
        const peopleNames = allPeople.results.map((person) => person.name);
        return peopleNames;
    } catch (error) {
        console.error('Error fetching people names:', error);
        throw error;
    }
}

//Return all possible eye colors of characters
async function getAllEyeColors() {
    try {
        const allPeople = await swapi.get('people');
        const eyeColors = new Set();

        allPeople.results.forEach((person) => {
            eyeColors.add(person.eye_color);
        });

        return Array.from(eyeColors);
    } catch (error) {
        console.error('Error fetching eye color data:', error);
        throw error;
    }
}

//Return all possible Hair Colors of characters
async function getAllHairColors() {
    try {
        const allPeople = await swapi.get('people');
        const hairColors = new Set();

        allPeople.results.forEach((person) => {
            hairColors.add(person.hair_color);
        });

        return Array.from(hairColors);
    } catch (error) {
        console.error('Error fetching hair color data:', error);
        throw error;
    }
}

//Return character home world's Name and Diameter
async function getHomeWorldDetails(url) {
    try {
        const homeWorldData = await swapi.get(url);
        return {
            name: homeWorldData.name,
            diameter: homeWorldData.diameter,
        };
    } catch (error) {
        console.error('Error fetching homeWorld data:', error);
        return {
            name: 'Unknown',
            diameter: "0",
        };
    }
}

//Return character species' Name and Life Span
async function getSpeciesDetails(url) {
    try {
        const speciesData = await swapi.get(url);
        return {
            name: speciesData.name,
            lifeSpan: speciesData.average_lifespan,
        };
    } catch (error) {
        console.error('Error fetching species data:', error);
        return {
            name: 'Unknown',
            lifeSpan: "0",
        };
    }
}

//Return character vehicale's Name and Cargo Capacity
async function getVehicleDetails(url) {
    try {
        const vehicleData = await swapi.get(url);
        return {
            name: vehicleData.name,
            cargoCapacity: vehicleData.cargo_capacity,
        };
    } catch (error) {
        console.error('Error fetching vehicle data:', error);
        return {
            name: 'Unknown',
            cargoCapacity: "0",
        };
    }
}

//Return Character attributes
async function getCharacterByName(name) {
    try {
        const characterData = await swapi.get('people', {
            search: name
        });
        const character = characterData.results[0];

        // Assign default values to attributes that may be missing
        character.birth_year = assignDefaultIfUndefined(character.birth_year, "0");
        character.height = assignDefaultIfUndefined(character.height, "0");
        character.mass = assignDefaultIfUndefined(character.mass, "0");
        character.eye_color = assignDefaultIfUndefined(character.eye_color, "0");
        character.hair_color = assignDefaultIfUndefined(character.hair_color, "0");

        // Fetch additional data
        character.homeWorld = await handleMissingAttribute(character.homeworld, getHomeWorldDetails);
        console.log("Species:", character.species);
        character.species = await handleMissingAttribute(character.species, (species) => getSpeciesDetails(species[0]));
        console.log("Species after handling:", character.species);
        character.vehicles = await handleMissingAttribute(character.vehicles, (vehicle) => getVehicleDetails(vehicle[0]));

        const completeCharacter = {
            name: character.name,
            birthYear: character.birth_year,
            height: character.height,
            mass: character.mass,
            eyeColor: character.eye_color,
            hairColor: character.hair_color,
            homeWorld: character.homeWorld,
            species: character.species,
            vehicles: character.vehicles,
        };

        return completeCharacter;

    } catch (error) {
        console.error('Error fetching character data:', error);
        throw error;
    }
};

module.exports = {
    getAllPeopleNames,
    getAllEyeColors,
    getAllHairColors,
    getCharacterByName,
};