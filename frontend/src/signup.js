const URL = `http://localhost:8888`;

let form = document.getElementById("signUpForm"); // user input form
let nextForm = document.getElementById("nextform"); // next form
let nextForm2 = document.getElementById("nextform2"); // second next form 
class User {
    constructor(name, phone, password) {
        this.name = name;
        this.phone = phone;
        this.password = password;
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.elements['username'].value;
    const phone = form.elements['pan'].value;
    const password = form.elements['password'].value;
    let user = new User(name, phone, password);
    console.log(user);

    user = await ShowNext(user);
    user = await ShowNextNext(user);
    console.log(user); //  here is all the data 
    // Adduser(user)
    console.log(Adduser(user));
});

async function ShowNext(user) {
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".next").style.display = "grid";

    const getFormData = (e) => {
        e.preventDefault();
        const dob = nextForm.elements['dob'].value;
        const gender = nextForm.elements['gender'].value;
        const address = nextForm.elements['address'].value;
        user.dob = dob;
        user.gender = gender;
        user.address = address;
    }

    const nextForm = document.getElementById("nextform");
    nextForm.addEventListener("submit", getFormData);

    return new Promise((resolve) => {
        nextForm.addEventListener("submit", (e) => {
            getFormData(e);
            nextForm.removeEventListener("submit", arguments.callee);
            resolve(user);
        });
    });
}

async function ShowNextNext(user) {
    document.querySelector(".next").style.display = "none";
    document.querySelector(".next2").style.display = "grid";

    const getFormData = (e) => {
        e.preventDefault();
        const city = nextForm2.elements['city'].value;
        const state = nextForm2.elements['state'].value;
        const aadhar = nextForm2.elements['aadhar'].value;
        user.city = city;
        user.state = state;
        user.aadhar = aadhar;
    }

    const nextForm2 = document.getElementById("nextform2");
    nextForm2.addEventListener("submit", getFormData);

    return new Promise((resolve) => {
        nextForm2.addEventListener("submit", (e) => {
            getFormData(e);
            nextForm2.removeEventListener("submit", arguments.callee);
            resolve(user);
        });
    });
}

function Adduser(user){
    return fetch(URL +`/users`,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
    }).then(res => res.json());
}