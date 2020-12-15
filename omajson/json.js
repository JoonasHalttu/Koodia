var getJSOM = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function() {

    var status = xhr.status;

    if (status == 200){
        callback(null, xhr.response);
    }else {
        callback(status);
  }

  };

  xhr.send();

};

getJSOM('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data) {

  if (err !=null) {
      console.error(err);
  }else{
      document.body.innerHTML=`<h1>Koronaviruksen tilanne Suomessa tänään</h1>Tartunnan saaneet: ${data.infected} <br> Testatut: ${data.tested} <br> Kuolemat: ${data.deaths}<br> Maa: ${data.country}  <br> Viimeisin päivitys: ${data.lastUpdatedAtApify}`;
      
      
      
      console.log(`${data.infected}`);
      console.log(`${data.tested}`);
      console.log(`${data.deaths}`);
      console.log(`${data.country}`);
      console.log(`${data.lastUpdatedAtApify}`);
  }

});