const pokemonList = document.querySelector('.pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {

        data.results.forEach(pokemon => {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');

            const pokemonName = document.createElement('div');
            pokemonName.classList.add('pokemon-name');
            pokemonName.textContent = pokemon.name;

            const pokemonImg = document.createElement('img');
            pokemonImg.classList.add('pokemon-img');
            pokemonImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.results.indexOf(pokemon) + 1}.png`);
            pokemonImg.setAttribute('alt', pokemon.name);

            pokemonCard.appendChild(pokemonImg);
            pokemonCard.appendChild(pokemonName);

            pokemonList.appendChild(pokemonCard);
        });
    });
