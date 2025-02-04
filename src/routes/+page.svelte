<script>
    // VERSIONE PRECEDENTE
    //export let data;
    
    // VERSIONE ATTUALE
    let {data} = $props();
    $inspect(data)
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-primary">Pokémon Collection</h1>
    
    <div class="flex flex-wrap justify-center gap-6">
        {#each data.pokemonList as pokemon}
            <div class="card w-64 bg-base-100 shadow-xl">
                <img 
                    src={pokemon.imageUrl} 
                    alt={pokemon.name} 
                    class="w-full h-48 object-contain pt-4"
                />
                <div class="card-body items-center text-center">
                    <h2 class="card-title capitalize text-secondary">{pokemon.name}</h2>
                    <div class="grid grid-cols-2 gap-2 text-sm w-full">
                        <div class="font-bold">ID:</div>
                        <div>#{pokemon.id}</div>
                        
                        <div class="font-bold">Height:</div>
                        <div>{pokemon.height / 10} m</div>
                        
                        <div class="font-bold">Weight:</div>
                        <div>{pokemon.weight / 10} kg</div>
                        
                        <div class="font-bold">Types:</div>
                        <div class="capitalize">{pokemon.types.join(', ')}</div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>