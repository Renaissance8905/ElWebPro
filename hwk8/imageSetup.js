/**
 * Created by cjs2599 on 10/27/15.
 */


// Randomly select one of the three image sets
var dirSelect = Math.floor((Math.random * 3) + 1);

// Fill array with selected image set
var images = new Array();


for (i = 1; i < 13; i++) {
    images[i] = "images"+dirSelect.toString()+"/img"+dirSelect.toString()+"-"+i.toString()+".jpg";

}

