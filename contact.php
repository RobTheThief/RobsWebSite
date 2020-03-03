
<?php include('form_process.php'); ?>

<html class = "text-center bg-white">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head class="inline-block">

  <link rel="stylesheet" href="custylsheet.css"> <!--Custom css outside framework. Has priority-->
  <link rel="stylesheet" href="stylesheet.css">
 <link rel="stylesheet" href="form.css">

</head>


<body >

  <nav class="flex items-center align-center text-left fixed w-full lg:w-4/5 sm:w-full border-4 border-t-0 border-l-0 border-r-0 lg:p-4 pl-4 sm:py-6">
    <div class="dropdown text-left border-4">
      <span class = "menu menuButton text-left font-semibold px-4">Menu</span>
      <div class="dropdown-content bg-black">
        <a href="index.html"class="menu font-semibold pb-3 pt-0 px-4">Home</a>
        <a href="about.html" class="menu font-semibold pb-3 pt-0 px-4">About</a>
        <a href="projects.html" class="menu font-semibold pb-3 pt-0 px-4">Projects</a>
        <a style = "color:#00CED1;" href="contact.php" class="menu font-semibold pb-3 pt-0 px-4">Contact</a>
      </div>
    </div>
    <a href="index.html"class="buttonCustom font-semibold px-4">Home</a>
    <a href="about.html" class="buttonCustom font-semibold  px-4">About</a>
    <a href="projects.html" class="buttonCustom font-semibold px-4">Projects</a>
    <a style = "color:#00CED1;" href="contact.php" class="buttonCustom font-semibold px-4">Contact</a>
  </nav>


<main class ="lg:w-4/5 sm:w-full inline-block bg-gray-200">


  <div class="p-10 inline-block">
    <br>
    <p class="w-full text-left sm:text-3xl lg:text-base">Please leave me a message if you have any questions about my work. <br>I would love to hear from you!</p>
  </div>

  <div class="border-black rounded border-2 text-center">
        <div class="fixedPic w-full inline-block bg-fixed bg-center"><br></br><br></br><br></br></div>
  </div>

  <div class="sm:p-20 lg:p-10 inline-block">

    <div class="container">
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

  <br></br><br></br><br></br><br></br><br></br><br></br>

</main>

<footer>

</footer>



    <script type="text/javascript">

    </script>



  </body>
</html>
