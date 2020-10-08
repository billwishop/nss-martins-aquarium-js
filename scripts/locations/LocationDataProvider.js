const locationsCollection = [
    {
        locationName: "Australia"
    },
    {
        locationName: "Mexico"
    },
    {
        locationName: "Argentina"
    }
]

export const usePlaces = () => {
    return locationsCollection.slice()
}