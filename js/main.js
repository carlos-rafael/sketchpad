var pencilColor= '#000';
var random=0;
var alpha = 1;
$(document).ready(function(){
    function getRandomColor() {

        var letters = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    var createGrid = function(row, column){


        for(var i=0;i<row;i++){

            for(var j=0;j<column;j++){

                var square = $('<div class="square"></div>');
                square.appendTo($('#gridContainer'));

            }

        }

        // $('.square').width((500/row)-2);
        // $('.square').height((500/column)-2);

        $('.square').width((500/row));
        $('.square').height((500/column));
        $('.square').hover(function() {
        
            
            var cont=1;
            if(random==0){
                    
//                $(this).css("background-color",'rgba(255,255,255,'+alpha+')');
                $(this).css("background-color",'white');
                $(this).css('opacity',$(this).css('opacity')*0.90);
               

             //   console.log($(this).css("background-color").value());
            }
            else{

                $(this).css("background-color",getRandomColor());

            }

        });

    };



    var deleteGrid = function(){

    $("#gridContainer").empty(); 

    };


    createGrid(16, 16);






    $('#restart').click(function(){

    console.log('teste');

    var answer = prompt('Choose the number of squares you want, please');

    deleteGrid();

    createGrid(answer,answer);



    });



    var blankify = function(){

    $('#gridContainer').find('.square').css('background-color', 'white');
    $('#gridContainer').find('.square').css('opacity', '1');
    }



    $('#clean').click(function(){

    blankify();

    });



    $('#rainbow').click(function(){

    random=1;

    });

$('#gray').click(function(){
    random = 0;
})

});