class attributes {
    constructor(characterData){
        this.birth_year = characterData.birth_year;
        this.height = characterData.height;
        this.mass = characterData.mass;
        this.eye_color = characterData.eye_color;
        this.hair_color = characterData.hair_color;
        this.homeWorld = characterData.homeworld;
        this.species = characterData.species;
        this.vehicles = characterData.vehicles;
    }
};

module.exports = attributes;