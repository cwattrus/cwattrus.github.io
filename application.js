$.getJSON( "http://api.meetup.com/2/events?status=upcoming&order=time&limited_events=False&group_urlname=http%3A%2F%2Fwww.meetup.com%2FCodedInBraam%2F&desc=false&offset=0&format=json&page=20&fields=&sig_id=42203632&sig=93f58ef2749515567ebf35f30b87cb245730e969", function( data ) {
  console.log(data);
});

