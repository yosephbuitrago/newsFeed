// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  preprocess: function (content, url, next) {
     if (url === 'about.html') {
         var template = Template7.compile(content);
         var newss = getNews();
         console.log(newss);
         var resultContent = template(
           getNews());
         //console.log(resultContent);
         console.log(resultContent);
         return resultContent;
     }
 }


});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):


function getNews() {

  var urlAPI = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=955b003024764dda8ee94b4f3cb74e1e';
var titles = [];
var desc = [];
var url =[];
var urlToImage=[];
var publishedAt=[];

            $$.getJSON( urlAPI, function( data ) {

              $$.each( data.articles, function( key, val ) {
                //console.log(val.title);
                titles.push(val.title);
                desc.push(val.description)
                url.push(val.url);
                urlToImage.push(val.urlToImage);
                publishedAt.push(val.publishedAt);
              });
});

var news = {
  titles: titles,
  desc: desc,
  url: url,
  urlToImage:urlToImage,
  publishedAt:publishedAt
};
//console.log(news);
return news;
}
