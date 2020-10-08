import { renderLocation } from "./Location.js"
import { usePlaces } from "./LocationDataProvider.js"



export const LocationsList = () => {

    const contentElement = document.querySelector(".contentContainer__left")
    const locations = usePlaces()

    let locationsHTMLRepresentations = ""
    for (const locObj of locations) {
        locationsHTMLRepresentations += renderLocation(locObj)
    }

    contentElement.innerHTML += `
    <div class="locationsSection">
        <h3>Harvest Locations</h3>
        <div class="locations">
            ${locationsHTMLRepresentations}
        </div>
    </div>
    `

}