async function fetchCharacters() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data.results);
        showCharacters(data.results);
        searchCharacters(data.results);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

function showCharacters(characters) {
    const characterLists = document.getElementById("character-list");
    characterLists.innerHTML = '';
    // const countCharacters = document.getElementById("character-count");
    // countCharacters.textContent = characters.length;

    characters.forEach((character) => {
        const div = document.createElement("div");
        div.classList.add('character-item');
        div.innerHTML = `
            <img src="${character.image}" alt="${character.name}" width="50">
            <div class="character-info">
                <strong>${character.name}</strong><br>
                <span>${character.status} - ${character.species}</span>
            </div>
            <p>${character.status === 'Alive' ? '💚' : '🖤'}</p>
        `;
        div.onclick = () => showDetailCharacters(character);
        characterLists.appendChild(div);
    });
}

async function showDetailCharacters(character) {
    document.getElementById("character-image").src = character.image;
    document.getElementById("character-status").textContent = `${character.status} - ${character.species}`;
    document.getElementById("character-location").textContent = `Last known location: ${character.location.name}`;
    document.getElementById("favourite-note").textContent = 'This character already is in your favourites';

    const ul = document.getElementById("ul");
    ul.innerHTML='';
    const episodesUrl = character.episode.map((url)=> fetch(url).then((res)=> res.json()));
    const episodes = await Promise.all(episodesUrl);
    
    episodes.forEach((item)=> {
        const li = document.createElement("li");
        li.innerHTML = `
        <strong>${item.episode} : ${item.name}</strong> - ${item.air_date}
        `;
        ul.appendChild(li);
    })

}

function searchCharacters(characters) {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', ()=>{
        const query = searchInput.value.toLowerCase();
        const filter = characters.filter((character)=> 
            character.name.toLowerCase().includes(query)
        )
        showCharacters(filter);
    })
}

fetchCharacters();
