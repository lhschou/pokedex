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

	return {
		add: add,
		getAll: getAll
	};
})();

pokemonRepository.getAll().forEach(function(pokemon) {
	document.write(pokemon.name + ' (height: ' + pokemon.height + ') ' + pokemon.type);
	document.write("<br/>");
	}
);

console.log(pokemonRepository.getAll()); 
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());
