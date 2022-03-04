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

pokemonList.forEach(function(pokemon) {
	document.write(pokemon.name + ' (height: ' + pokemon.height + ') ' + pokemon.type);
	document.write("<br/>");
	}
);
