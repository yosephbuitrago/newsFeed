
/**var news={
  title : [],
  description : [],
  url: [],
  urlToImage: [],
  publishedAt: []
};**/
var newsAPI='https://newsapi.org/v2/top-headlines?sources=';
var keyNewsAPI='&apiKey=955b003024764dda8ee94b4f3cb74e1e';
var sources = ['bbc-news','bloomberg','cnn','engadget'];
var listUrlSources=[];

$.each(sources,function (key,val) {
  listUrlSources.push(newsAPI+val+keyNewsAPI);
});
console.log(listUrlSources);


var news = {
  bbc:[]
};
//var news;
$.getJSON( listUrlSources[0], function( data ) {
  $.each( data.articles, function(key,val) {
     /**news.title.push(val.title);
     news.description.push(val.description);
     news.url.push(val.url);
     news.urlToImage.push(val.urlToImage);
     news.publishedAt.push(val.publishedAt);**/
     var article ={
       title : val.title,
       description : val.description,
       url: val.url,
       urlToImage:val.urlToImage,
       publishedAt: val.publishedAt
     }
     news.bbc.push(article);
     console.log(val.urlToImage);
    });
    console.log(news);
});
//console.log(news);

console.log(news);
// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  template7Pages: true,
   template7Data: {
     'url:about.html': {
       articles : news.bbc
     }
   }

});
console.log(news);

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});
