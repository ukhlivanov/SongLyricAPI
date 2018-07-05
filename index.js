var SONG_LYRICS_URL = 'https://api.lyrics.ovh/v1/';
function getDataFromApi(artist, title, callback) {
  const settings = {
    url: SONG_LYRICS_URL + artist + '/' + title,
    dataType: 'json',
    method: 'get',
    success: callback
  };
  $.ajax(settings);
}

function displaySearchData(data) {
  let lyrics = data.lyrics.replace(/(?:\r\n|\r|\n)/g, '<br>');
  $('.js-search-results').html(lyrics).text();
}

function watchSubmit() {
  $(".js-query-artist").prop("required", true);
  $(".js-query-title").prop("required", true);
  $('form').on('submit', function(event) {
    event.preventDefault();
    let title = $('.js-query-title').val();
    let artist = $('.js-query-artist').val();
    getDataFromApi(artist, title, displaySearchData);
    $('.js-query-title').val('');
    $('.js-query-artist').val('');
});

}

$(watchSubmit);
