/*
 */

// première exercice

const section = document.querySelector("section");
const ol = section.querySelector("ol");
const li = ol.querySelector("li");

const firstChildren = ol.children[0];
console.log(firstChildren.textContent);
const lastChildren = ol.children[4];
console.log(lastChildren.textContent);

ol.insertBefore(lastChildren, firstChildren);

// deuxième exercice

const main = document.querySelector("main");
const secondSection = main.children[1];
const thirdSection = main.children[2];

const secondSectionH2 = secondSection.querySelector("h2");
const thirdSectionH2 = thirdSection.querySelector("h2");

thirdSection.insertBefore(secondSectionH2, thirdSection.firstChild);

secondSection.insertBefore(thirdSectionH2, secondSection.firstChild);

// troisième exercice

main.removeChild(thirdSection);
