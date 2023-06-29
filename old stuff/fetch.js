const url = 'https://pokeapi.co/api/v2/pokemon';

const theBody = document.querySelector('body');
const button = document.querySelector('button');

const fetchPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;

    return results.map((pokeData) => {
        // create elements in which we can dump crap
        const section = document.createElement('section');
        const h1 = document.createElement('h1');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const ul = document.createElement('ul');

        // the function with which we acquire a SINGLE pokemon
        // this is achieved by utilizing our pokeData and grabbing the NAME
        const getSinglePokemon = async (pokemonName) => {
            // here we are appending the pokemon's name to our url to fetch
            const singlePokemon = await fetch(`${url}/${pokemonName}`);
            const singlePokemonData = await singlePokemon.json();

            // here we map through each one of those pokeDetails
            // we want to access the abilities!
            // it comes in an array, so i'm just gonna map
            singlePokemonData.abilities.map((pokeDetails) => {
                const li = document.createElement('li');

                // setting the li we created's text content as the ability
                li.textContent = `Ability: ${pokeDetails.ability.name}`;

                // appending said ability to the ul we created up there
                ul.appendChild(li);
            });

            // create an li to store the type we get back!
            const typeLi = document.createElement('li');

            // this is a ternary.....lemme explain!!
            console.log(singlePokemonData);
            singlePokemonData.types[1]?.type.name
                ? (typeLi.textContent = `Types: ${singlePokemonData.types[0]?.type.name} & ${singlePokemonData.types[1]?.type.name}`)
                : (typeLi.textContent = `Type: ${singlePokemonData.types[0]?.type.name}`);

            // we append it to the ul we created
            ul.appendChild(typeLi);

            // here we're just setting the image source to the url we get from the pokeData
            // I'll explain how we know it's called "back_default"
            img.src = singlePokemonData.sprites['front_default'];
        };

        // here i'm just calling the function we created, and passing in the NAME of the pokemon
        getSinglePokemon(pokeData.name);

        // setting the h1 to the name of the pokemon
        h1.textContent = pokeData.name;

        // the section where we append a bunch of stuff
        section.appendChild(img);
        div.appendChild(ul);
        section.appendChild(h1);
        section.appendChild(div);
        theBody.appendChild(section);
    });
};

button.addEventListener('click', fetchPokemon);
