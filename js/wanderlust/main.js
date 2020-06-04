// Foursquare API Info
const clientId = '34UUSFD0MZLRSLRFSSHCF4D0K5QYIGYYQRN1Y0AMXPDOPBLJ';
const clientSecret = 'XI1LHWZZMEOVCCJVYRQPELVHA3MTTWXZOAWGPDQEXXICTYAG';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const url2 = 'https://api.foursquare.com/v2/venues/';

// OpenWeather Info
const openWeatherKey = '3f7ff6c50748a60b4491e44faaa808ca';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $wanderInput = $('#city');
const $wanderSubmit = $('#wander_button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//AJAX functions:
const getVenues = async () => {
  const city = $wanderInput.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200512`;
  try {
    const wanderResponse = await fetch(urlToFetch);
    if (wanderResponse.ok){
      const jsonResponse = await wanderResponse.json();
      const venues = jsonResponse.response.groups[0].items.map(x => x.venue);
      console.log(venues);
      return venues;
    }
  }catch(error){
    console.log(error);
  }
}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?q=${$wanderInput.val()}&units=metric&APPID=${openWeatherKey}`;
  try {
  const wanderResponse = await fetch(urlToFetch);
  if (wanderResponse.ok) {
    const jsonResponse = await wanderResponse.json();
    console.log(jsonResponse);
    return jsonResponse;
    }
  } catch(error){
    console.log(error);
    }
}

// Render functions
const renderForecast = (day) => {
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const renderVenues = (venues) => {

  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
      //const venueIcon = venue.categories[0].icon;

      const venueImgSrc = `${venue.bestPhoto.prefix}128x128${venue.bestPhoto.suffix}`;
      let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}<br><span style = "font-size: 14px">Latitude: ${roundNum(venues[0].location.lat)}&deg;</span></h2>`);
}

const getVenueDetails = async id => {
    const urlToFetch = `${url2}${id}?client_id=${clientId}&client_secret=${clientSecret}&v=20200512`;
    try{
      const wanderResponse = await fetch(urlToFetch);
      if(wanderResponse.ok){
        const jsonResponse = await wanderResponse.json();
        details = jsonResponse.response.venue;
        return details;
      }
    } catch(error){console.log(error);}
};

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
    .then(async venues => {
      let detailsArray = [];
      shuffle(venues);
      for(let i = 0; i < 3; i++){ //Can't use forEach
        detailsArray.push(await getVenueDetails(venues[i].id));
      }
      return renderVenues(detailsArray);
    });
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$wanderSubmit.click(executeSearch)
