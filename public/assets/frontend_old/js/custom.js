function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$('#testslide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    navText:["<div class='nav-btn prev-slide'><i class='fas fa-angle-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-angle-right'></i></div>"],
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.closemobile-search').click(function(){
  $('.mobilesearch').hide();
});
$('.mobilesearchbtn .btn').click(function(){
  $('.mobilesearch').show();
})


$(document).ready(function(){
    $('#myselection').on('change', function(){
        var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});

$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

$('.datepicker').datepicker();

function readprofile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profileIMG')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}  

$('.notification').click(function(){
    $('#notifications').toggle();
});


/***********/