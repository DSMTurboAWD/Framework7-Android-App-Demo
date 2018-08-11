// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.sterlingkatate.app', // App bundle ID
  name: 'Sterling Karate Compliment App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Sterling Karate Uniform',
          description: 'Sterling Karate Uniform bundle, comes with WhiteBelt, uniform top and pants',
          image: '<img src="https://sterlingkarate.com/wp-content/uploads/2017/11/IMG-1813-e1510979176794.jpg" height="100" width="100" alt="Uniform Bundle">',
          link: '<a href="https://sterlingkarate.com/product/uniform/" class="btn" target="_blank">See in store</a>'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});
var beltView = app.views.create('#view-belts', {
    url: '/beltlevel/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

$$('#sterling-karate-store').on('click', function () {

    app.dialog.confirm("This will open an external webpage to Sterling Karate", "Sterling Karate",
        function(){
            // sterlingKarateApp.alert('test OK');
            window.open('http://sterlingkarate.com/shop/');
        },
        function(){
            app.dialog.alert('Sounds good, maybe later', 'Sterling Karate')
        });
});

// Video Handler
var elem = document.getElementsByClassName("formvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
}

/*var video = document.getElementById('PlayButton');
video.addEventListener('click', function () {
    video.play();
}, false);*/

// Random Backgrounds
// replaced .page-content to body
var images = ['background01.jpg', 'background02.jpg', 'background03.jpg'];
$('#app').css({'background-image': 'url("img/backgrounds/' + images[Math.floor(Math.random() * images.length)] + '")'});

// Swipe junk
var moreActions = app.actions.create({
    buttons: [
        [
            {
                text: 'Here comes some optional description or warning for actions below',
                label: true,
            },
            {
                text: 'Action 1',
            },
            {
                text: 'Action 2',
            },
        ],
        [
            {
                text: 'Cancel',
                bold: true,
            }
        ]
    ],
});
$$('.open-more-actions').on('click', function () {
    moreActions.open();
});

/* MMA Move Pop Ups */
// TODO: Change the following functions to use app.popup.get(); to make the code easier to maintain
// Jab
$$('.popup-jab').on('popup:open', function (e, popup) {console.log('jab popup open');});
// Trip
$$('.popup-trip').on('popup:open', function (e, popup) {console.log('trip popup open');});
// Overhand Punch
$$('.popup-overhand').on('popup:open', function (e, popup) {console.log('overhand popup open');});
// Round Kick
$$('.popup-round-kick').on('popup:open', function (e, popup) {console.log('round-kick popup open');});
//Double Leg Takedown
$$('.popup-double-leg-takedown').on('popup:open', function (e, popup) {console.log('double-leg-takedown popup open');});
// Rear Naked Choke
$$('.popup-rear-naked-choke').on('popup:open', function (e, popup) {console.log('rear-naked-choke popup open');});

/* Function to compartmentalize the fancy code above so we do not have to type it out*/
var popupElements = [
    {
        element: $$('.popup-jab'),
        consoleElement: 'Jab popup open'
    }
    ];


/*
DisplayPopup(function(){
    $$.each(popupElements,function(index, popupElements){
        if (popupElements.element.is('open'))
            })
})
*/


function LoadVideo(videoUrl) {

    // Play a video with callbacks
    var options = {
        successCallback: function () {
            console.log("Video was closed without error.");
        },
        errorCallback: function (errMsg) {
            console.log("Error! " + errMsg);
        },
        orientation: 'landscape',
        shouldAutoClose: true,  // true(default)/false
        controls: true // true(default)/false. Used to hide controls on fullscreen
    };
    try {
        window.plugins.streamingMedia.playVideo(videoUrl, options);
    }
    catch (e) {
        alert('Something is not working right: ' + e.message);
    }
}

document.addEventListener("deviceready", LoadVideo, false);