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
const activeclass= document.querySelector("your-active-class");
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

/* iterating through the sections and creating a button, assigning id and class, adding it to the fragment and once done looping adding it to the unordered list
Tested forEach and "for...of" iterations, the latter yields faster load times.
Also tested if it's faster with an external button builder function, it doesn't seem to be*/
function menuBuild() {
    //setup
     const menuElement = document.querySelector("#navbar__list");
     const fragment = document.createDocumentFragment();
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
//checking if the section is in the viewport or not, if yes adding the active state
//I feel like there is a better way to do this
 function active(){
    for (const section of sections) {
        var myElementHeight = section.offsetHeight;
        console.log(myElementHeight);
        const bounds=section.getBoundingClientRect();
        console.log(bounds.top+"   "+bounds.bottom);
        if(bounds.top<=250 && bounds.top>0){
            section.classList.add("your-active-class");
        }else if(bounds.bottom<250 && bounds.bottom>0){
            section.classList.remove("your-active-class");
        }else if(bounds.top>250){
            section.classList.remove("your-active-class");
        }else if(bounds.bottom>250){
            section.classList.add("your-active-class");
        }
    }
 }
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
menuBuild();
port.scroll(pageTop);
port.scroll(active);
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


