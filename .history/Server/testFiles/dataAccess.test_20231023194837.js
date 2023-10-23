jest.mock('swapi-node', () => {
    return {
        get: jest.fn(),
    };
});

//Test handleMissingAttribute
test('handleMissingAttribute should return "0" if attribute is empty', async () => {
    const dataAccess = require('./dataAccess.js');
    const result = await dataAccess.handleMissingAttribute('', jest.fn());
    expect(result).toBe('0');
});

test('handleMissingAttribute should fetch data if attribute is not empty', async () => {
    const dataAccess = require('./dataAccess.js');
    const getDataFunction = jest.fn().mockResolvedValue('Success');
    const result = await dataAccess.handleMissingAttribute('attribute', getDataFunction);
    expect(result).toBe('Success');
});

test('handleMissingAttribute should handle errors and return "0"', async () => {
    const dataAccess = require('./dataAccess.js');
    const getDataFunction = jest.fn().mockRejectedValue(new Error('Oops!'));
    const result = await dataAccess.handleMissingAttribute('attribute', getDataFunction);
    expect(result).toBe('0');
});

//Test assignDefaultIfUndefined
test('assignDefaultIfUndefined should return default value if attribute is empty', () => {
    const dataAccess = require('./dataAccess.js');
    const result = dataAccess.assignDefaultIfUndefined('', 'default');
    expect(result).toBe('default');
});

test('assignDefaultIfUndefined should return attribute if not empty', () => {
    const dataAccess = require('./dataAccess.js');
    const result = dataAccess.assignDefaultIfUndefined('attribute', 'default');
    expect(result).toBe('attribute');
});

//Test getAllPeopleNames
test('getAllPeopleNames should return an array of people names', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockPeople = {
        results: [{
                name: 'Luke Skywalker'
            },
            {
                name: 'Princess Leia'
            },
        ],
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValue(mockPeople);

    const result = await dataAccess.getAllPeopleNames();
    expect(result).toEqual(['Luke Skywalker', 'Princess Leia']);
});

//Test getAllEyeColors
test('getAllEyeColors should return an array of eye colors', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockPeople = {
        results: [{
                eye_color: 'blue'
            },
            {
                eye_color: 'brown'
            },
        ],
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValue(mockPeople);

    const result = await dataAccess.getAllEyeColors();
    expect(result).toEqual(['blue', 'brown']);
});

//Test getAllHairColors
test('getAllHairColors should return an array of hair colors', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockPeople = {
        results: [{
                hair_color: 'blonde'
            },
            {
                hair_color: 'brown'
            },
        ],
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValue(mockPeople);

    const result = await dataAccess.getAllHairColors();
    expect(result).toEqual(['blonde', 'brown']);
});

//Test getHomeWorldDetails
test('getHomeWorldDetails should return home world name and diameter', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockHomeWorld = {
        name: 'Tatooine',
        diameter: '10465',
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValue(mockHomeWorld);

    const result = await dataAccess.getHomeWorldDetails('homeWorldUrl');
    expect(result).toEqual({
        name: 'Tatooine',
        diameter: '10465'
    });
});

//Test getSpeciesDetails
test('getSpeciesDetails should return species name and life span', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockSpecies = {
        name: 'Human',
        average_lifespan: '120',
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValue(mockSpecies);

    const result = await dataAccess.getSpeciesDetails('speciesUrl');
    expect(result).toEqual({
        name: 'Human',
        lifeSpan: '120'
    });
});

//Test getVehicleDetails
test('getVehicleDetails should return vehicle name and cargo capacity', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockVehicle = {
        name: 'X-wing',
        cargo_capacity: '100',
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValue(mockVehicle);

    const result = await dataAccess.getVehicleDetails('vehicleUrl');
    expect(result).toEqual({
        name: 'X-wing',
        cargoCapacity: '100'
    });
});

//Test getCharacterByName
test('getCharacterByName should return complete character data', async () => {
    const dataAccess = require('./dataAccess.js');
    const mockCharacter = {
        birth_year: '19 BBY',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        hair_color: 'blonde',
        homeworld: 'homeworldUrl',
        species: ['speciesUrl'],
        vehicles: ['vehicleUrl'],
    };
    const mockSwapi = require('swapi-node');
    mockSwapi.get.mockResolvedValueOnce(mockCharacter);

    const mockHomeWorldDetails = {
        name: 'Tatooine',
        diameter: '10465',
    };
    const mockSpeciesDetails = {
        name: 'Human',
        average_lifespan: '120',
    };
    const mockVehicleDetails = {
        name: 'X-wing',
        cargo_capacity: '100',
    };
    const mockDataAccess = require('./dataAccess.js');
    mockDataAccess.getHomeWorldDetails = jest.fn().mockResolvedValue(mockHomeWorldDetails);
    mockDataAccess.getSpeciesDetails = jest.fn().mockResolvedValue(mockSpeciesDetails);
    mockDataAccess.getVehicleDetails = jest.fn().mockResolvedValue(mockVehicleDetails);

    const result = await dataAccess.getCharacterByName('Luke Skywalker');
    expect(result).toEqual({
        name: 'Luke Skywalker',
        birthYear: '19 BBY',
        height: '172',
        mass: '77',
        eyeColor: 'blue',
        hairColor: 'blonde',
        homeWorld: mockHomeWorldDetails,
        species: mockSpeciesDetails,
        vehicles: mockVehicleDetails,
    });
});