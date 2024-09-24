/////
// Title: Label Change when Checkbox Checked
// Author: Will Bontrager Software, LLC
// Date Created: 20/12/14
// Date Accessed: 19/04/23
// Availability: https://www.willmaster.com/library/features/label-change-when-checkbox-checked.php
/////
function ChangeCheckboxLabel(ckbx)
{
    if( ckbx.checked )
    {
        document.getElementById("form-checked").style.display = "block";
        document.getElementById("form-unchecked").style.display = "none";
        document.getElementById("afterForm").style.display = "none";
        window.scrollTo(0, 250);
    }
    else
    {
        document.getElementById("form-checked").style.display = "none";
        document.getElementById("form-unchecked").style.display = "block";
        window.scrollTo(0, 0);
        /////
        // Title: JavaScript Timing Events
        // Author: W3Schools
        // Date Created:
        // Date Accessed: 26/04/23
        // Availability: https://www.w3schools.com/js/js_timing.asp
        /////
        setTimeout(function(){
            document.getElementById("afterForm").style.display = "block";
        }, 350);

    }
}


/////
// Title: Disable HTML5 input type date element before today - Javascript DOM HTML Element
// Author: Java2s
// Date Created: 
// Date Accessed: 19/04/23
// Availability: http://www.java2s.com/example/javascript/dom-html-element/disable-html5-input-type-date-element-before-today.html
/////
window.onload = function(){
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("arrivalDate")[0].setAttribute('min', today);
    document.getElementsByName("departureDate")[0].setAttribute('min', today);
    document.getElementsByName("arrivalDate")[0].setAttribute('value', today);
    document.getElementsByName("departureDate")[0].setAttribute('value', today);

    var setHeight = document.getElementsById('faq').clientHeight;
    window.print(setHeight);
    document.getElementsById('customerReviews').height = setHeight;
}



function CheckFormBox(d){
    document.getElementById("form").checked = true;
    document.getElementById("hamb").checked = false;

    document.getElementById("form-checked").style.display = "block";
    document.getElementById("form-unchecked").style.display = "none";
    document.getElementById("afterForm").style.display = "none";

    window.scrollTo(0, 250)

    document.getElementById("room").value = d;
}

function Uncheck(){
    document.getElementById("hamb").checked = false;
}

function GoTo(){
    var id = 'mainBody';
    var yOffset = -100; 
    var element = document.getElementById(id);
    var y = element.getBoundingClientRect().top + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}

