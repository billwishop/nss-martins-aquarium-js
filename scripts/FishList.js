/* 
* FishList which renders individual fish objects as HTML
*/

import { useFish } from "./FishDataProvider"

// TODO: Import `useFish` from the data provider module

export const FishList = () => {

    const contentElement = document.querySelector("contentContainer__left")
    const fishes = useFish()

    contentElement.innerHTML += `
        <article class="fishList">
            All the fish go here!
        </article>
    `
}
