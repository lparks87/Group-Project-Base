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

  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');

  const request = await fetch('/studio');
  const data = await request.json();

  form.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    const filtered = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
    console.table(filtered);

    console.log('markerLongLat', longLat[0], longLat[1]);
    const marker = L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);

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

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

/*
ORIGINAL FUNCTIONS FOR DROP DOWNS
const category = document.querySelector("#category")
const genre = document.querySelector("#genre")
const rating = document.querySelector("#viewer_rating")
const studio = document.querySelector("#studio")
const year = document.querySelector("#year")

function catFunction() {
  const dropdowns = [category, genre, rating, studio, year]
  let i;
  for(i = 0; i < dropdowns; i++) {
    let element = document.querySelector(".dropdown")
    console.log(i)
    if (element.classList.contains("is-active")){ 
      element.classList.remove("is-active") 
    }
    else {
      element.classList.add("is-active")
    } 
  }
  
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

/*
JS FOR CAROUSEL ON ABOUT PAGE
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_items');
const totalSlides = slides.length;

/* console.log(totalSlides); 

document.
 getElementById('carousel_button_prev')
 .addEventListener("click", function(){
    moveToPrevSlide();
})

document.
 getElementById('carousel_button_next')
 .addEventListener("click", function(){
    moveToNextSlide();
    console.log("hello")
})

function moveToPrevSlide() {
    if(slidePosition == 0) {
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }
    updateSlidePosition();
}

function moveToNextSlide() {
    if(slidePosition == totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
        console.log("hello")
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('carousel_items--visible');
        slide.classList.add('carousel_items--hidden');
    }
    slides[slidePosition].classList.add('carousel_items--visible');
}
*/
