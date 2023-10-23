const comparisonLogic = require('./comparisonLogic');
const dataAccess = require('./dataAccess');

// Mocking the dependencies for the dataAccess module
jest.mock('./dataAccess', () => ({
    getAllEyeColors: jest.fn(),
    getAllHairColors: jest.fn(),
}));

describe('Comparison Logic', () => {
    describe('convertAttributesToInt', () => {
        it('should convert the attributes of the character object to integers', async () => {
            // Mocking the return values of the dataAccess module functions
            dataAccess.getAllEyeColors.mockResolvedValue(['blue', 'brown']);
            dataAccess.getAllHairColors.mockResolvedValue(['black', 'blonde']);

            const character = {
                birthYear: '33BBY',
                height: '180',
                mass: '70',
                eyeColor: 'blue',
                hairColor: 'black',
                homeWorld: {
                    diameter: '10000',
                },
                species: {
                    lifeSpan: '80',
                },
                vehicles: {
                    cargoCapacity: '5000',
                },
            };

            const convertedCharacter = await comparisonLogic.convertAttributesToInt(character);

            expect(convertedCharacter.birthYear).toBe(33);
            expect(convertedCharacter.height).toBe(180);
            expect(convertedCharacter.mass).toBe(70);
            expect(convertedCharacter.eyeColor).toBe(10); // Assuming 'blue' maps to 10
            expect(convertedCharacter.hairColor).toBe(10); // Assuming 'black' maps to 10
            expect(convertedCharacter.homeWorld).toBe(10000);
            expect(convertedCharacter.species).toBe(80);
            expect(convertedCharacter.vehicles).toBe(5000);
        });
    });

    describe('compareAttributes', () => {
        it('should compare the attributes of two characters and return the results', () => {
            const character1 = {
                name: 'Luke Skywalker',
                birthYear: 33,
                height: 180,
                mass: 70,
                eyeColor: 10,
                hairColor: 10,
                homeWorld: 10000,
                species: 80,
                vehicles: 5000,
            };

            const character2 = {
                name: 'Darth Vader',
                birthYear: 40,
                height: 190,
                mass: 80,
                eyeColor: 20,
                hairColor: 20,
                homeWorld: 8000,
                species: 90,
                vehicles: 4000,
            };

            const comparisonResults = comparisonLogic.compareAttributes(character1, character2);

            expect(comparisonResults.character1.wins).toBe(3);
            expect(comparisonResults.character2.wins).toBe(4);
            expect(comparisonResults.character1.attributes.birthYear).toBe('Lose');
            expect(comparisonResults.character2.attributes.birthYear).toBe('Win');
            expect(comparisonResults.character1.attributes.height).toBe('Lose');
            expect(comparisonResults.character2.attributes.height).toBe('Win');
            // ... and so on for other attributes
        });
    });

    describe('calculateOverallWinner', () => {
        it('should calculate the overall winner based on the comparison results', () => {
            const comparisonResults1 = {
                character1: {
                    wins: 3
                },
                character2: {
                    wins: 4
                },
            };
            const comparisonResults2 = {
                character1: {
                    wins: 5
                },
                character2: {
                    wins: 3
                },
            };
            const comparisonResults3 = {
                character1: {
                    wins: 4
                },
                character2: {
                    wins: 4
                },
            };

            expect(comparisonLogic.calculateOverallWinner(comparisonResults1)).toBe('Darth Vader');
            expect(comparisonLogic.calculateOverallWinner(comparisonResults2)).toBe('Luke Skywalker');
            expect(comparisonLogic.calculateOverallWinner(comparisonResults3)).toBe('Equal');
        });
    });
});