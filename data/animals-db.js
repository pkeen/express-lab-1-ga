const animals = [
    {   
        id: 0,
        name: "Lion",
        color: "gold",
        description: "Large cat found on African continent"
    },
    {
        id: 1,
        name: "elephant",
        color: "grey",
        description: "Largest land mammal, good memory"
    },
    {
        id: 2,
        name: "crodile",
        color: "green",
        description: "Cold blooded repitilian predator"
    },
    {
        id: 3,
        name: "gorilla",
        color: "black",
        description: "Largest primate on earth"
    }
];

function getAnimal(id) {
    id = parseInt(id);
    return animals.find(animal => animal.id === id);
}

module.exports = {

    getAnimals: () => {
        return animals;
    },

    getAnimal
}