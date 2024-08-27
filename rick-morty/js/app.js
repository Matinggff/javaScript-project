async function fetchCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results)
    showCharacters(data.results);
}


function showCharacters(character) {
    const characterLists = document.getElementById("character-list");
    const countCharacters = document.getElementById("character-count");
    countCharacters.textContent = character.length;

    character.forEach((e)=> {
        const div = document.createElement("div");
        div.classList.add('character-item');
        div.innerHTML = `
            <img src="${e.image}" alt="${e.name}" width="50">
            <div>
                <strong>${e.name}</strong><br>
                <span>${e.status}-${e.species}</span>
            </div>
            <p>👁️</p>
        `;
        div.onclick = ()=> showDetailCharacters(e)
        characterLists.appendChild(div);
    })
}

function showDetailCharacters(character) {
    document.getElementById("character-image").src = character.image;
    document.getElementById("character-status").textContent = `${character.status} ${character.species}`;
    document.getElementById("character-location").textContent = character.location.name;
    document.getElementById("favourite-note").textContent = 'this character is already in your favourites';

}
    

fetchCharacters()