const url =
    'https://api.spoonacular.com/recipes/findByIngredients?apiKey=8eda96c12391450c9a7229220b451b76&ingredients=apples,+flour,+sugar&number=2';

const fetchPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};

console.log(fetchPokemon());
