// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
    }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");
let paginationWapper = document.getElementById("pagination-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// cats
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let catsData = [];

// employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

let paginationButton = document.getElementById("pagination-wrapper");
///console.log(paginationButton)
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById("update-score-employee-salary");
let updateScoreEmpSalaryButton = document.getElementById("update-score-employee");

let employeesData = [];

// ***** Event listeners ***** //
window.addEventListener("load", () => {
    //fetchData();
    fetchAndRenderEmployees()
    //fetchAndRenderCats(1);
});

sortAtoZBtn.addEventListener("click", () => {

});

sortZtoABtn.addEventListener("click", () => {

});

empCreateBtn.addEventListener("click", () => {
    let empNameInput = document.getElementById("employee-name");
    let empImgInput = document.getElementById("employee-image");
    let empDeptInput = document.getElementById("employee-dept");
    let empSalaryInput = document.getElementById("employee-salary");
    let empCreateBtn = document.getElementById("add-employee");
    let empName = empNameInput.value;
    let empimg = empImgInput.value;
    let empDept = empDeptInput.value;
    let empSal = empSalaryInput.value;

    let empobj = {
        name: empName,
        image: empimg,
        department: empDept,
        salary: empSal,

    }
    fetch(`${baseServerURL}/employees`, {
        method: "POST",
        body: JSON.stringify(empobj),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            fetchAndRenderEmployees()
            console.log(data)
        })
});

updateScoreEmpSalaryButton.addEventListener("click", function () {

});

updateEmpUpdateBtn.addEventListener("click", function () {

});

loginUserButton.addEventListener("click", async function () {

});

registerUserButton.addEventListener("click", function () {

});

// ***** Utilities ***** //
// array of objects
// async function fetchData(){

//   try {
//     let fetch_request =await fetch(`${baseServerURL}/employees`);
//     let user_Data = await (await fetch_request).json();
//     //console.log(user_Data)
//     renderUserList(user_Data)
//   } catch (error) {
//     console.log(error)
//   }

function fetchAndRenderEmployees() {
    fetch(`${baseServerURL}/members`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let member = data.map((item) => ({
                id: item.id,
                title: item.name,
                salary: item.salary,
                description: "Rs. " + item.salary,
                linkText: "Edit",
                linkUrl: "https://google.com",
                imageUrl: `${baseServerURL}${item.image}`,
            }))
            employeesData = empObj;
            renderCardList(empObj)
        })
}

// function renderUserList(data){
//   let cardTemp = `
//   <div class = ""card-list>
//   ${data.map((ele)=> getCard(ele.id,ele.departmet,ele.image,ele.name,ele.salary)).join("")}
//   </div>
//   `
// console.log(cardTemp);
// mainSection.innerHTML=cardTemp
// }
// function getCard(id,department,image,name,salary){
//  const card = `
//  <div class="card" data-id="${id}">
//  <div class="card__img">
//  <img src=${baseServerURL}${image} alt=""food/>
//  </div>
//  <div class="card_body>
//  <h3 class="card__item card__title">${name}</h3>
//  <div class="card__item card__description"> Rs. ${salary}</div>
//  <a href="https://google.com/" data-id="${id}" class="card__item card_link">Edit</a>
//  </div>
//  </div>
//  `;
// return card;
// }


function showPaginationButton(totalCats, limit) {
    const numOfButton = Math.ceil(totalCats / limit);
    paginationWapper.innerHTML = `
     ${getButtons(1, 1)}
     ${getButtons(2, 2)}
     ${getButtons(3, 3)}
     `
    const paginationButtons = document.querySelectorAll(".pagination-buttons");
    for (let btn of paginationButtons) {
        btn.addEventListener("click", function (e) {
            let pageNumber = e.target.dataset["pageNumber"];
            //console.log(pageNumber)
            fetchAndRenderCats(pageNumber);
            fetchAndRenderEmployees(pageNumber)
        })
    }
}

function getButtons(text, pageNuber) {
    return `
   <button class="pagination-buttons" data-page-number="${pageNuber}">${text}</button> 
 `
}

// // id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
    let cardList = `
    <div class="card-list">
      ${cardData
            .map((item) =>
                getCard(
                    item.id,
                    item.title,
                    item.user.aadharNo,
                    item.user.panNo,
                    item.linkText,
                    item.linkUrl,
                    item.imageUrl
                )
            )
            .join("")}
    </div>
  `;

    mainSection.innerHTML = cardList;

    // let editLinks = document.querySelectorAll(".card__link");
    // for (let editLink of editLinks) {
    //   editLink.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     let currentId = e.target.dataset.id;
    //     populateEditForms(currentId);
    //   });
    // }
}

function getCard(id, title, desc, panNo,linkText, linkUrl, imageUrl) {
    let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${imageUrl} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${title}</h3>
          <div class="card__item card__description">
            ${desc}
          </div>
          <div class="card__item card__description">
            ${panNo}
          </div>
          <a href=${linkUrl} data-id=${id} class="card__item card__link">${linkText}</a>
        </div>
      </div>
  `;
    return card;
}

/**
 * 
 * {
  "id": 0,
  "dose1Status": true,
  "dose2Status": true,
  "dose1Date": "2023-07-22",
  "dose2Date": "2023-07-22",
  "user": {
    "id": 0,
    "name": "string",
    "dob": "2023-07-22",
    "gender": "string",
    "address": "string",
    "city": "string",
    "state": "string",
    "pincode": "336899",
    "password": "string",
    "role": "string",
    "panNo": "string",
    "aadharNo": "string"
  },
  "appointment": {
    "bookingId": 0,
    "mobileNo": 0,
    "dateOfBooking": "2023-07-22",
    "slot": "SLOT1",
    "bookingStatus": true,
    "memberId": "string",
    "vaxCenter": {
      "centerId": 0,
      "centerName": "string",
      "address": "string",
      "city": "string",
      "state": "string",
      "pinCode": "678372",
      "appointments": [
        "string"
      ],
      "vaxInventory": {
        "inventoryId": 0,
        "date": "2023-07-22",
        "vaxCenter": "string",
        "vaxCount": [
          "string"
        ]
      }
    }
  },
  "vaccine": {
    "vaxName": "string",
    "description": "string",
    "member": "string",
    "vaccineCount": {
      "vaxId": 0,
      "vaxQuantity": 0,
      "vaxPrice": 0,
      "vaccine": "string",
      "vaxInventory": {
        "inventoryId": 0,
        "date": "2023-07-22",
        "vaxCenter": "string",
        "vaxCount": [
          "string"
        ]
      }
    },
    "id": 0
  },
  "vaxRegistration": {
    "mobNo": 0,
    "dateOfRegistration": "2023-07-22"
  }
}
 */