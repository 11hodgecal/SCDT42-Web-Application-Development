//LiveSports Javascipt




//Homepage JavaScript
var Taunton = {
    lat: 51.014696,
    lng: -3.099573
};

var tbtn = document.getElementById("1"); //taunton button
var wbtn = document.getElementById("4"); //weston button
var bbtn = document.getElementById("3"); //bristol button
var ebtn = document.getElementById("2"); //exeter button
var FAQShort = document.getElementById("Short-FAQ") //the title that needs to be shortened
var LocChouice


//if the button for taunton is pressed show selected venue contact details and hide the home page
tbtn.onclick = function () {


    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Taunton Venue Details";
    document.getElementById("Details").innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel:01823 334880 <br> Email: taunton@allstarssportsbars.co.uk<br><br> Address: 22 East Street Taunton TA1 3LP</p>";
    document.getElementById("INFO").innerHTML ="<h4>Taunton Venue has:</h4><br>• 3 full size Snooker tables• 2 Sam K Steel American Pool tables<br>• 16 Supreme Winner English Pool tables<br>• Every table uses state of the art 450watt Luminaire low profile lights for unrivalled lighting quality<br>•1 Joy Chinese 8ball table<br>• Poker Machine<br>• Boxing Machine<br>• 12 Dart Boards with electronic scoreboards<br>• Table Football<br>• Darts Private Function Room<br>• 8ball Pool Private Function Room"
;

    


};
//if the button for weston is pressed show selected venue contact details and hide the home page
wbtn.onclick = function () {

    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Western-Super-Mare Venue Details"
    document.getElementById("Details").innerHTML = "<br>OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel:01934 419111 <br> Email:  weston@allstarssportsbars.co.uk <br><br> Address: 12-16 Regent St Weston-super-Mare BS23 1SQ</p>";
    initMap();
    document.getElementById("INFO").innerHTML ="<h4>Weston Venue has:</h4>• 3 full size Snooker tables<br>• 2 Sam K Steel American Pool tables<br>• 12 Supreme Winner English Pool tables<br>• Every table uses state of the art 450watt Luminaire low profile lights for unrivalled lighting quality<br>•1 Joy Chinese 8ball table<br>• Poker Machine<br>• Boxing Machine<br>• 4 Dart Boards with electronic scoreboards<br>• Table Football<br>• Juke Box"


};
//if the button for bristol is pressed show selected venue contact details and hide the home page
bbtn.onclick = function () {


    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Bristol Venue Details";
    document.getElementById("Details").innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel: 01179 294295 <br> Email:  bristol@allstarssportsbars.co.uk<br><br> Address: 15-19 Queens Road Bristol BS8 1QE</p>";
    initMap();
    document.getElementById("INFO").innerHTML ="<h4>Bristol Venue has:</h4>.4 full size Snooker tables (2 in private areas)<br>.8 Sam K Steel American Pool tables<br>.1 Rasson Billiards Victory American Pool table - actual table used at 2018 Mosconi Cup<br>.12 Supreme Winner English Pool tables<br>.Every table uses state of the art 450watt Luminaire low profile lights for unrivalled lighting quality<br>.2 Joy Chinese 8ball tables<br>.Poker Machine<br>.Boxing Machine<br>.5 Dart Boards with electronic scoreboards<br>.Table Football";


};
//if the button for exeter is pressed show selected venue contact details and hide the home page
ebtn.onclick = function () {


    document.getElementById("venue").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("venue-details").innerHTML = "Exeter Venue Details"
    document.getElementById("Details").innerHTML = innerHTML = "OPEN MONDAY 10:00 - LATE<br> TUESDAY 10:00 - LATE<br>WEDNESDAY 10:00 - LATE<br>THURSDAY 10:00 - LATE<br>FRIDAY 10:00 - LATE<br>SATURDAY 10:00 - LATE<br>SUNDAY 10:00 - LATE<br><br>Tel: 01392 438853 <br> Email:exeter@allstarssportsbars.co.uk<br><br> Address: 19-23 Sidwell Street Exeter EX4 6NN</p>";
    document.getElementById("INFO").innerHTML ="<h4>Exeter Venue has:</h4><br>• 4 full size Snooker tables (in private area)<br>• 4 Sam K Steel American Pool tables<br>• 16 Supreme Winner English Pool tables<br>• Every table uses state of the art 450watt Luminaire low profile lights for unrivalled lighting quality<br>•1 Joy Chinese 8ball table<br>• Poker Machine<br><br>• Boxing Machine<br>• 12 Dart Boards with electronic scoreboards<br>• Table Football<br>• Private Function Room";


};
//creates a google map zooms in and centers on taunton allstars
function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {
        center: Taunton,
        zoom: 17

    });
}
