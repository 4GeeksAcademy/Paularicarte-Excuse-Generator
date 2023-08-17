/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
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

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
