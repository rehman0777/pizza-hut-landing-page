// ----------------- hero section carousel ---------------
$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
    loop: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    center: true,
    startPosition: 1,
    autoplay: false,
  });
});

// ------------------ dropdown ---------------
$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );
});

// ------------ load more btn ---------------
document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      const hiddenProducts = document.querySelectorAll(".hidden");
      hiddenProducts.forEach(function (product) {
        product.classList.remove("hidden");
      });

      loadMoreBtn.style.display = "none";
    });
  }
});

// ------------------ brand owlCarousel ------------

$(document).ready(function () {
  $(".brand_logo_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

// ---------- client slider ------------

$(document).ready(function() {
  var slickInstance = $('.happy_client_section_main').slick({
    slidesToShow: 1, 
    centerMode: true, 
    centerPadding: '0',
    focusOnSelect: true,
    arrows: false, 
    infinite: true,
    initialSlide: 1, 
    autoplay: false,
  autoplaySpeed: 1000,
  });

 
  function resetCircles() {
    $('.circle').removeClass('active'); 
  }

  resetCircles();
  $('#circle2').addClass('active');
  
 
  $('#circle1').on('click', function() {
    resetCircles(); 
    $(this).addClass('active');  
    slickInstance.slick('slickGoTo', 0);  
  });

  $('#circle2').on('click', function() {
    resetCircles(); 
    $(this).addClass('active'); 
    slickInstance.slick('slickGoTo', 1);  
  });

  $('#circle3').on('click', function() {
    resetCircles();  
    $(this).addClass('active'); 
    slickInstance.slick('slickGoTo', 2); 
  });
});

// -------------- toggle fvrt btn ---------------
const favoriteButtons = document.querySelectorAll(".fvrt_btn");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});


// Get all the images in the gallery
const images = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-btn');

// Function to open popup
images.forEach((img) => {
  img.addEventListener('click', () => {
    const imgSrc = img.src; // Get the source of the clicked image
    popupImg.src = imgSrc;  // Set the popup image to the clicked image
    popup.style.display = 'flex'; // Show the popup
  });
});

// Function to close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});



