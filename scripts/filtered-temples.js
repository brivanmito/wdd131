const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14-16",
        area: 11610,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6407.jpg"
    },
    {
        templeName: "Tegucigalpa Honduras",
        location: "Tegucigalpa, Honduras",
        dedicated: "2013, March, 17",
        area: 28254,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878-main.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 1 - 2",
        area: 45000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
    }

]

const gallery = document.querySelector("#gallery");


temples.forEach(temple => {

    // Create a card por temples
    const card = document.createElement("div");

    //Create a class for styling the card class
    card.classList.add("temple-card");

    // Create the tags elements
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicatedDate = document.createElement("p");
    const area = document.createElement("p");
    const templeImg = document.createElement("img");

    // Assigning the values to the tags created
    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicatedDate.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Size: ${temple.area}`;
    templeImg.src = temple.imageUrl;

    //Adding an ALT to the images
    templeImg.alt = temple.templeName;

    //Adding the lazy load property
    templeImg.loading = "lazy";


    //Adding to the div card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicatedDate);
    card.appendChild(area);
    card.appendChild(templeImg);

    //Adding the card to the DOM
    gallery.appendChild(card);




    
});