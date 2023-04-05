const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
input.style.marginTop = `${(window.innerHeight - 30) / 2}px`;
const fruits = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const results = [];
	for (let fruit of fruits) {
		if (fruit.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
			results.push(fruit);
		}
	}
	if (results.length >= 1) {
		suggestions.parentElement.classList.add("has-suggestions");
	}
	else {
		suggestions.parentElement.classList.remove("has-suggestions");
	}
	return results;
}

function searchHandler(e) {
	const results = search(input.value);
	suggestions.innerHTML = "";
	for (let result of results) {
		const newSugestion = document.createElement("li");
		newSugestion.innerText = result;
		suggestions.append(newSugestion);
	}
}

function useSuggestion(e) {
	if (e.target === suggestions) {
		return;
	}
	input.value = e.target.innerText;
	searchHandler();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
addEventListener('resize', () => {
	console.log("hi");
	input.style.marginTop = `${(window.innerHeight - 30) / 2}px`;
});
