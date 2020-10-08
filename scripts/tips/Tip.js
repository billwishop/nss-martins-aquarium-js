export const Tips = (tipObj) => {
    return `
    <section class="tip">
    <div class="tip__title">${tipObj.title}</div>
    <div class="tip__text">${tipObj.tip}</div>
    </section>
    `
}