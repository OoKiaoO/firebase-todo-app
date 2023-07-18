import { add } from "./functions.js"; // remember to add script line into HTML file + add the type=module otherwise throws SyntaxError
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import  { getDatabase, ref, push }  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

console.log(add(3,5));

const appSettings = {
  databaseURL: "https://playground-dba9d-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const addButton = document.getElementById("add-button");
const cartInput = document.getElementById("input-field");

addButton.addEventListener("click", (event) => {
  let inputValue = cartInput.value;
  push(shoppingListInDB, inputValue);
  console.log(inputValue);
  });
