/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navlist= document.getElementById("navbar__list");
const buttonup= document.getElementById("buttonup");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/*scrolltop*/
let port= $(window);
let myscroll= 0;

function pageTop() {
    console.log(port.scrollTop());
    console.log("this is myscrool"+myscroll);
   if (port.scrollTop()>40 && myscroll>port.scrollTop()){
        buttonup.style.display= "inline-block";
   }else buttonup.style.display= "none";

   myscroll=port.scrollTop();


}
port.scroll(pageTop);
function menuclick() {

}

navlist.click(menuclick);


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


