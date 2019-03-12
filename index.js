const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
} 

async function start () {
	const content = {} 

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

await robots.text(content)	


function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix() { 
		const prefixes = ['Who is', 'What is', 'The History of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}
	
	console.log(content)
}


start ()


// ### PRIMEIRA VERSAO DO CODIGO - FUTURA IMPLEMENTACAO... ###

/*

const readline = require('readline-sync')
const robots = {
	userInput: require('./robots/user-input.js')
	text: require('./robots/text.js')
} 

function start () {
	const content = {} 

	robots.userInput(content)
	robots.text(content)

	console.log(content)
}
start ()

*/