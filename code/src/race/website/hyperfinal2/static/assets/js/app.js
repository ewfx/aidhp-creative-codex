/*
 * Copyright 2017 Google Inc. All rights reserved.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// Style credit: https://snazzymaps.com/style/1/pale-dawn
const mapStyle = [{
  'featureType': 'administrative',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 33,
  },
  ],
},
{
  'featureType': 'landscape',
  'elementType': 'all',
  'stylers': [{
    'color': '#f2e5d4',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5dac6',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'labels',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 20,
  },
  ],
},
{
  'featureType': 'road',
  'elementType': 'all',
  'stylers': [{
    'lightness': 20,
  }],
},
{
  'featureType': 'road.highway',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5c6c6',
  }],
},
{
  'featureType': 'road.arterial',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#e4d7c6',
  }],
},
{
  'featureType': 'road.local',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#fbfaf7',
  }],
},
{
  'featureType': 'water',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'color': '#acbcc9',
  },
  ],
},
];

// Escapes HTML characters in a template literal string, to prevent XSS.
// See https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
function sanitizeHTML(strings) {
  const entities = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;'};
  let result = strings[0];
  for (let i = 1; i < arguments.length; i++) {
    result += String(arguments[i]).replace(/[&<>'"]/g, (char) => {
      return entities[char];
    });
    result += strings[i];
  }
  return result;
}

/**
 * Initialize the Google Map.
 */
function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        //	      center: {lat: 52.632469, lng: -1.689423},, 
        center: { lat: 19.072079, lng: 72.861987 },
        styles: mapStyle,
    });

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var phone = urlParams.get("phone");
    var queries = urlParams.get("merchant");
    console.log(queries)

    var words = queries.split(",")
    console.log(words)

    var j = 0;
    var x = 0;
    var counter = 0;
    var featuresa = {
        dominos:
        {
            
            positionM: new google.maps.LatLng(19.063726, 72.857714),
            positionD: new google.maps.LatLng(28.648104, 77.172494),
            type: 'food',
            icon: 'assets/img/logo_restaurant.png'
        },
        mylocation: 
	{
            positionM: new google.maps.LatLng(19.066777, 72.863482),
            positionD: new google.maps.LatLng(28.648104, 77.172494),
            type: 'food',
            icon: 'assets/img/mylocation.png'

	},
        BigBazaar:
        {
            positionM: new google.maps.LatLng(19.067539, 72.863347),
            positionD: new google.maps.LatLng(28.655078, 77.200602),
            type: 'shopping',
            icon: 'assets/img/logo_cinema.png'
        },
        bookmyshow:
        {
            positionM: new google.maps.LatLng(19.072081, 72.866115),
            positionD: new google.maps.LatLng(28.642407, 77.106343),
            type: 'shopping',
            icon: 'assets/img/logo_cinema.png'
        },
        Marks:
        {
            positionM: new google.maps.LatLng(19.078348, 72.864281),
            positionD: new google.maps.LatLng(28.601143, 77.227419),
            type: 'shopping',
            icon: 'assets/img/logo_cinema.png'
        },
        Naturals:
        {
            positionM: new google.maps.LatLng(19.079365, 72.872856),
            positionD: new google.maps.LatLng(28.572619, 77.237209),
            type: 'food',
            icon: 'assets/img/logo_restaurant.png'
        }
    };

    for (var i = 0; i < words.length - 1; i++) {
        j = x + i;
        counter = counter + 1;
        console.log(counter);
        if (counter == 6) {
            break;
        }

        if (words[j].match(/dominos/gi)) {
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Dominos Pizza </h1>' +
                '<div id="bodyContent">' +
                '<p> Avail 20% discount on Dominos when you pay by your credit card' +
                '</p>' +
                '<a href="selectoffer.html?phone=8286447178&merchant=dominos">' +
                'Avail this offer </a> ' +
                '</div>' +
                '</div>';


            var infowindowMdominos = new google.maps.InfoWindow({
                content: contentString
            });

            var infowindowDdominos = new google.maps.InfoWindow({
                content: contentString
            });


            var markerMdominos = new google.maps.Marker({
                position: featuresa["dominos"].positionM,
                map: map,
                icon: featuresa["dominos"].icon,
                title: 'Dominos Pizza'
            });
            var markerDdominos = new google.maps.Marker({
                position: featuresa["dominos"].positionD,
                map: map,
                icon: featuresa["dominos"].icon,
                title: 'Dominos Pizza'
            });
                        var markerMlocation = new google.maps.Marker({
                position: featuresa["mylocation"].positionM,
                map: map,
                icon: featuresa["mylocation"].icon,
                title: 'My Current Location'
            });
            markerMdominos.addListener('click', function () {
                infowindowMdominos.open(map, markerMdominos);
            });
            markerDdominos.addListener('click', function () {
                infowindowDdominos.open(map, markerDdominos);
            });


        }


        if (words[j].match(/BigBazaar/gi)) {

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Big Bazaar</h1>' +
                '<div id="bodyContent">' +
                '<p> Avail 20% discount on Big Bazaar when you pay by your credit card' +
                '</p>' +
                '<a href="selectoffer.html?phone=8286447178&merchant=BigBazaar">' +
                'Avail this offer </a> ' +
                '</div>' +
                '</div>';


            var infowindowMBigBazaar = new google.maps.InfoWindow({
                content: contentString
            });

            var infowindowDBigBazaar = new google.maps.InfoWindow({
                content: contentString
            });
            var markerMBigBazaar = new google.maps.Marker({
                position: featuresa["BigBazaar"].positionM,
                map: map,
                icon: featuresa["BigBazaar"].icon,
                title: 'Big Bazaar'
            });
            var markerDBigBazaar = new google.maps.Marker({
                position: featuresa["BigBazaar"].positionD,
                map: map,
                icon: featuresa["BigBazaar"].icon,
                title: 'Big Bazaar'
            });

            markerMBigBazaar.addListener('click', function () {
                infowindowMBigBazaar.open(map, markerMBigBazaar);
            });
            markerDBigBazaar.addListener('click', function () {
                infowindowDBigBazaar.open(map, markerDBigBazaar);
            });


        }



        if (words[j].match(/bookmyshow/gi)) {
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Book My Show</h1>' +
                '<div id="bodyContent">' +
                '<p> Avail 20% discount on Book My Show when you pay by your credit card' +
                '</p>' +
                '<a href="selectoffer.html?phone=8286447178&merchant=bookmyshow">' +
                'Avail this offer </a> ' +
                '</div>' +
                '</div>';


            var infowindowMbookmyshow = new google.maps.InfoWindow({
                content: contentString
            });

            var infowindowDbookmyshow = new google.maps.InfoWindow({
                content: contentString
            });

            var markerMbookmyshow = new google.maps.Marker({
                position: featuresa["bookmyshow"].positionM,
                map: map,
                icon: featuresa["bookmyshow"].icon,
                title: 'Book My Show'
            });
            var markerDbookmyshow = new google.maps.Marker({
                position: featuresa["bookmyshow"].positionD,
                map: map,
                icon: featuresa["bookmyshow"].icon,
                title: 'Book My Show'
            });

            markerMbookmyshow.addListener('click', function () {
                infowindowMbookmyshow.open(map, markerMbookmyshow);
            });
            markerDbookmyshow.addListener('click', function () {
                infowindowDbookmyshow.open(map, markerDbookmyshow);
            });


        }



        if (words[j].match(/Naturals/gi)) {


            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Naturals Ice Cream</h1>' +
                '<div id="bodyContent">' +
                '<p> Avail 20% discount on Marks and Spencers when you pay by your credit card' +
                '</p>' +
                '<a href="selectoffer.html?phone=8286447178&merchant=Naturals">' +
                'Avail this offer </a> ' +
                '</div>' +
                '</div>';


            var infowindowMNaturals = new google.maps.InfoWindow({
                content: contentString
            });

            var infowindowDNaturals = new google.maps.InfoWindow({
                content: contentString
            });

            var markerMNaturals = new google.maps.Marker({
                position: featuresa["Naturals"].positionM,
                map: map,
                icon: featuresa["Naturals"].icon,
                title: 'Naturals Ice Cream'
            });
            var markerDNaturals = new google.maps.Marker({
                position: featuresa["Naturals"].positionD,
                map: map,
                icon: featuresa["Naturals"].icon,
                title: 'Naturals Ice Cream'
            });

            markerMNaturals.addListener('click', function () {
                infowindowMNaturals.open(map, markerMNaturals);
            });
            markerDNaturals.addListener('click', function () {
                infowindowDNaturals.open(map, markerDNaturals);
            });


        }










        if (words[j].match(/Marks/gi)) {
            x = 2;
            words[j] = "Marks and Spencers";

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Marks and Spencers</h1>' +
                '<div id="bodyContent">' +
                '<p> Avail 20% discount on Marks and Spencers when you pay by your credit card' +
                '</p>' +
                '<a href="selectoffer.html?phone=8286447178&merchant=Marks%20and%20Spencers">' +
                'Avail this offer </a> ' +
                '</div>' +
                '</div>';


            var infowindowM = new google.maps.InfoWindow({
                content: contentString
            });

            var infowindowD = new google.maps.InfoWindow({
                content: contentString
            });

            var markerM = new google.maps.Marker({
                position: featuresa["Marks"].positionM,
                map: map,
                icon: featuresa["Marks"].icon,
                title: 'Marks and Spencers'
            });
            var markerD = new google.maps.Marker({
                position: featuresa["Marks"].positionD,
                map: map,
                icon: featuresa["Marks"].icon,
                title: 'Marks and Spencers'
            });

            markerM.addListener('click', function () {
                infowindowM.open(map, markerM);
            });
            markerD.addListener('click', function () {
                infowindowD.open(map, markerD);
            });


        }

        console.log(words[j]);


    }




    // Load the stores GeoJSON onto the map.
    //  map.data.loadGeoJson('assets/js/stores.json', {idPropertyName: 'storeid'});

    // Define the custom marker icons, using the store's "category".
    map.data.setStyle((feature) => {
        return {
            icon: {
                url: `img/icon_${feature.getProperty('category')}.png`,
                scaledSize: new google.maps.Size(64, 64),
            },
        };
    });

    const apiKey = 'AIzaSyCkeU1rhvm0rPZP_Iur0q3NA5qM_PMYZs8';
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
        const category = event.feature.getProperty('category');
        const name = event.feature.getProperty('name');
        const description = event.feature.getProperty('description');
        const hours = event.feature.getProperty('hours');
        const phone = event.feature.getProperty('phone');
        const position = event.feature.getGeometry().get();
        const content = sanitizeHTML`
      <img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
      <div style="margin-left:220px; margin-bottom:20px;">
        <h2>${name}</h2><p>${description}</p>
        <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p><br/>
        <p><b><a href="congratulations.html"> Get Offer </a></b></p>

      </div>
      `;

        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
        infoWindow.open(map);
    });


    card.setAttribute('id', 'pac-card');
    title.setAttribute('id', 'title');
    title.textContent = 'Find the nearest store';
    titleBar.appendChild(title);
    container.setAttribute('id', 'pac-container');
    input.setAttribute('id', 'pac-input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter an address');
    container.appendChild(input);
    card.appendChild(titleBar);
    card.appendChild(container);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

}
