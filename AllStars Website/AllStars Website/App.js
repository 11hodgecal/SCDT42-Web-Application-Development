var Taunton = {lat: 51.014696, lng: -3.099573};
var Western = {lat: 51.347516, lng: -2.980051};
var bristol = {lat: 51.455763, lng: -2.605063};
var exeter = {lat: 50.71984, lng: -3.53019};
var tbtn = document.getElementById("1");
var wbtn = document.getElementById("4");
var bbtn = document.getElementById("3");
var ebtn = document.getElementById("2");
var LocChouice


tbtn.onclick = function(){
    
    
    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Taunton Venue Details";
    document.getElementById("Details").innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel:01823 334880 <br> Email: taunton@allstarssportsbars.co.uk </p>";
    

};

wbtn.onclick = function(){
    
    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Western-Super-Mare Venue Details"
    document.getElementById("Details").innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel:01934 419111 <br> Email:  weston@allstarssportsbars.co.uk </p>";
   ;
    

};

bbtn.onclick = function(){
    
    
    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Bristol Venue Details";
    document.getElementById("Details").innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel: 01179 294295 <br> Email:  bristol@allstarssportsbars.co.uk</p>";
    initMap();
    

};

ebtn.onclick = function(){
    
    
    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Exeter Venue Details"
    document.getElementById("Details").innerHTML = innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel: 01392 438853 <br> Email:exeter@allstarssportsbars.co.uk </p>";
    

};

function initMap() 
{
    
    var map = new google.maps.Map(document.getElementById("map"), {
        center: Taunton,
        zoom: 17
    
    });
}





