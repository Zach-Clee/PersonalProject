var geolat;
var geolong;


function notDisabled(){
  var boatname = document.getElementById("boatname");
  boatname.disabled = false;
}
function isDisabled(){
  var boatname = document.getElementById("boatname");
  boatname.value = "";
  boatname.disabled = true;
}

function deleteRequest(){
if (deleteConfirmation()){
const Http = new XMLHttpRequest();
const url='http://35.246.94.238:9002/deleteById/';
Http.open("DELETE", url,true);
Http.setRequestHeader("Content-Type", "application/json");
const fd = {
 'diveid' : document.getElementById("idNumber").value,
 'location' : document.getElementById("pac-input").value,
 'geolat' : geolat.value,
 'geolong' : geolong.value,
 'divedate' : document.getElementById("divedate").value,
 'starttime' : document.getElementById("starttime").value,
 'finishtime' : document.getElementById("finishtime").value,
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
  console.log("deleting record");
}
Http.send(JSON.stringify(fd));

alert("Entry Deleted!")
location.replace("index.html");
}
}


function numberFormat(input){
  var start = input
  if (start.length == 5){
    start += ':00';
    return start;
  } else {
    return start;
  }
}

function editRequest(){
 // if (checkValues()){
const Http = new XMLHttpRequest();
const url='http://35.246.94.238:9002/update/';
Http.open("POST", url,true);
Http.setRequestHeader("Content-Type", "application/json");
const fd = {
 'diveid' : document.getElementById("idNumber").value,
 'location' : document.getElementById("pac-input").value,
 'geolat' : geolat,
 'geolong' : geolong,
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
alert("Entry Updated!");
location.replace("index.html");
//

function ValidateInputs(input) {
var rates = document.getElementsByName(input);
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
    }
}
}

function dateformat(){
  alert((document.getElementById("starttime").value) + ":00");
}

function getStudent(input){
  const Http = new XMLHttpRequest();
  const url = 'http://35.246.94.238:9002/findById/' + input;
  Http.open("GET", url);
  Http.onreadystatechange = function(e){
  if (Http.readyState==4){
    data=JSON.parse(Http.responseText);
    window.document.getElementById("idNumber").value=data.diveid;
    window.document.getElementById("pac-input").value=data.location;
    window.document.getElementById("starttime").value=data.starttime;
    window.document.getElementById("startingair").value=data.startingair;
    window.document.getElementById("partner").value=data.partner;
    window.document.getElementById("divedate").value=data.divedate;
    window.document.getElementById("finishtime").value=data.finishtime;
    window.document.getElementById("finishingair").value=data.finishingair;
    setDiveType(data);
    setAccessType(data);
    window.document.getElementById("boatname").value=data.boatname;
    setWaterType(data);
    window.document.getElementById("visability").value=data.visability;
    window.document.getElementById("weight").value=data.weight;
    window.document.getElementById("weather").value=data.weather;
    window.document.getElementById("maxdepth").value=data.maxdepth;
    window.document.getElementById("comments").value=data.comments;

    maplocation(data);
  }
} 
  Http.send();
  

}


function setDiveType(data){
  if (data.divetype = scuba){
    window.document.getElementById("scuba").checked = true;
  } else {
    window.document.getElementById("snorkel").checked = true;
  }
}

function setAccessType(data){
  if (data.divetype = boat){
    window.document.getElementById("boat").checked = true;
  } else {
    window.document.getElementById("pier").checked = true;
  }
}

function setWaterType(data){
  if (data.divetype = Salt){
    window.document.getElementById("Salt").checked = true;
  } else {
    window.document.getElementById("Fresh").checked = true;
  }
}


function getId(){
var text = window.location.hash.substring(1);
getStudent(text);
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


    if(ref3.value >= ref4.value){
      success = false;
    }
    
    if(ref5.value >= ref6.value){
      success = false;
    }


    if (success == false){
      alert("Please check details. Something is missing or wrong.");
      console.log("Entry not added");
    }

    return success;
  }

function deleteConfirmation() {
  var input;
  if (confirm("Are you sure you want to delete this entry? Click 'OK' to continue, or 'Cancel' to go back.")) {
    input = true;
  } else {
    input = false;
  }
  return input;
}



function maplocation(data){
 var loc = document.getElementById("pac-input");
 initMap(data);
}


      function initMap(data) {


     geolat = data.geolat;
     geolong = data.geolong;
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: geolat, lng: geolong},
          zoom: 10
        });

      var markerLocation = {lat: geolat, lng: geolong};
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: markerLocation, map: map});
        
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


          geolat = marker.getPosition().lat();
          geolong = marker.getPosition().lng();

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
