
let q = "";
let aut = "";
$(document).ready(function(){

function getQuote(){
    console.log(q);
  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/',
    jsonp: 'jsonp',
    dataType: 'jsonp',
    data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    },
    success: function(res){
    q = res.quoteText;
    aut = res.quoteAuthor;
    $('#quote').text(q);
      
    if(aut){
        $('#author').text('-' + aut);
           }
        else{
             $('#author').text('Author Unknown');}
            }
    });               
            }

  getQuote();
  $('.getNewQuote').bind('click', function(){
   getQuote();
  })

  $('.tweetQuote').bind('click', function(){
    window.open('https://twitter.com/intent/tweet?text="' + q + '" -' + aut, '_blank');
  })
});
