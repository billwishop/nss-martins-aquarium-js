/* 
* FishList which renders individual fish objects as HTML
*/

import { Fish } from "./Fish.js"
import { mostHolyFish, nonHolyFish, soldierFish, useFish } from "./FishDataProvider.js"

// Building HTML for all three variations 
const buildFishContainerHTML = (someFishes) => {

    let fishHTMLRepresentations = ""
    for (const fish of someFishes) {

        fishHTMLRepresentations += Fish(fish)
    }

    return fishHTMLRepresentations
}


export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")
    
    // building Holy Fish
    const holyFishes = mostHolyFish()
   const holyFishHTML = buildFishContainerHTML(holyFishes)

   const armyOfFish = soldierFish()
   const soldierFishHTML = buildFishContainerHTML(armyOfFish)

   const normalFish = nonHolyFish()
   const normalFishHTML = buildFishContainerHTML(normalFish)

    contentElement.innerHTML += `
        <section class="fishList">
            <h3>Fish List</h3>
            <div class="fishContainer">
                ${holyFishHTML}
                ${soldierFishHTML}
                ${normalFishHTML}
            </div>
        </section>
    `
}
