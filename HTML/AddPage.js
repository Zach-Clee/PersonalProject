var lat;
var lng;

function notDisabled(){
  var boatname = document.getElementById("boatname");
  boatname.disabled = false;
}
function isDisabled(){
  var boatname = document.getElementById("boatname");
  boatname.value = "";
  boatname.disabled = true;
}

function sendRequest(){
  if (checkValues()){
const Http = new XMLHttpRequest();
const url='http://35.246.94.238:9002/save/';
Http.open("POST", url,true);
Http.setRequestHeader("Content-Type", "application/json");
const fd = {
 'diveid' : '0',
 'location' : document.getElementById("pac-input").value,
 'geolat' : lat,
 'geolong' : lng,
 'divedate' : document.getElementById("divedate").value,
 'starttime' : numberFormat(document.getElementById("starttime").value),
 'finishtime' :  numberFormat(document.getElementById("finishtime").value),
 'startingair' : document.getElementById("startingair").value,
 'finishingair' : document.getElementById("finishingair").value,
 'partner' : document.getElementById("partner").value,
 'weather' : document.getElementById("weather").value,
 'divetype' : document.getElementById(ValidateInputs("divetype")),
 'accesstype' : document.getElementById(ValidateInputs("accesstype")),
 'boatname' : document.getElementById("boatname").value,
 'watertype' : document.getElementById(ValidateInputs("watertype")),
 'visability' : document.getElementById("visability").value,
 'weight' : document.getElementById("weight").value,
 'maxdepth' : document.getElementById("maxdepth").value,
 'comments' : document.getElementById("comments").value
};
Http.onreadystatechange = function(ev) {
  console.log("Adding new record");
}
Http.send(JSON.stringify(fd));

 alert("Entry Added!")
 location.replace("index.html");
}}

function numberFormat(input){
  var start = input
  if (start.length == 5){
    start += ':00';
    return start;
  } else {
    return start;
  }
}


function ValidateInputs(input) {
var rates = document.getElementsByName(input);
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
    }
}
}

function checkValues(){
    var success = true;
    var ref1 = document.getElementById("pac-input");
    var ref2 = document.getElementById("divedate");
    var ref3 = document.getElementById("starttime");
    var ref4 = document.getElementById("finishtime");
    var ref5 = document.getElementById("startingair");
    var ref6 = document.getElementById("finishingair");
    var ref7 = document.getElementById("partner");
    var ref8 = document.getElementById("weather");
    var ref10 = document.getElementById("visability");
    var ref11 = document.getElementById("weight");
    var ref12 = document.getElementById("maxdepth");


    if(ref1.value == ""){
      success = false;
    }
    if(ref2.value == ""){
      success = false;
    }
    if(ref3.value == ""){
      success = false;
    }
    if(ref4.value == ""){
      success = false;
    }
    if(ref5.value == ""){
      success = false;
    }
    if(ref6.value == ""){
      success = false;
    }
    if(ref7.value == ""){
      success = false;
    }
    if(ref8.value == ""){
      success = false;
    }
    if((window.document.getElementById("boat").checked == false) && (window.document.getElementById("pier").checked == false)){
      success = false;
    }
    if((window.document.getElementById("scuba").checked == false) && (window.document.getElementById("snorkel").checked == false)){
      success = false;
    }
    if((window.document.getElementById("Salt").checked == false) && (window.document.getElementById("Fresh").checked == false)){
      success = false;
    }
    if(ref10.value == ""){
      success = false;
    }
    if(ref11.value == ""){
      success = false;
    }
    if(ref12.value == ""){
      success = false;
    }

    if (success == false){
      alert("Please check details. Something is missing");
      console.log("Entry not added");
    }

    return success;
  }



      function maplocation(){
        var loc = document.getElementById("pac-input");
        initMap();
      }


      function initMap() {

 

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.5405318, lng: -1.7789153},
          zoom: 10
        });

        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var strictBounds = document.getElementById('strict-bounds-selector');

        var autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.bindTo('bounds', map);

        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + ". Please try a different loction");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);


          lat = marker.getPosition().lat();
          lng = marker.getPosition().lng();

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
          infowindow.open(map, marker);
        });
      }