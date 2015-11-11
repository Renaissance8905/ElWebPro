<?php
/**
 * Created by PhpStorm.
 * User: cjs2599
 * Date: 11/10/15
 * Time: 3:31 PM
 */


$times = array("8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm");
fileCheck($times);
$file = fopen('signup.txt', 'a');
$slots = array();
$i = 0;

while (!feof($file)) {
    $name = fgets($file);
    $slots[$i] = $name;
    $i ++;
}


function head() {
    print <<<TOP
<html>
<head>
<title> Sign-Up Sheet </title>
</head>
<body>
<form>
<h1>Sign-Up Sheet</h1>
<table>
<thead>
<td>Time Slot</td>
<td>Name</td>
</thead>
TOP;
}

function tail() {
    print <<<BOTTOM
</table>
</form>
</body>
</html>
BOTTOM;

}

function tableMake($t, $n) {
    for($k = 0; $k < count($t); $k++) {
        if($n[$k] == " ") {
            print "<tr><td>$t[$k]</td><td><input type='text' id=$t[$k]></td></tr>";
        }
        else {
            print "<tr><td>$t[$k]</td><td>$n[$k]</td></tr>";
        }
    }

}

function fileCheck($t) {
    if (!is_file('signup.txt')) {
        $f = fopen('signup.txt', 'r');
        fclose($f);
        exec('chmod 666 signup.txt');
        $f = fopen('signup.txt', 'a');
        for ($i = 0; $i < count($t); $i++) {
            fwrite($f, " \n");
        }
        fclose($f);
    }
    elseif (!is_writable('signup.txt')) {
        exec('chmod 666 signup.txt');
    }
}

// execute
head();
tableMake($times, $slots);
tail();


?>
