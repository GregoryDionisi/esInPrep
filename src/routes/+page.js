export const load = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    const responsBody = await response.json();
    console.log(responsBody);

    return {
        name: responsBody.name
    };
};