const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

const sec = document.querySelector("section");

// Create an p element
const createpara = document.createElement("p");
createpara.textContent = "We hope you enojoyed the ride."

// Append the new element created to the "sec" section tag.
sec.appendChild(createpara);

// // Add a text node to the paragraph 
const text = document.createTextNode(
     " - the premier source for web development knowledge",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sec.appendChild(linkPara);

sec.removeChild(linkPara);

// Manipulating css properties with the DOM
createpara.style.color = "white";
createpara.style.backgroundColor = "black";
createpara.style.padding = "10px";
createpara.style.width = "250px";
createpara.style.textAlign = "center";
