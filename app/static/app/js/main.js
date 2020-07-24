
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 1025,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 769,
          settings: {
              slidesToShow: 3
          }
      },
      {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    },{
      breakpoint: 376,
      settings: {
          slidesToShow: 1
      }
  }]
  });


    
// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });


//gallery upload file
// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//scroll to top  button
///Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//carousel js

$('.tlt').textillate({ 
  in: { effect: 'splat' },
  out: { effect: 'foldUnfold', sync: true },
  loop: true
});



  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
  function createName() {
    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    // let middlename = $("#middlename").val();
    // let space = (firstname == "" || lastname == "") ? "":" ";
    let fullname = firstname + '-' + lastname;
    $("#name").val(fullname);
  }
  
  $("#firstname, #lastname").keyup(function() {
    createName();
  });
  
  // if you want this function to run when the page loads,
  // just call the function once outside of the keyup event
  createName();


});


