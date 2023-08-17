/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse().excuse;
    document.querySelector("#the-img").src = generateExcuse().imagen;
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let img = [
    "src/assets/img/dog.jpg",
    "src/assets/img/grandma.jpg",
    "src/assets/img/turtle.jpg",
    "src/assets/img/dinosaur.jpg",
    "src/assets/img/neighbors_cat.jpg",
    "src/assets/img/Wind.jpg",
    "src/assets/img/computer.jpg",
    "src/assets/img/lavadoraRota.jpg",
    "src/assets/img/sneezingPanda.png"
  ];
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My dinosaur",
    "The neighbors cat",
    "The wind",
    "The computer",
    "The laundry machine",
    "A sneezing panda"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "burned",
    "painted",
    "sneezed",
    "flooded",
    "crashed",
    "blew",
    "tore up"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my assignment",
    "my notes",
    "my presentation",
    "my textbook",
    "my research paper"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "right when I turned my back",
    "just as I opened my backpack",
    "moments before I was about to present",
    "while I was grabbing my notebook",
    "right after I printed it"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  let imgIndex;

  // Usar una estructura condicional para definir el índice de imagen basado en el índice de "who"
  if (whoIndex === 0) {
    imgIndex = 0; // Índice de imagen correspondiente a "The dog"
  } else if (whoIndex === 1) {
    imgIndex = 1; // Índice de imagen correspondiente a "My grandma"
  } else if (whoIndex === 2) {
    imgIndex = 2; // Índice de imagen correspondiente a "turtle"
  } else if (whoIndex === 3) {
    imgIndex = 3; // Índice de imagen correspondiente a "dinosaur"
  } else if (whoIndex === 4) {
    imgIndex = 4; // Índice de imagen correspondiente a "neighbors_cat"
  } else if (whoIndex === 5) {
    imgIndex = 5; // Índice de imagen correspondiente a "wind"
  } else if (whoIndex === 6) {
    imgIndex = 6; // Índice de imagen correspondiente a "computer"
  } else if (whoIndex === 7) {
    imgIndex = 7; // Índice de imagen correspondiente a "lavadoraRota"
  } else if (whoIndex === 8) {
    imgIndex = 8; // Índice de imagen correspondiente a "sneezing"
  }

  let imgSource = img[imgIndex];

  return {
    excuse:
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex],
    imagen: imgSource
  };
};
