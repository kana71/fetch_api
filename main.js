function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min) + min);
}

async function fetchComments() {

    randomNum = getRandomInt(1, 21);

    const url = 'https://pokeapi.co/api/v2/pokemon/' + randomNum + '/';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
    });
    
    const json = await response.json();
    console.log(json)
    return json;

    } catch(err) {
        console.log(err);
    }
}

fetchComments().then((pokemon) => {

    console.log(pokemon)

    // let output='<ol>'; 

    let output=``; 

    output += `
        <div class="container mt-4" id="output">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h1>Pokedex</h1><br/>
                    <h3>Refresh to get a new Pokemon: </h3>

                    <div class="card d-flex flex-column justify-content-center shadow-lg" style="width: 30rem;">
                    <img src=" ${ pokemon.sprites.front_default } " class="card-img-top" alt="pokemon-picture"></img>

                    
                    <div class="card-body shadow-lg">
                        <h5 class="card-title">Pokemon name: ${pokemon.name}</h5>
                        <p class="card-text">
                            Pokemon id: ${pokemon.id} <br/>
                            Base experience: ${pokemon.base_experience}
                        </p>
                        <a href="${ pokemon.sprites.other.dream_world.front_default}" class="btn btn-primary">Another image</a>
                    </div>
                </div>
            </div>
            
        </div>`
        
    document.body.innerHTML = output

}).catch(err => {
    console.log(err);
});