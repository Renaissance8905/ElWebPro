/**
 * Created by cjs2599 on 11/3/15.
 */


var clickCount = 0;
var firstClick = null;
var secondClick = null;
var matches = 0;

var arr = ['1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8'];
var tilenames = ["b00", "b01", "b02", "b03", "b10", "b11", "b12", "b13", "b20", "b21", "b22", "b23", "b30", "b31", "b32", "b33"];


function shuffle(arr) {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;}

shuffle(arr);


// Wrapper for code execution
$(document).ready( function () {


    // set table frame
    $("td").css("height", "100px")
        .css("width", "100px")
        .css("padding", "0px")
        .css("margin", "0px")
        .css("background-color", "green");

    // populate table with numbers (random)
    for ($i = 0; $i < 16; $i++) {
        var sel = "#" + tilenames[$i];
        $(sel).text(arr[$i]);
        // set cell frame
        $(sel)
            .css("border", "none")
            .css("height", "80px")
            .css("width", "100px")
            .css("font-size", "xx-large")
            .css("background-color", "green")
            .css("text-align", "center")
            .css("padding", "0px").css("margin", "0px")
            .css("opacity", "0");
    }



    $(".tile").click( function () {
        // ignore already-matched tiles (class will be stripped upon match)
        if ($(this).attr('class') == 'tile') {

            // handle first click
            if (window.firstClick == null) {
                window.firstClick = $(this).attr('id');
                $(this).css("opacity", "1");
                window.clickCount ++;

                $(this).fadeTo(3000, 0, function () {
                    window.firstClick = null;
                    window.secondClick = null;
                })

                // handle second click
                } else if (window.secondClick == null) {
                    window.secondClick = $(this).attr('id');
                    $(this).css("opacity", "1");
                    window.clickCount ++;

                    // interrupt first click process
                    $("#"+window.firstClick).stop();

                    // case match
                    if (arr[tilenames.indexOf(window.firstClick)] == arr[tilenames.indexOf(window.secondClick)]) {
                        $("#"+window.firstClick).css("opacity", "1").removeAttr('class');
                        $("#"+window.secondClick).css("opacity", "1").removeAttr('class');
                        window.firstClick = null;
                        window.secondClick = null;
                        window.matches ++;

                        // check for win condition
                        if (window.matches == 8) {
                            alert("Congratulations!\nMoves: "+clickCount);
                        }
                    // case mismatch
                    } else {
                        $("#" + window.firstClick).css("opacity", "1").fadeTo(3000, 0, function () {
                            window.firstClick = null;
                        });
                        $("#" + window.secondClick).css("opacity", "1").fadeTo(3000, 0, function () {
                            window.secondClick = null;
                        });
                }
            }
        }
    });
});


