/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#mapbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibHBhcmtzODciLCJhIjoiY2tucnRuMndvMGt0djJvcjEzOTFqam13MSJ9.pn-iuszgn6Gsy0XmkGlNsg',
    }
  ).addTo(mymap);
  console.log('mymap');
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {

  const mySelector = $(".myDropDown")

  const request = await fetch('/studio');
  const data = await request.json();


  form.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    const filtered = data.filter((record) => record.studio.includes(mySelector.value) && mySelector.latitude && mySelector.longitude);
    console.table(filtered);

    console.log('markerLongLat', latitude, longitude);
    const marker = L.marker([latitude, longitude]).addTo(mapObjectFromFunction);
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


//the function below will appear when they first go onto the page
async function getMainData() {
  const response = await fetch('/api/mainCustom')
  const allMovies = await response.json()
  console.table(allMovies)
  
 console.log('response:', response)
  const body = document.querySelector('.body')
  allMovies.forEach(element => {
      const row = document.createElement('tr')
      row.innerHTML = `
          <td>${element.title}</td>
          <td>${element.genre_name}</td>
          <td>${element.rating_description}</td>
          <td>${element.studio_name}</td>
          <td>${element.year}</td>
          <td>${element.total_invoices}</td>
          `
      body.append(row)
  });
  
}
getMainData();

async function getMovieData() {
  const response = await fetch('/api/movieCustom')
  const justMovies = await response.json()
  console.log(justMovies);
  console.log('response:', response);
  const movie = document.getElementById("category");

  const body = document.querySelector('.body')
  movie.addEventListener('change', async (event) => {
    console.log(event.target[1]);
    if(event.target[1].value === "movie") {
      console.log(justMovies);
      body.innerHTML = "";
      justMovies.forEach(element => {
      const row = document.createElement('tr')
      row.innerHTML = `
          <td>${element.title}</td>
          <td>${element.genre_name}</td>
          <td>${element.rating_description}</td>
          <td>${element.studio_name}</td>
          <td>${element.year}</td>
          <td>${element.total_invoices}</td>
          `
      body.append(row)
  });
  }
  })
}
getMovieData();

/*
// hard code array, if event.target.value is in the array then .target =i, selected item.
function filterCategory() {
  const data = []
  movie.addEventListener('change', async (event) => {
    console.log(event.target[1]);
    if(event.target.value === "$(".column")") {
      console.log(justMovies);
}
*/

async function getTVData() {
  const response = await fetch('/api/tvCustom')
  const justTv = await response.json()
  console.log(justTv);
  console.log('response:', response);
  const tv = document.getElementById("category");

  const body = document.querySelector('.body')
  tv.addEventListener('change', async (event) => {
    console.log(event.target[2]);
    if(event.target[2].value === "tv") {
      console.log(justTv);
      body.innerHTML = "";
      justTv.forEach(element => {
      const row = document.createElement('tr')
      row.innerHTML = `
          <td>${element.title}</td>
          <td>${element.genre_name}</td>
          <td>${element.rating_description}</td>
          <td>${element.studio_name}</td>
          <td>${element.year}</td>
          <td>${element.total_invoices}</td>
          `
      body.append(row)
  });
  }
  })
}
getTVData();

