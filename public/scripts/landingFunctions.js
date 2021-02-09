var url = 'http://newsapi.org/v2/everything?' +
    'q=bitcoin OR cryptocurrency OR chainlink OR blockchain OR ethereum&' +
    'sortBy=publishedAt&' +
    'language=en&' +
    'apiKey=f4486c3887154aab94e9b6e74c5f293b';
var req = new Request(url);
    headlineNews = document.getElementById("headlinenews");
    oldNews = document.getElementById("oldnews");

fetch(req)
    .then(response => response.json())
    .then((json) =>
    {
        const results = json;
        var headlineContent = '';
            oldContent = '';   
        for (i = 0; i < 4; i++) {
            if (i === 0) {
                headlineContent += '<div id="topstory" style="background-image: url(' + results.articles[i].urlToImage + '");>'
                headlineContent += '<a href="'+ results.articles[i].url + '">'
                headlineContent += '<section><div id="headlinetitle">' + results.articles[i].title.substring(0,100) + '</div>'
                headlineContent += '<p id="headlinedate">' + results.articles[i].publishedAt + '</p>'
                headlineContent += '<p id="headlineauthor">' + 'by: ' + results.articles[i].author + '</p></section>'
                headlineContent += '</a>'
                headlineContent += '</div>'
                headlineNews.innerHTML += headlineContent
            } else {
                oldContent += '<div class="olderstory">'
                oldContent += '<a href="' + results.articles[i].url + '">'
                oldContent += '<div><div class="newsimage" style="background-image: url(' + results.articles[i].urlToImage + '");>'
                oldContent += '</div>'
                oldContent += '<span class="articletitle">' + results.articles[i].title.substring(0,100) + '</span>'
                oldContent += '<p class="oldstoryauthor">' + 'by: ' + results.articles[i].author + '</p></div>'
                oldContent += '</a>'
                oldContent += '</div>'
            }
        }
        oldNews.innerHTML += oldContent
    }).catch(error => console.log(error));