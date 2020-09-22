document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'homemovie') {
      page.querySelector('#Movie1').onclick = function () {
        document.querySelector('#myNavigator').pushPage('../views/jokerdetail.html')
    }
    page.querySelector('#Movie2').onclick = function () {
        document.querySelector('#myNavigator').pushPage('../views/advandetail.html')
    }
    page.querySelector('#Movie3').onclick = function () {
        document.querySelector('#myNavigator').pushPage('../views/extracdetail.html')
    }
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });