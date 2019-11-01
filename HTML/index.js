function studentsToTable(){
  const Http = new XMLHttpRequest();
  const url = 'http://+location.hostname+:9002/showAll';
  Http.open("GET", url);
  Http.onreadystatechange = function(e){
  if (Http.readyState==4){
    data=JSON.parse(Http.responseText);
    var startTime;
    var finishTime;
    var totalTime = 0;
    var A=0;
    data.forEach(function(item){
      var table = document.getElementById("Results");
      var row = table.insertRow(-1);
      //var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(1);
      var cell4 = row.insertCell(2);
      //cell1.innerHTML = item.diveid;
      cell2.innerHTML = item.location;
      cell3.innerHTML = item.divedate;
      cell4.innerHTML = item.weight;

      row.addEventListener("click", function() {
        location.replace("EditPage.html#"+item.diveid);
      });
      A=A+1;
      document.getElementById("diveCountNumber").innerHTML = A;
    });
  }
} 
  Http.send()

}