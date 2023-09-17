
let URL = `http://localhost:8080`;

class User {
    constructor(name,
                dob, 
                gender , 
                address, 
                city, 
                state, 
                pincode, 
                role, 
                panNo, 
                aadharNo,
                password
                ) 
    {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.role = role;
        this.panNo = panNo;
        this.aadharNo = aadharNo;
        this.password = password;
    }
}


document
    .getElementById("add-employee")
    .addEventListener("click",()=>{
        getMemebersData()
        .then((res)=>{
            showMembers(res);
        })
        .catch((err)=>{
            console.error(err);
            alert("unable to get data ");
        })
    });

function getMemebersData(){
    return fetch(URL +`/members`)
            .then(res=>res.json());
}

function showMembers(res){
    let data_list_wrapper = document.getElementById("data-list-wrapper");
    // data_list_wrapper.innerHTML = `Hi`;
    // console.log(res);
    data_list_wrapper.innerHTML = res.map(e => 
        memberCard(e)
        ).join("");
}

function memberCard(member){
    return `
    <div class="card" data-id=${member.id} >
        <div class="card__img">
        <img src= "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title"> Name : ${member.user.name}</h3>
          <div class="card__item card__description">
            Aadhar no : ${member.user.aadharNo}
          </div>
          <div class="card__item card__description">
            Pan no : ${member.user.panNo}
          </div>
        </div>
    </div>
`;
}

// to get member by aadhar 

document
    .getElementById("byAadhar")
    .addEventListener("click",
    ()=>{
        const aadhar = document
                        .getElementById("member-name")
                        .value;
        GetMemberByName(aadhar);
    });

function GetMemberByName(aadhar){
    fetch(URL + `/members/aadhar/${aadhar}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
             document.getElementById("data-list-wrapper").innerHTML =memberCard(data) ;
        })
        .catch((err)=>{
            alert("Not found");
            console.error(err);
        })
}


// to add new member 

document
    .getElementById("add-member")
    .addEventListener("click",
    ()=>{
        const name = document
                        .getElementById("member-name")
                        .value;
        const dob = document
                        .getElementById("member-age")
                        .value;
        const aadhar = document
                        .getElementById("member-aadhar")
                        .value;
        const gender = document
                        .getElementById("member-gender")
                        .value;   
        const state = document
                        .getElementById("member-state")
                        .value;
        const city = document
                        .getElementById("member-city")
                        .value;
        const pincode = document
                            .getElementById("member-pin")  
                            .value;
        const panNo = document
                        .getElementById("member-pan")
                        .value;
        const password = document.getElementById("member-password")
                            .value;
        const address = document.getElementById("member-address")
            .value;
        const role = `USER`;
        let user = new User(name,
            dob,
            gender,
            address,
            city,
            state,
            pincode,
            role,
            panNo,
            aadhar,
            password);
        Adduser(user);
    })

function Adduser(user) {
    return fetch(URL + `/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res=>{
        alert("user added successfully");
        console.log(res);
    })
    .catch((err)=>{
        alert("oops something went wrong");
    })
    ;
}





document
    .getElementById("byPan")
    .addEventListener("click",
        () => {
            const pan = document
                .getElementById("member-pan")
                .value;
            GetMemberByName(pan);
        });

function GetMemberByName(pan) {
    fetch(URL + `/members/pan/${pan}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            document.getElementById("data-list-wrapper").innerHTML =memberCard(data) ;
            // showMembers(data);
        })
        .catch((err) => {
            alert("Not found");
            console.error(err);
        })
}
