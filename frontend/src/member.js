
let URL = `http://www.localhost:8888`;

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

// to get member by name 

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
            showMembers(data);
        })
        .catch((err)=>{
            alert("Not found");
            console.error(err);
        })
}


// to add new member 

