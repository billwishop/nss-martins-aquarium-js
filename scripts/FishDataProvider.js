/*Fish objects that will feed into functions to create HTML*/

const fishCollection = [
    {
        name: "Bubba",
        food: "crustaceans",
        species: "Red Marlboro Discus",
        length: 9,
        location: "Xochimilco (near Mexico City)",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89561RedMarlboroDiscus.jpg"
    },
    {
        name: "Grover",
        food: "crustaceans",
        species: "Yellow Marlboro Discus",
        length: 8,
        location: "Australia",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th89585YellowMarlboroDiscus.jpg"
    },
    {
        name: "Jamie",
        food: "crustaceans",
        species: "Stardust Discus",
        length: 8,
        location: "Argentina",
        image: "https://www.liveaquaria.com/images/categories/thumbs/th-0117192-068.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}