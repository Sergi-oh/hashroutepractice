window.addEventListener("hashchange", () => {
    selectArtist()
})

const state = {
    artist: [],
    singleArtist: null
}

function selectArtist(){
    getEventFromHash()
    renderItem();
}

function getEventFromHash(){
    const id = window.location.hash.slice(1)
    const singleArtist = state.artist.find((art) => {
        return art.name === name
    })
    state.singleArtist = singleArtist
    console.log(state)
}

function renderArtistDetails(){
    if(state.singleArtist){
        getSingleArt()
    }
}

const artistDiv = document.getElementById("artistDiv")

async function getSingleArt(){
    const artdata = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/artists/${state.singleArtist.name}`)
    const singleArtData = await artdata.json()
    state.singleArtist = singleArtData
    const description = state.singleArtist.description.map((info) => {
        return `<p> ${info.info.name}</p>`
    })

    artistDiv.innerHTML = `<h1>${state.singleArtist.name}</h1>
    <img src=${current.imageUrl} />`
}