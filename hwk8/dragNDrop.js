/**
 * Created by cjs2599 on 10/21/15.
 */
/*
 Define variables for the values computed by the grabber event
 handler but needed by mover event handler
 */
var diffX, diffY, theElement;


// The event handler function for grabbing the word
function grabber(event) {

// Set the global variable for the element to be moved

    theElement = event.currentTarget;

// Determine the position of the word to be grabbed,
//  first removing the units from left and top

    var posX = parseInt(theElement.style.left);
    var posY = parseInt(theElement.style.top);

// Compute the difference between where it is and
// where the mouse click occurred

    diffX = event.clientX - posX;
    diffY = event.clientY - posY;

// Now register the event handlers for moving and
// dropping the word

    document.addEventListener("mousemove", mover, true);
    document.addEventListener("mouseup", dropper, true);

// Stop propagation of the event and stop any default
// browser action

    event.stopPropagation();
    event.preventDefault();

}  //** end of grabber

// *******************************************************

// The event handler function for moving the word

function mover(event) {
// Compute the new position, add the units, and move the word

    theElement.style.left = (event.clientX - diffX) + "px";
    theElement.style.top = (event.clientY - diffY) + "px";

// Prevent propagation of the event

    event.stopPropagation();
}  //** end of mover

// *********************************************************
// The event handler function for dropping the word

function dropper(event) {

// Check for grid nearness and snap if appropriate
    snapper(event);

// Unregister the event handlers for mouseup and mousemove

    document.removeEventListener("mouseup", dropper, true);
    document.removeEventListener("mousemove", mover, true);

// Prevent propagation of the event

    event.stopPropagation();
}  //** end of dropper


function snapper(event) {
    var top = theElement.style.top
    var left = theElement.style.left
    if ((100 <= top <= 400) && (100 <= left <= 400)) {
        top = Math.floor(top / 100) * 100
        left = Math.floor(left / 100) * 100
        theElement.style.top = top
        theElement.style.left = left
    }
}
