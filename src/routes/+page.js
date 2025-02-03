export const load = async () => {
    const pokemonCount = 101;
    const pokemonList = [];

    for (let id = 1; id <= pokemonCount; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        pokemonList.push({
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            imageUrl: data.sprites.front_default,
            types: data.types.map(type => type.type.name)
        });
    }

    return { pokemonList };
};