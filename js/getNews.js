// these variables are for build the newsAPI urls
var newsAPI='https://newsapi.org/v2/top-headlines?sources=';
var keyNewsAPI='&apiKey=955b003024764dda8ee94b4f3cb74e1e';
var sources = ['cnn','bloomberg','engadget', 'bbc-news'];
var listUrlSources=[];

//building the urls and getting the news from the sources
$.each(sources,function (key,val) {
  listUrlSources.push(newsAPI+val+keyNewsAPI);
  getNews(newsAPI+val+keyNewsAPI,val);
});
console.log(listUrlSources);


var news = {
  cnn:[],
  bloomberg:[],
  engadget:[],
  'bbc-news':[],
  top10:[]
};
//pull the news from Kyle
$.getJSON('http://52.48.79.163/db.php?type=top10stories',function (data) {
  console.log(data.news.story);

  news.top10=data.news.story;
});
// creating a article object for for each news and store them on the news object
function getNews(url, source) {
  $.getJSON(url, function( data ) {
     $.each( data.articles, function(key,val) {
         var article ={
           title : val.title,
           description : val.description,
           url: val.url,
           urlToImage:val.urlToImage,
           publishedAt: val.publishedAt
         }
         news[source].push(article);
         //console.log(val.urlToImage);
      });
      //console.log(news);
  });
}



console.log(news);
