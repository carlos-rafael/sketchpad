$(document).ready(function(){


    for(var i=0;i<16;i++){
        for(var j=0;j<16;j++){
            var square = $('<div class="square"></div>');
            square.appendTo($('#gridContainer'));
        }
    }

    $('.square').hover(function() {
            $(this).css("background-color","#aa2244");
    });
});