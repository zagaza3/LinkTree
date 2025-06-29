const  shareButtons = document.querySelectorAll(".title-share-button")
console.log(shareButtons)

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    }
    catch (err){
        console.error(err)
    }
}
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))