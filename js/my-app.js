

// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  template7Pages: true,
   template7Data: {
     // passing the data to populate the template pages
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


// code for the newsForm page
myApp.onPageInit('newsForm', function (page) {

  // when the button is press get the data of the form encode it and send it to the server
  $('#btnSubmit').on('click',function (e) {

        var formData = myApp.formToData('#news-form');
        //alert(encodeURI(JSON.stringify(formData)));
        // encode the data
        var dataNews=encodeURI(JSON.stringify(formData))

        // sending the data to the server
        $.get("http://52.48.79.163/db.php?",
        {
          type:'newstory',
          data: dataNews,
          id:user.id
        }
      );
      //move the user to view2
      view2.router.back();
      // display that the data was sent
      myApp.addNotification({
           title: 'Successful',
           message: 'Your article has been successfully stored on the server. Thanks!'
       });
    });


});

// retrive the news that belong to the user from the server
$('#myNews').on('click',function (e) {
  console.log('hi from my news');
  var arr=[];
  var myNews=$.get("http://52.48.79.163/db.php?",
              {
                type:'getmystories',
                id:user.id
              },
              function(data){
                temp=decodeURI(data);
                var res=temp.split('<br>');
                res.pop();
                for (var i = 0; i < res.length; i++) {
                  console.log(JSON.parse(res[i]));
                  data=JSON.parse(res[i]);

                var tempCard= '<div class="card">'+
                                '<div class="card-header">'+data.title+'</div>'+
                                '<div class="card-content">'+
                                  '<div class="card-content-inner">'+
                                  '<p>'+data.description+'</p>'+
                                  '</div>'+
                                '</div>'+
                                '<div class="card-footer"></div>'+
                              '</div>';
                $('#yourNewsList').append(tempCard);

                }
            });

});

// when the JSON link on the navbar is press we populate the div with 'news' object from getNews.js
$('#jsonLink').on('click',function (e) {
  console.log('hi from jsom link');
  $('#jsonText').append('<p><pre>'+JSON.stringify(news,null, 2)+'</pre></p>');
});

// when the logout on the navbar is press we open the login screen and call the facebook logout function
$('#logOut').on('click',function (e) {
  myApp.popup('.login-screen');
  fbLogout();
  user.name='';
  user.id='';

});


// when the user wants to login with user and display we  an error
$('#singin').on('click',function (e) {
  myApp.addNotification({
       title: 'Error',
       message: 'The Login is under construction, please login using the Facebook button. Thanks'
   });
});

//console.log(user);
