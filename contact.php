
<?php include('form_process.php'); ?>

<html class = "text-center bg-white">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head class="inline-block">

  <link rel="stylesheet" href="custylsheet.css"> <!--Custom css outside framework. Has priority-->
  <link rel="stylesheet" href="stylesheet.css">
  <link rel="stylesheet" href="form.css">
  <link rel="icon" href="img/favicon.png">

</head>


<body >

  <nav class="header sticky flex items-center text-left w-full border-4 border-t-0 border-l-0 border-r-0 lg:p-4 pl-4 sm:py-6">

      <div class="dropdown text-left border-4">
      <span id = "menuBtn" onclick="menuBtn()" class = "menuButton text-left font-semibold px-4 unselectable" unselectable="on">Menu<div class="BtnCover"></div></span>
        <div id="dropdownContainer" class="dropdown-container bg-black">
          <a href="index.html"class="menuLabel font-semibold overlayContainer">Home<div class="overlay"></div></a>
          <a href="index.html#myHeader" class="menuLabel font-semibold overlayContainer">About<div class="overlay"></div></a>
          <a href="projects.html" class="menuLabel font-semibold overlayContainer">Projects<div class="overlay"></div></a>
          <a style = "color:#00CED1;" href="contact.php" class="menuLabel font-semibold overlayContainer">Contact<div class="overlay"></div></a>
        </div>
      </div>

      <a href="index.html"class="buttonCustom font-semibold px-4 overlayContainer">Home<div class="overlay"></div></a>
      <a href="index.html#myHeader" class="buttonCustom font-semibold  px-4 overlayContainer">About<div class="overlay"></div></a>
      <a href="projects.html" class="buttonCustom font-semibold px-4 overlayContainer">Projects<div class="overlay"></div></a>
      <a style = "color:#00CED1;" href="contact.php" class="buttonCustom font-semibold px-4 overlayContainer">Contact<div class="overlay"></div></a>
      <a href="index.html" class = "logoContainer"><img src = "img/rgLogo.png" class = "logo"><div class="overlay"></div></a>

    </nav>


<main class ="w-full inline-block bg-gray-200">


  <div class="px-10 pb-0 flex inline-block">
    <p class="w-full text-center sm:text-2xl lg:text-base"><b>Please leave me a message if you have any questions about my work. <br>I would love to hear from you!</p>
  </div>


  <div class="inline-block">

    <div class="contactContainer">
      <form id="contact" action = "<?= $_SERVER['PHP_SELF']; ?>" method = "post">
        <h3>Quick Contact</h3>
        <fieldset>
          <input placeholder="Your name" type="text" name = "name" tabindex="1" value = "<?= $name ?>" autofocus>
          <span class = "error"><?= $name_error ?></span>
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="text" name = "email" value = "<?= $email ?>" tabindex="2" >
          <span class = "error"><?= $email_error ?></span>
        </fieldset>
        <fieldset>
          <input placeholder="Your Phone Number" type="text" name = "phone" value = "<?= $phone ?>" tabindex="3" >
          <span class = "error"><?= $phone_error ?></span>
        </fieldset>
        <fieldset>
          <input placeholder="Your Web Site starts with http://" type="text" name = "url" value = "<?= $url ?>" tabindex="4" >
          <span class = "error"><?= $url_error ?></span>
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...." type="text" name = "message" value = "<?= $message ?>" tabindex="5" ></textarea>
          <span class = "error"><?= $message_error ?></span>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
        <div class = "success"><?= $success; ?></div>
  </form>
    </p><br>
  </div>

  <br></br><br></br>

</main>

<footer class = "py-4 pr-2 border-4 border-b-0 border-l-0 border-r-0 items-center flex text-left w-full">
  <p class = "text-white text-left px-4 copyright">&copy; 2020 Rob Gannon.</p>
  <div class = "items-center flex text-right w-full" style = "width: 20%;">
    <div class="w-full align-right overlayContainer tooltip">
        <img src="img/linkedinWhite.png" alt="Linkedin" class = "pb-1" height="23" width="23" align = "right">
        <a href="https://www.linkedin.com/in/robert-gannon-4a1b18149/" target="_blank"><div class="overlay"></div></a>
        <span class="tooltiptext">Linkedin</span>
    </div>
    <div class="w-full align-right overlayContainer tooltip">
        <img src="img/github.png" alt="github" height="1" width="23" align = "right">
        <a href="https://github.com/RobTheThief" target="_blank"><div class="overlay"></div></a>
        <span class="tooltiptext">GitHub</span>
    </div>
    <div class="w-full align-right overlayContainer tooltip">
        <img src="img/twitter.png" alt="Twitter" height="23" width="23" align = "right">
        <a href="https://twitter.com/thief_rob" target="_blank" class = ""><div class="overlay"></div></a>
        <span class="tooltiptext">Twitter</span>
    </div>
  </div>
</footer>



    <script type="text/javascript">


    window.onscroll = function() {scrolling()};
    var buttonState = 0;
    //Menu Button
    function menuBtn() {
      if (buttonState == 0){
        dropdownContainer.classList.add("visible");
        buttonState = 1;
      }else{
        buttonState = 0;
        dropdownContainer.classList.remove("visible");
      }
    }
    //Closes hamburger menu
    function hamburgler() {
      if (buttonState == 1){
        buttonState = 0;
        dropdownContainer.classList.remove("visible");
      }
    }

    function scrolling() {
      hamburgler();
    }
    </script>



  </body>
</html>
