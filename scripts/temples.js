// Code for the current year
const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.textContent = today.getFullYear();

// Code for modification date
let lastmodifiedtag = document.querySelector("#lastModified");

const lastmodifieddate = document.lastModified;

lastmodifiedtag.textContent = `Last modification: ${lastmodifieddate}`;


const hamburguerBotton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburguerBotton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburguerBotton.classList.toggle("open");
});
