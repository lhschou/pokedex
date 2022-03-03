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

for (let i = 0; i < pokemonList.length; i++) {
	document.write(pokemonList[i].name + ' (height: '+ pokemonList[i].height + ') ');

	if (pokemonList[i].height >1.5) {
		document.write("- Wow that's big!");
	}

		document.write ('<br/>');
}