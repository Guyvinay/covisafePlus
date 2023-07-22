let URL = `http://localhost:8888/`;
class Appointment{
    constructor(name,slot,status,userId){
        this.name = name;
        this.slot = slot;
        this.status = status;
        this.userId = userId;
    }
}

document
.getElementById("add-employee")
.addEventListener("click",
()=>{
    
    const name = document
                    .getElementById("member-name")
                    .value;

    const slot = document
                    .getElementById("member-slot")
                    .value;

    const status = document
                    .getElementById("member-pin")
                    .value;
    
    const userId = document
                    .getElementById("member-id")
                    .value;
    let appointment = new Appointment(name,
                                      slot,
                                      status,
                                      userId
                                     );

    RequestServer(appointment)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        alert("can't fetch data");
        console.error(err);
    })
})


function RequestServer(appointment){
   return fetch(URL +`/appointments/${appointment.userId}/1`,
    {
        method : `POST`,
        headers : 
        {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(appointment)
    })
    .then(res=>res.json());
}