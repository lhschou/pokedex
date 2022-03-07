let pokemonRepository = (function () {
	let pokemonList = [
	{
		name: 'Bulbasaur',
		height: 0.7,
		type: ['grass', 'poison']
	},

	{
		name: 'Ivysaur',
		height: 1, 
		type: ['grass', 'poison']
	},

	{	
		name: 'Wartortle',
		height: 1,
		type: ['water']
	},

	{
		name: 'Dratini',
		height: '1.8',
		type: ['dragon']
	}
];

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}	

	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		let listpokemon = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button-class')
		console.log(button.innerText);
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();

console.log(pokemonRepository.getAll()); 
pokemonRepository.add({ name: 'Pikachu' });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);	
});



