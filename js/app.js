$(document).ready(function() {
  var searchBar = $('#search-bar');
  var restaurants = Object.keys(data);

  displayRestaurants(); //function for display the restaurants
  searchBar.keyup(searchFilter);
  $('.caption').mouseover(showCaption).mouseout(hideCaption);
  $('.caption').click(fillModal);
//cleanSearch();

  function displayRestaurants() { //append the restaurants in html
    $.each(restaurants, function(i) {
      var restThumb = '<li class="collection col-xs-6 col-md-3"><a id=' + restaurants[i] + ' href="#" data-toggle="modal" data-target="#infoModal"><span class="caption"><span>' + data[restaurants[i]].name + '</span><img class="center-block" src="../assets/images/spoon-01.svg" alt="Info"></span></a></li>';
      $('#results .row ul').append(restThumb);
      $('#' + restaurants[i]).css({
        'background-image': 'url(' + data[restaurants[i]].image + ')'});
    });
  }

  function showCaption() {
    $(this).css('opacity', '1');
  }

  function hideCaption() {
    $(this).css('opacity', '0');
  } //show and hide for the modal

  function searchFilter() {
    var searchWords = searchBar.val(); //filter search for searching food or places
    $('.collection').hide();
    $('.collection a').each(function() {
      var foodArr = data[$(this).attr('id')].food;
      for (var i = 0; i < foodArr.length; i++) {
        if (foodArr[i].indexOf(searchWords) !== -1 || ((data[$(this).attr('id')].name).toLowerCase()).indexOf(searchWords.toLowerCase()) !== -1) {
          $(this).parent().fadeIn('fast');
        }
      }
    });
  }

  function fillModal() { //append the data in modal
    $('.modal-title').text(data[$(this).parent().attr('id')].name);
    var url = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyCn74gnTCijSi1vIkqgMfQMd8Z6hCk9zO4&q=restaurants+in+CDMX' + (data[$(this).parent().attr('id')].address).split(' ').join('+');
    $('.modal-body iframe').attr('src', url);
    $('.address').text(data[$(this).parent().attr('id')].address);
    $('.price').text(data[$(this).parent().attr('id')].price);
  }
});
