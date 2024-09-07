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

let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

function showDetailCharacters(character) {
    document.getElementById("character-image").src = character.image;
    document.getElementById("character-status").textContent = `${character.status} - ${character.species}`;
    document.getElementById("character-location").textContent = `Last known location: ${character.location.name}`;
    
    const isFavourite = favourites.find(fav => fav.id === character.id);
    document.getElementById("favourite-note").textContent = isFavourite ? 'This character is in your favourites' : '';
    
    const addToFavButton = document.getElementById('add-to-fav');
    const removeFromFavButton = document.getElementById('remove-from-fav');
    
    addToFavButton.style.display = isFavourite ? 'none' : 'inline-block';
    removeFromFavButton.style.display = isFavourite ? 'inline-block' : 'none';
    
    addToFavButton.onclick = () => {
        if (!isFavourite) {
            favourites.push(character);
            localStorage.setItem('favourites', JSON.stringify(favourites));
            document.getElementById("favourite-note").textContent = 'This character is now in your favourites';
            addToFavButton.style.display = 'none';
            removeFromFavButton.style.display = 'inline-block';
        }
    };

    removeFromFavButton.onclick = () => {
        favourites = favourites.filter(fav => fav.id !== character.id);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        document.getElementById("favourite-note").textContent = 'This character has been removed from your favourites';
        addToFavButton.style.display = 'inline-block';
        removeFromFavButton.style.display = 'none';
    };

    const ul = document.getElementById("ul");
    ul.innerHTML = '';
    const episodesUrl = character.episode.map((url) => fetch(url).then((res) => res.json()));
    Promise.all(episodesUrl).then(episodes => {
        episodes.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.episode} : ${item.name}</strong> - ${item.air_date}`;
            ul.appendChild(li);
        });
    });
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
