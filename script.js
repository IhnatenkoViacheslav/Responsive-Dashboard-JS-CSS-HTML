"use strict";

const burger = document.querySelector(".navigation__logo");
const container = document.querySelector(".navigation__container");
const menu = document.querySelector(".menu__list");
const profile = document.querySelector(".navigation__profile");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  profile.classList.toggle("active");
  container.classList.toggle("active");
  body.classList.toggle("lock");
});
