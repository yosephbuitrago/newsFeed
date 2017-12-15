
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
     },
     'url:top10.html': {
       listNews : news.top10
     },
     'url:newsForm.html':{
       user : user
     }
   }

});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});
//add second view
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

myApp.onPageInit('newsForm', function (page) {
  // Do something here for "about" page
  $('#btnSubmit').on('click',function (e) {

        var formData = myApp.formToData('#news-form');
        alert(encodeURI(JSON.stringify(formData)));
        var dataNews=encodeURI(JSON.stringify(formData))
        console.log(dataNews);
        /**$.get("http://52.48.79.163/db.php?",
        {
          type:'newstory',
          data: dataNews,
          id:user.id
        }
      );**/
      view2.router.back();  
      myApp.addNotification({
           title: 'Successful',
           message: 'Your article has been successfully stored on the server. Thanks!'
       });
    });








  console.log("hi from form");

});



var one=document.getElementById('#newsFormbutton');
console.log(one);
$('.list-button').on('click',function () {
  console.log('hi yoseph');
  myApp.closeModal('.login-screen',true);
});

//console.log(user);
