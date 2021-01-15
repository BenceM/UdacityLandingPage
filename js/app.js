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
const sections= document.querySelectorAll("section");
let port= $(window);
let myscroll= 0;
console.log(sections);

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/*scrolltop*/
function pageTop() {
    /*console.log(port.scrollTop());
    console.log("this is myscrool "+myscroll);*/
   if (port.scrollTop()>40 && myscroll>port.scrollTop()){
        buttonup.style.display= "inline-block";
   }else buttonup.style.display= "none";

   myscroll= port.scrollTop();
}

/* iterating through the sections and creating a button, assigning id and class, adding it to the fragment and once done looping adding it to the unordered list */
function menuBuild() {
    //setup
     const menuElement = document.querySelector("#navbar__list");
     console.log(menuElement);
     const fragment = document.createDocumentFragment();
     /*Tested forEach and "for...of" iterations, the latter yields faster load times.
     Also tested if it's faster with an external button builder function, it doesn't seem to be*/
     for (const section of sections) {
        const buttonTemplate= document.createElement("li");
        buttonTemplate.classList.add("menu__link");
        buttonTemplate.id= `${section.id}`;
        buttonTemplate.textContent= section.dataset.nav;
        fragment.appendChild(buttonTemplate);
     }
     //appending to the list
     menuElement.appendChild(fragment);

 }
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
menuBuild();
port.scroll(pageTop);
buttonup.onclick=()=>{port.scrollTop(0)};
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


