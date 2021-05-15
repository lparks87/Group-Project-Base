document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

async function filterHome() {
  const request = await fetch("/api/mainCustom");
  const types = await request.json();
  console.log("potato", types);
  
  
  function findMatches(wordToMatch, types) {
    console.log("potatoe");
    return types.filter((choice) => {
      const regex = new RegExp(wordToMatch, "gi");
      console.log(choice.studio_name.match(regex));
      return choice.studio_name.match(regex) || choice.genre_name.match(regex) || choice.rating_description.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, types);
    console.log(matchArray);
    const body = document.querySelector(".body");
    const html = matchArray.map((choice) => {
      const regex = new RegExp(event.target.value, "gi");
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td class="newCol">${choice.title}</td>
                    <td class="newCol">${choice.genre_name}</td>
                    <td class="newCol">${choice.rating_description}</td>
                    <td class="newCol">${choice.studio_name}</td>
                    <td class="newCol">${choice.year}</td>
                    <td class="newCol">${choice.total_invoices}</td>
                    `;
      body.append(row);
    }); 
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

    searchInput.addEventListener("change", displayMatches);
   // searchInput.addEventListener("submit", displayMatches); I was not able to get submit to work was preffered choice.

}

filterHome();


async function addingStudio() {
  console.log('in the adding studio function');
  
  const form = document.querySelector('#recordSubmit');
  const name = document.querySelector('#studioName');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.info('submitted form', e.target);
    //const formdata = {}
    const post = await fetch('/api/studio', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({studio_name: name.value})
    });
  });
}

addingStudio();


function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map("mapid").setView([38.9897, -76.9378], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoibHBhcmtzODciLCJhIjoiY2tucnRuMndvMGt0djJvcjEzOTFqam13MSJ9.pn-iuszgn6Gsy0XmkGlNsg",
    }
  ).addTo(mymap);
  console.log("mymap");
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector("#search-form");
  const search = document.querySelector("#search");
  const coordinates = [];

  const request = await fetch("/api/studio");
  const data = await request.json();
  const data2 = data.data;
  console.log(data);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("form submitted");
    if (search.value.length > 0) {
      const filtered = data2.filter(
        (record) =>
          record.studio_name.includes(search.value) &&
          record.latitude &&
          record.longitude
      );
      console.table("here", filtered);

      filtered.forEach((item) => {
        const latitude = item.latitude;
        const longitude = item.longitude;
        coordinates.push(latitude, longitude);
        console.log("markerLongLat", latitude, longitude);
        const marker = L.marker([latitude, longitude]).addTo(
          mapObjectFromFunction
        );
        mapObjectFromFunction.panTo([latitude, longitude]);
      });
    } else {
        /* if(search.value.length === null) { //need to use the triple equality operator
          const popup = L.popup()
          .setLatLng([38.9897, -76.9378]) //wanted to set the popup where the map starts at UMD
          .setContent("I am a standalone popup.")
          .openOn(mymap);
       }*/
       console.log();
    }
  });
}

async function windowActions() {

  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;

/*
//the function below will appear when they first go onto the page
async function getMainData() {
  const response = await fetch("/api/mainCustom");
  const allMovies = await response.json();
  console.table(allMovies);

  console.log("response:", response);
  const body = document.querySelector(".body");
  allMovies.forEach((element) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${element.title}</td>
          <td>${element.genre_name}</td>
          <td>${element.rating_description}</td>
          <td>${element.studio_name}</td>
          <td>${element.year}</td>
          <td>${element.total_invoices}</td>
          `;
    body.append(row);
  });
}
getMainData();

*/





