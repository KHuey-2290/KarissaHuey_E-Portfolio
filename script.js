// Navbar JS
$(document).ready(function () {

    //Buttons in header
    $(".menu-toggle-container").click(function() {
        $(".navbar-list").toggle();
    });

    $("#resumeButtonPNG").click(function() {
        $(".resume-box").toggle();
    });
});

// Projects Page
    // Open the Modal
    function openModal() {
        document.getElementById("myModal").style.display = "block";
      }
      
    // Close the Modal
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }