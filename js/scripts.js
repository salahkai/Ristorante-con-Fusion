$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#loginbtn').click(function(){
        $('#loginModal').modal('toggle')
    });
    $('#reserve-table-btn').click(function(){
        $('#reserve-table').modal('toggle')
    });
    
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
})
