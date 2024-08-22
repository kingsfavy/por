function ham(){
document.getElementById("one").style.transform = " rotate(60deg)";

document.getElementById("one").style.transitionDuration = "1s";

document.getElementById("one").style.width= "30px";

document.getElementById("two").style.display= "none";

document.getElementById("three").style.transform = " rotate(130deg)";

document.getElementById("three").style.transitionDuration = "1s";

document.getElementById("three").style.width= "30px";

const menuContent = document.querySelector('.ul');


       if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        // Hide menu content
        menuContent.style.display = 'block';


//menuContent.style.transform= "translate(-1px, 0px)";


//menuContent.style.transform = transitionDuration = "2s";

        setTimeout(function() {
            menuContent.style.left = '0';
        }, 10); // Small delay to allow the display change to take effect
    } else {
        menuContent.style.left = '-250px';
menuContent.style.transform= "translate(0px, 1px)";


menuContent.style.transform = transitionDuration = "1s";
        setTimeout(function() {
            menuContent.style.display = 'none';

document.getElementById("one").style . transform = "rotate(180deg)";
document.getElementById("one").style . transitionDuration = "1s";
document.getElementById("one").style . width = "30px";


document.getElementById("two").style . display = "block";
document.getElementById("two").style . transitionDuration = "1s";
document.getElementById("two").style . width = "20px";


document.getElementById("three").style . transform = "rotate(180deg)";
document.getElementById("three").style . transitionDuration = "1s";
document.getElementById("three").style . width = "10px";

        } ,300); 

    }
}