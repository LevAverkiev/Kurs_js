"use strict";

const books = document.querySelectorAll(".book");
books[1].after(books[0]);
books[0].after(books[4]);
books[5].after(books[2]);

const backImg = document.querySelector("body");
backImg.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

const title2 = document.querySelectorAll("h2")[2];
title2.textContent = "Книга 3. this и Прототипы Объектов";
title2.style.color = "darkkhaki";

const advertising = document.querySelector(".adv");
advertising.remove();

const unorderedList2 = document.querySelectorAll("ul")[1];
const list2 = unorderedList2.querySelectorAll("li");
list2[3].after(list2[6]);
list2[6].after(list2[8]);
list2[9].after(list2[2]);

const unorderedList5 = document.querySelectorAll("ul")[4];
const list5 = unorderedList5.querySelectorAll("li");
list5[1].after(list5[9]);
list5[9].after(list5[3]);
list5[3].after(list5[4]);
list5[7].after(list5[5]);

const unorderedList6 = document.querySelectorAll("ul")[5];
const list6 = unorderedList6.querySelectorAll("li");

const newList6 = document.createElement("li");
newList6.textContent = "Глава 8: За пределами ES6";
list6[8].append(newList6);