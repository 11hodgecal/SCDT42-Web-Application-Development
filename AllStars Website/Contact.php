<?php

    $error = "";
   
    // if the submit button is pressed

    if (isset($_POST['Submit'])) {
        
        //information Gathered from the form
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $phone = $_POST['Phone'];
        $venue = $_POST['venue'];
        $subject = $_POST['Subject'];
        $message = $_POST['message'];


        if ( empty($name) || empty($mailFrom) || empty($phone) || empty($venue) || empty($subject) || empty($message)) //if a all the information is empty show a sutible error message
        {
            $error = "<h4>The following fields are empty:</h4>";
            
        
            // shows which part of the form is not filled in
            if (empty($name))
            {
                $error = $error."<p>Please enter your Name.</p>";
            }
            if (empty($mailFrom))
            {
                $error = $error."<p>Please enter your E-mail</p>";
            }
            if (empty($phone))
            {
                $error = $error."<p>Please enter your Phone Number</p>";
            }
            if (empty($venue))
            {
                $error = $error."<p>Please Select the Venue you wish to contact</p>";
            }
            if (empty($subject))
            {
                $error = $error."<p>Please Select your Subject</p>";
            }
            if (empty($message))
            {
                $error = $error."</p>please enter in your message</p>";
            }
        }
        
        //if the validation passes mail to the company email with the message formatted properly. then show the user it was Sent successfully
        else{
            

            $mailTo = "11Hodgecal@gmail.com";
            $headers = $subject;
            $txt = $name." sent a message to ".$venue." Allstars Regarding ".$subject."\r\n\r\n". $message. "\r\n\r\n Phone " . $name . " on ". $phone;

            if (mail($mailTo, $subject, $txt, $headers)){
                $error = "Email Sent successfully";

            } 
        }
    }





?>




<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="Style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>AllStars Sports Bar</title>
</head>

<body>

    <!--This show the nav bar-->
    <nav class="navbar navbar-expand-lg navbar-dark nav-border navbar-custom bg-custom">
        <a class="nav-link-logo" href="#">Allstars Sports Bar</a>
        <button class="navbar-toggler toggle-colour" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse colapse-padding" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="Index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="LiveSports.html">Live Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Food</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Discounts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="FAQS.html">FAQS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Contact.php">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <!--Contact Form-->
    
    <div class="container" align="center">

        <form method="post" class="form-Wrapper">
            <h1 class="Venue-title" align="center">Contact us</h1>
            <div id="errorWrapper"><?php echo $error; ?></div>
            <div class="form-group">
                <label for="exampleFormControlInput1" id="formfontCustom">Name</label>
                <input class="form-control form-custom" id="exampleFormControlInput1" name="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1" id="formfontCustom">Email address</label>
                <input type="email" name="email" class="form-control form-custom" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1" id="formfontCustom">Phone Number</label>
                <input name="Phone" class="form-control form-custom" id="exampleFormControlInput1" placeholder="Phone Number">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" id="formfontCustom">Venue</label>
                <select name="venue" class="form-control form-custom" id="exampleFormControlSelect1">
                    <option id="red-Dropdown"></option>
                    <option id="red-Dropdown">Weston</option>
                    <option id="red-Dropdown">Bristol</option>
                    <option id="red-Dropdown">Taunton</option>
                    <option id="red-Dropdown">Exeter</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" id="formfontCustom">Subject</label>
                <select name="Subject" class="form-control form-custom" id="exampleFormControlSelect1">
                    <option id="red-Dropdown"></option>
                    <option id="red-Dropdown">Room Booking</option>
                    <option id="red-Dropdown">Table Booking</option>
                    <option id="red-Dropdown">Pool Equipment for Sale</option>
                    <option id="red-Dropdown">Dart Board Booking</option>
                    <option id="red-Dropdown">Competition Booking </option>
                </select>
            </div>
            <div class="form-group id=" formfontCustom"">
                <label for="exampleFormControlTextarea1" id="formfontCustom">Details</label>
                <textarea name="message" class="form-control form-custom" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button name="Submit" class="btn btn-dark " id="submit">Submit</button>
            
        </form>
    </div>
    
    <!--This show the footer the footer nav and the copyright-->
    <footer class="footer foot">
        <div class="container">
            <ul class="navbar-nav Footer-nav-main">
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="Index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="LiveSports.html">Live Sports</a>
                </li>
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="#">Events</a>
                </li>
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="#">Food</a>
                </li>
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="#">Discounts</a>
                </li>
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="FAQS.html">FAQS</a>
                </li>
                <li class="nav-item Footer-nav">
                    <a class="nav-link" href="Contact.php">Contact</a>
                </li>
            </ul>
            <p class="copyrigt">Copyright © 2020 AllStars</p>

        </div>
    </footer>

    <!-- Optional JavaScript -->

    <script src="App.js" type="text/javascript"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHyHIssQtzDcu-_ZaH1Ez15RbKrWYCOx0&callback=initMap" type="text/javascript"></script>


    <!-- jQuery first, then Popper.js, then Bootstrap JS 
        -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>

</html>
