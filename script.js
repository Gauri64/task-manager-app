import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
addDoc,
collection,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// SIGNUP
window.signup = async function () {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {

await createUserWithEmailAndPassword(auth, email, password);

alert("Signup successful");

window.location.href = "dashboard.html";

} catch (error) {

alert(error.message);

}

};



// LOGIN
window.login = async function () {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {

await signInWithEmailAndPassword(auth, email, password);

window.location.href = "dashboard.html";

} catch (error) {

alert(error.message);

}

};


// LOGOUT
window.logout = async function () {

await signOut(auth);

window.location.href = "index.html";

};


// ADD TASK
window.addTask = async function () {

const taskInput = document.getElementById("taskInput");

const task = taskInput.value;

if(task === "") return;

await addDoc(collection(db,"tasks"),{
text: task
});

taskInput.value="";

loadTasks();

};


// LOAD TASKS
async function loadTasks(){

const taskList = document.getElementById("taskList");

if(!taskList) return;

taskList.innerHTML="";

const querySnapshot = await getDocs(collection(db,"tasks"));

querySnapshot.forEach((docItem)=>{

const li = document.createElement("li");

li.innerText = docItem.data().text;

const deleteBtn = document.createElement("button");

deleteBtn.innerText = "Delete";

deleteBtn.onclick = async function(){

await deleteDoc(doc(db,"tasks",docItem.id));

loadTasks();

};

li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

loadTasks();
