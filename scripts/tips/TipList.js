import { useTips } from "./TipDataProvider.js"
import { Tips } from "./Tip.js"

export const TipList = () => {
    const contentElement = document.querySelector(".contentContainer__right")
    const tips = useTips()

    let tipsHTMLRepresentations = ""
    for (const tipObj of tips) {
        tipsHTMLRepresentations += Tips(tipObj)
    }

    contentElement.innerHTML += `
    <div class="tipSection">
        <h3>Tips</h3>
        <div class="tipList">
            <div class="tip">
                ${tipsHTMLRepresentations}
            </div>
         </div>
    </div>
    `
}





















