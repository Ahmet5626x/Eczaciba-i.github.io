const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes'];

function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Arama terimini küçük harfe dönüştür
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (searchTerm.length === 0) {
        return; // Eğer arama kutusu boşsa, işlem yapma
    }

    const filteredResults = suggestions.filter(item =>
        item.toLowerCase().includes(searchTerm) // Küçük harfe dönüştürülmüş arama terimini içeren sonuçları filtrele
    );

    filteredResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.textContent = result;
        resultsContainer.appendChild(resultElement);
    });

    if (filteredResults.length === 0) {
        resultsContainer.textContent = 'Arama sonucu bulunamadı.';
    }
}
