let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
	function add(pokemon) {
    if (
      typeof pokemon === "object" && 
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);  
    } else {
      console.log("pokemon is not correct");
    }
  }

	function getAll() {
		return pokemonList;
	}		

	// Searchbar 
	function findPokemon(searchName) {
		if (!searchName) {
      return pokemonList;
    }

    return pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchName.toLowerCase())
    );
  } 
  
  function loadfindPokemonList() {
    pokemonList.forEach(addListItem);
    let pokemonListContainer = $('#pokemon-list');
    $('#search-input').on('input', event => {
      pokemonListContainer.empty();
      let findPokemonList = findPokemon(event.target.value);
      findPokemonList.forEach(addListItem);
    });
  }


	function addListItem(pokemon) {
		let pokemonList = $('#pokemon-list');
		let pokemonListbutton = $('<button></button>')
      .addClass('list-group-item text-capitalize')
      .attr("data-toggle", "modal")
      .attr("role", "listitem")
      .attr("type", "button")
      .attr("data-target", "#pokemonModal")
      .text(pokemon.name)
      .on({
        click: () => {
          showDetails(pokemon);
        }
      });
    pokemonList.append(pokemonListbutton);
	}

	// Load list of Pokemon from api
	function loadList() {
		return fetch(apiUrl).then(function(response) {
			return response.json();
		}).then(function(json) {
			json.results.forEach(function(item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}

	// Add details from the Pokemon 
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function(response) {
			return response.json();
		}).then(function(details) {
			item.imageUrl = details.sprites.other.dream_world.front_default;
			item.types = details.types;
      item.height = details.height;
      item.weight = details.weight;
      item.abilities = details.abilities;
		}).catch(function(e) {
			console.error(e);
		});
	}

  // Add modal to show Pokemon details
	function showDetails(item) {
		loadDetails(item).then(function() {
      showModal(item);
    });
  }
  
  function showModal(pokemon) {
	  let modalTitle = $('.modal-title');
	  let modalBody = $('.modal-body');

    modalTitle.empty();
    modalBody.empty();

    let pokemonName = $('<h1>' + pokemon.name + '</h1>');
    let pokemonTypes = $('<p>' + 'Types: ' + pokemon.types.map(item => item.type.name).join(", ") + '</p>');
    let pokemonHeight = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    let pokemonWeight = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
    let pokemonAbilities = $('<p>' + 'Abilities: ' + pokemon.abilities.map(item => item.ability.name).join(", ") + '</p>');
    let pokemonImage = $('<img class=\'pokemon-modal-image\'>');
    pokemonImage.attr('src', pokemon.imageUrl);

    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonTypes);
    modalBody.append(pokemonWeight);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonAbilities);
  }

	return {
		add: add,
		getAll: getAll,
    findPokemon: findPokemon,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
    loadfindPokemonList: loadfindPokemonList,
		showDetails: showDetails
	};
})();

pokemonRepository.loadList().then(function() {
	pokemonRepository.loadfindPokemonList();
});


