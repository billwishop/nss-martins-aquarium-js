/*Fish objects that will feed into functions to create HTML*/

const fishCollection = [
    {
        name: "Bubba",
        food: "crustaceans",
        species: "Red Marlboro Discus",
        length: 9,
        location: "Xochimilco",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89561RedMarlboroDiscus.jpg"
    },
    {
        name: "Grover",
        food: "crustaceans",
        species: "Yellow Marlboro Discus",
        length: 5,
        location: "Australia",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89585YellowMarlboroDiscus.jpg"
    },
    {
        name: "Jamie",
        food: "crustaceans",
        species: "Stardust Discus",
        length: 10,
        location: "Argentina",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th-0117192-068.jpg"
    },
    {
        name: "Andy",
        food: "crustaceans",
        species: "Red Marlboro Discus",
        length: 30,
        location: "Xochimilco",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89561RedMarlboroDiscus.jpg"
    },
    {
        name: "Jasmine",
        food: "crustaceans",
        species: "Yellow Marlboro Discus",
        length: 60,
        location: "Australia",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89585YellowMarlboroDiscus.jpg"
    },
    {
        name: "Amy",
        food: "crustaceans",
        species: "Stardust Discus",
        length: 8,
        location: "Argentina",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th-0117192-068.jpg"
    },
    {
        name: "Papa",
        food: "crustaceans",
        species: "Red Marlboro Discus",
        length: 20,
        location: "Xochimilco",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89561RedMarlboroDiscus.jpg"
    },
    {
        name: "Todd",
        food: "crustaceans",
        species: "Yellow Marlboro Discus",
        length: 15,
        location: "Australia",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89585YellowMarlboroDiscus.jpg"
    },
    {
        name: "Johnny",
        food: "crustaceans",
        species: "Stardust Discus",
        length: 21,
        location: "Argentina",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th-0117192-068.jpg"
    },
    {
        name: "Bella",
        food: "crustaceans",
        species: "Red Marlboro Discus",
        length: 20,
        location: "Xochimilco",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89561RedMarlboroDiscus.jpg"
    },
    {
        name: "Lindsay",
        food: "crustaceans",
        species: "Yellow Marlboro Discus",
        length: 8,
        location: "Australia",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89585YellowMarlboroDiscus.jpg"
    },
    {
        name: "Sandy",
        food: "crustaceans",
        species: "Stardust Discus",
        length: 10,
        location: "Argentina",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th-0117192-068.jpg"
    }
]

export const useFish = () => {
    //.slice returns a new copy of the array
    return fishCollection.slice()
}

// function responsible for checking for multiple of 3
export const mostHolyFish = () => {
    
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0)
        holyFish.push(fish)
    }
    return holyFish
}

// function responsible for checking for multiple of 5
export const soldierFish = () => {
    
    const soldiers = []

    for (const fish of fishCollection) { 
        if (fish.length % 5 === 0 && fish.length % 3 !== 0)
        soldiers.push(fish)
    }

    return soldiers
}

export const nonHolyFish = () => {

    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0)
        regularFish.push(fish)
    }

    return regularFish
}