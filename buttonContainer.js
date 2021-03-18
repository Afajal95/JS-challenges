<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>


--//buttonsGrid.css//--
-----------------------------------------------------------------------
.buttonContainer {
    width: 75%;
}
.buttonContainer > .button {
    width: 30%;
    height: 48px;
    font-size: 24px;
}


--//buttonsGrid.js//--
-----------------------------------------------------------------------
/* Create the button container */
var container = document.createElement('div');
/* Set the container's style class */
container.className = 'buttonContainer';
/* Set the container id */
container.id = 'btns';

/* Create an array of references to the buttons */
var buttons = [9];
for (var i = 0; i < 9; i++) {
    /* Create a button */
    buttons[i] = document.createElement('button');
    /* Set the button's id */
    buttons[i].id = 'btn' + (i + 1);
    /* Set the button's display label */
    buttons[i].innerHTML = (i + 1);
    /* Set the button's style class */
    buttons[i].className = 'button';
    /* Add button to div container */
    container.appendChild(buttons[i]);
}
/* Add div container to document */
document.body.appendChild(container);

/* Get next label in circular rotation */
function getNextLabel(currentLabel) {
    /* The list of values to iterate circularly */
    var labels = [1, 4, 7, 8, 9, 6, 3, 2];

    /* Get the index of the button's next label in labels */
    var index = (labels.indexOf(+(currentLabel)) + 1) % labels.length;

    /* Return next label */
    return labels[index];
}

/* Update the label's innerHTML on click */
function updateLabel() {
    for (var i = 0; i < 4; i++) {
        buttons[i].innerHTML = getNextLabel(buttons[i].innerHTML);
    }
    for (var i = 5; i < 9; i++) {
        buttons[i].innerHTML = getNextLabel(buttons[i].innerHTML);
    }
}

btn5.addEventListener("click", function() {
    /* Rotate button labels */
    updateLabel();
});
