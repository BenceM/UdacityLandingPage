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
const menuElement = document.querySelector("#navbar__list");
let port= $(window);
let myscroll= 0;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/*scrolltop: made it so it only appears if the user is scrolling up, so it doesn't block the view all the time*/

function pageTop() {
    if (port.scrollTop()>40 && myscroll>port.scrollTop()){
        buttonup.style.display= "inline-block";
    }else buttonup.style.display= "none";

    myscroll= port.scrollTop();
}

/* iterating through the sections and creating a button, assigning id and class, adding it to the fragment and once done looping adding it to the unordered list
Tested forEach and "for...of" iterations, the latter seem to yields faster load times.
Also tested if it's faster with an external button builder function, it doesn't look like it is*/

function menuBuild() {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const buttonTemplate= document.createElement("li");
        buttonTemplate.id= "navbu_"+section.id;
        buttonTemplate.textContent= section.dataset.nav;
        buttonTemplate.innerHTML=`<a href="#${section.id}" class="menu__link">${buttonTemplate.textContent}</a>`
        fragment.appendChild(buttonTemplate);
    }
     //appending to the list
    menuElement.appendChild(fragment);
}

//checking if the section is in the viewport or not, if yes adding the active state both to the section and the corresponding navigation button

function active(){
    for (const section of sections) {
        const bounds=section.getBoundingClientRect();
        const item= document.querySelector(`#navbu_${section.id}`);
        if(bounds.top<=270 && bounds.bottom>=270) {
            section.classList.add("your-active-class");
            item.classList.add("active");
        }else{
            section.classList.remove("your-active-class");
            item.classList.remove("active");
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





