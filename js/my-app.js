

var newsAPI='https://newsapi.org/v2/top-headlines?sources=';
var keyNewsAPI='&apiKey=955b003024764dda8ee94b4f3cb74e1e';
var sources = ['cnn','bloomberg','engadget', 'bbc-news'];
var listUrlSources=[];

$.each(sources,function (key,val) {
  listUrlSources.push(newsAPI+val+keyNewsAPI);
  getNews(newsAPI+val+keyNewsAPI,val);
});
console.log(listUrlSources);


var news = {
  cnn:[],
  bloomberg:[],
  engadget:[],
  'bbc-news':[]
};

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
         console.log("two ");
         news[source].push(article);
         //console.log(val.urlToImage);
      });
      //console.log(news);
  });
}


console.log(news);

// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  template7Pages: true,
   template7Data: {
     'url:cnn.html': {
       listNews : news.cnn
     },
     'url:bbc.html': {
       listNews : news['bbc-news']
     },
     'url:engadget.html': {
       listNews : news.engadget
     },
     'url:bloomberg.html': {
       listNews : news.bloomberg
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
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
