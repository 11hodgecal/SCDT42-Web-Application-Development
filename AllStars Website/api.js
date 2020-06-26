//this loads all the information 
$(document).ready(function () {

    //this is responsible for displaying the content for upcoming pool events
    $.ajax({
        url: 'http://cors-anywhere.herokuapp.com/http://api.sportradar.us/snooker/trial/v2/en/schedules/2019-04-01/summaries.json?api_key=pmbf4uvcxphr7whhq8rrax6s',
        type: "GET",
        dataType: "json",
        data: {},
        success: function (result) {
            console.log(result);

            result.summaries.forEach(function (obj) {

                $('#pool').append(
                    '<tr id = "TableItem-custom">' + '<th scope="row">' + obj.sport_event.sport_event_context.competition.name + '</th>' +

                    '<td>' + obj.sport_event.start_time + '</td>' +

                    '<td>' + obj.sport_event.competitors[0].name + '</td>' +
                    '<td>' + obj.sport_event.competitors[1].name + '</td>' +



                    '<tr>'

                );

            });


        },
        error: function (request, error) {
            console.log(arguments);
            console.log(error);
        },
    });

    //this is responsible for displaying the content for upcoming football events
    $.ajax({
        url: 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328',
        type: "GET",
        dataType: "json",
        data: {},
        success: function (result) {
            console.log(result);

            result.events.forEach(function (obj) {

                $('#Football').append(

                    '<tr id = "TableItem-custom">' + '<th scope="row">' + obj.strLeague + '</th>' +
                    '<td>' + obj.dateEventLocal + " " + obj.strTimeLocal + '</td>' +
                    '<td>' + obj.strHomeTeam + '</td>' +
                    '<td>' + obj.strAwayTeam + '</td>' +

                    '<tr>'
                );

            });


        },
        error: function (request, error) {
            console.log(arguments);
            console.log(error);
        },
    });
    //this is responsible for displaying the content for upcoming Darts events
    $.ajax({
        url: 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4554',
        type: "GET",
        dataType: "json",
        data: {},
        success: function (result) {
            console.log(result);

            result.events.forEach(function (obj) {

                $('#Darts').append(

                    '<tr id = "TableItem-custom">' + '<th scope="row">' + obj.strEvent + '</th>' +
                    '<td>' + obj.dateEvent + " " + '</td>' +

                    '<tr>'
                );

            });


        },
        error: function (request, error) {
            console.log(arguments);
            console.log(error);
        },
    });
    //this is responsible for displaying the content for upcoming Rugby events
    $.ajax({
        url: 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4416',
        type: "GET",
        dataType: "json",
        data: {},
        success: function (result) {
            console.log(result);

            result.events.forEach(function (obj) {

                $('#Rugby').append(

                    '<tr id = "TableItem-custom">' + '<th scope="row">' + obj.strEvent + '</th>' +
                    '<td>' + obj.dateEventLocal + " " + obj.strTimeLocal + '</td>' +
                    '<td>' + obj.strHomeTeam + '</td>' +
                    '<td>' + obj.strAwayTeam + '</td>' +
                    '<tr>'
                );

            });


        },
        error: function (request, error) {
            console.log(arguments);
            console.log(error);

        },
    });

//this is responsible for displaying the content for upcoming Cricket events
    $.ajax({
        url: 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4801',
        type: "GET",
        dataType: "json",
        data: {},
        success: function (result) {
            console.log(result);

            result.events.forEach(function (obj) {

                $('#Cricket').append(

                    '<tr id = "TableItem-custom">' + '<th scope="row">' + obj.strEvent + '</th>' +
                    '<td>' + obj.dateEventLocal + " " + obj.strTime + '</td>' +
                    '<td>' + obj.strHomeTeam + '</td>' +
                    '<td>' + obj.strAwayTeam + '</td>' +
                    '<tr>'
                );

            });


        },
        error: function (request, error) {
            console.log(arguments);
            console.log(error);
        },
    });

});

$("#pool_btn").click(function (){
   
    $("#pool").show();
    $("#Football").hide();
    $("#Darts").hide();
    $("#Rugby").hide();
    $("#Cricket").hide();
    $("#SportTitle").text("Pool/Snooker")
    
    
});

$("#Foot_btn").click(function (){
   
    $("#pool").hide();
    $("#Football").show();
    $("#Darts").hide();
    $("#Rugby").hide();
    $("#Cricket").hide();
    $("#SportTitle").text("Football")
    
    
});

$("#Dart_btn").click(function (){
   
    $("#pool").hide();
    $("#Football").hide();
    $("#Darts").show();
    $("#Rugby").hide();
    $("#Cricket").hide();
    $("#SportTitle").text("Darts")
    
    
});

$("#Rugby_btn").click(function (){
   
    $("#pool").hide();
    $("#Football").hide();
    $("#Darts").hide();
    $("#Rugby").show();
    $("#Cricket").hide();
    $("#SportTitle").text("Rugby")
    
    
});

$("#Cricket_btn").click(function (){
   
    $("#pool").hide();
    $("#Football").hide();
    $("#Darts").hide();
    $("#Rugby").hide();
    $("#Cricket").show();
    $("#SportTitle").text("Cricket");
    
    
});
