const tipsCollection = () => [
    {
        title: "Tank Care:",
        tip: "The tank should be completely empty before you clean it. You’ll need salt, vinegar and some soft scrubbing pads. The vinegar and salt will remove any hard water stains and fishy smells. Make sure you rinse the tank thoroughly before adding any water to it. Once the tank has had a thorough clean, fill it up with water to check there are no leaks. If you do find leaks, you can use aquarium sealant."
    },
    {
        title: "Temperature",
        tip: "A stable water temperature, within a few degrees of the recommended range, is important for keeping everything in your aquarium happy and healthy. With the help of heaters and chillers, keeping your aquarium at the proper temperature has never been easier!"
    },
    {
        title: "Acclimation",
        tip: "Aquatic life can be sensitive to dramatic environmental changes, so be sure to ask the store partner what the water parameters for nitrate, nitrite, ammonia and pH levels are for the species you get, and test your setup at home to ensure that it matches as closely as possible."
    }
]

export const useTips = () => {
    return tipsCollection.slice()
}