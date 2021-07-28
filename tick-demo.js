$(document).ready(() => {
    var move = 1;
    var play = true;
   
    if (play != false) {
        $("table tr td").click(function () {
            if ($(this).text() == "" && play) {
                $("button").append("<i></i>");
                if ((move % 2) == 1) {
                    $(this).append("X");
                    $(this).css('color', 'red');
                    $("button").removeClass("fa fa-user-times");
                    $("button").addClass("fa fa-user-circle").css({ "font-size": "70px", "color": "#47d147" });
                }
                else {
                    $(this).append("O");
                    $(this).css('color', 'rgba(71, 216, 71, 0.904)');
                    $("button").removeClass("fa fa-user-circle");
                    $("button").addClass("fa fa-user-times").css({ "font-size": "70px", "color": "red" });
                }
                move++;
                if (findWinner() != -1 && findWinner() != "") {
                    if (findWinner() == "X") {
                        $('body').append('<div class="winner"> <span> Winner </span>X</div>');
                        $('body').append('<button onclick="location.reload()">Play Again</button>');
                        $('.winner').css('background-color', '#e85a4f');
                        $('.button').css('color', '#47d147');
                    }
                    else {
                        $('body').append('<div class="winner"> <span> Winner </span>O</div>');
                        $('body').append('<button onclick="location.reload()">Play Again</button>');
                        $('.winner').css('background-color', '#f2f2f2');
                        $('.button').css('color', '#47d147');

                    }
                    play = false;
                    
                }

            }
        });
    }
    else 
    {
        $('body').append('<div class="winner"> <span> Draw </span>:(</div>');
        $('body').append('<button onclick="location.reload()">Play Again</button>');
        $('.winner').css('background-color', '#f2f2f2');
        $('.button').css('color', '#47d147');
    }

    function findWinner() {
        p1 = $("table tr:nth-child(1) td:nth-child(1)").text();
        p2 = $("table tr:nth-child(1) td:nth-child(2)").text();
        p3 = $("table tr:nth-child(1) td:nth-child(3)").text();
        p4 = $("table tr:nth-child(2) td:nth-child(1)").text();
        p5 = $("table tr:nth-child(2) td:nth-child(2)").text();
        p6 = $("table tr:nth-child(2) td:nth-child(3)").text();
        p7 = $("table tr:nth-child(3) td:nth-child(1)").text();
        p8 = $("table tr:nth-child(3) td:nth-child(2)").text();
        p9 = $("table tr:nth-child(3) td:nth-child(3)").text();
        // check rows
        if ((p1 == p2) && (p2 == p3)) {
            return p3;
        }
        else if ((p4 == p5) && (p5 == p6)) {
            return p6;
        }
        else if ((p7 == p8) && (p8 == p9)) {
            return p9;
        }
        //check columns
        else if ((p1 == p4) && (p4 == p7)) {
            return p7;
        }
        else if ((p2 == p5) && (p5 == p8)) {
            return p8;
        }
        else if ((p3 == p6) && (p6 == p9)) {
            return p9;
        }
        //check digonal
        else if ((p1 == p5) && (p5 == p9)) {
            return p9;
        }
        else if ((p3 == p5) && (p5 == p7)) {
            return p7;
        }
        //no winner
        else {
            return -1;
        }
    }
});
