/* 
* FishList which renders individual fish objects as HTML
*/

import { Fish } from "./fish/Fish.js"
import { useFish } from "./fish/FishDataProvider.js"



export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")
    
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    contentElement.innerHTML += `
        <section class="fishList">
            <h3>Fish List</h3>
            <div class="fishContainer">
                ${fishHTMLRepresentations}
            </div>
        </section>
    `
}
