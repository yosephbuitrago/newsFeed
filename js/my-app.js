// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({

  template7Pages: true


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

myApp.onPageInit('about', function (page) {
  // Do something here for "about" page
  console.log("hi from 1");

  getNews();

});


function getNews() {

  var urlAPI = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=955b003024764dda8ee94b4f3cb74e1e';


  var cards='';

      $$.getJSON( "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=955b003024764dda8ee94b4f3cb74e1e", function( data ) {
        $$.each( data.articles, function(val) {
                //console.log(key+" value"+ val.title);
                // cards =  +'<div class="card demo-card-header-pic">'+
                //   '<div style="background-image:url(...)" valign="bottom" class="card-header color-white no-border">'+val.title+'</div>'+
                //   '<div class="card-content">'+
                //    '  <div class="card-content-inner">'+
                //       '<p class="color-gray">'+val.publishedAt+'</p>'+
                //       '<p>'+val.description+'</p>'+
                //     '</div>'+
                //   '</div>'+
                //   '<div class="card-footer">'+
                //     '<a href="#" class="link">Like</a>'+
                //     '<a href="#" class="link">Read more</a>'+
                //   '</div>'+
                // '</div>';
                // console.log(cards);
                console.log(val);
          });

      });
}

/**$$.getJSON( "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=955b003024764dda8ee94b4f3cb74e1e", function( data ) {
  $.each( data.articles, function(key,val) {
          //console.log(key+" value"+ val.title);
          // cards =  +'<div class="card demo-card-header-pic">'+
          //   '<div style="background-image:url(...)" valign="bottom" class="card-header color-white no-border">'+val.title+'</div>'+
          //   '<div class="card-content">'+
          //    '  <div class="card-content-inner">'+
          //       '<p class="color-gray">'+val.publishedAt+'</p>'+
          //       '<p>'+val.description+'</p>'+
          //     '</div>'+
          //   '</div>'+
          //   '<div class="card-footer">'+
          //     '<a href="#" class="link">Like</a>'+
          //     '<a href="#" class="link">Read more</a>'+
          //   '</div>'+
          // '</div>';
          // console.log(cards);

          $('#news').append(
            `
              <li>${val.author}</li>
            `
          );
          console.log(val.author);
    });
    console.log(data);
});

$('#news').append(
  `
    <li>testttttt<li>
  `
);**/
