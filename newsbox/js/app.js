const apiKey = 'c71f8e2dbd594a86a10f7f073ce19aa2';
const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

function fetchNews(query = '') {
    const searchUrl = query ? `${url}&q=${query}` : url;
    
    axios.get(searchUrl)
        .then((response) => {
            const articles = response.data.articles;
            let output = '';
    
            articles.forEach((article) => {
                output += `
                    <div class="card">
                        <img src="${article.urlToImage}" alt="">
                        <div class="card-content">
                            <div class="card-title">${article.title}</div>
                            <div class="card-author">author: ${article.author}</div>
                            <div class="card-description">
                                ${article.description}
                            </div>
                        </div>
                    </div>
                `;
            });
    
            document.getElementById('card-container').innerHTML = output;
        })
        .catch(error => console.log('Error fetching the news:', error));
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchBox').value;
    fetchNews(query);
});

fetchNews();
