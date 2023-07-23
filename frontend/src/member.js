
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
          <h3 class="card__item card__title">${member.title}</h3>
          <div class="card__item card__description">
            ${member.user.aadharNo}
          </div>
          <div class="card__item card__description">
            ${member.user.panNo}
          </div>
        </div>
    </div>
`;
}