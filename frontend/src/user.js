let URL = `http://localhost:8888`; // base server URL 

//object of appointment type
class Appointment{
    constructor(name,slot,status,userId){
        this.name = name;
        this.slot = slot;
        this.status = status;
        this.userId = userId;
    }
}

// object of update user type

class UpdateUser{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}


// evenetlistner for add appointment form 

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
    if(name && slot && status){
        let appointment = new Appointment(name,
            slot,
            status,
            userId
        );

        let d = RequestServer(appointment);
        console.log(d);
            
    }else{
        alert("please fill the complete details");
    }
});

// function resposible to add an appointment in server

async function RequestServer(appointment){
    // console.log(appointment);
    const id = appointment.userId;
    delete appointment.userId;
    let data;
    fetch(URL +`/appointments/${id}/1`,
    {
        // /{memberid}/{vaxcenterid}

        method : `POST`,
        headers : 
        {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(appointment)
    })
    .then(res=>res.json())
    .then((res)=>{
        data = res;
        console.log(data);
    })
    .catch((err) => {
        // console.log(err);
    });
    return await data;
}

/**
 * code for update member starts here
 * 
 */

document
    .getElementById("update-employee")
    .addEventListener("click",
    ()=>{
        const id = document
                    .getElementById("update-member-id");
        
        const name = document
                        .getElementById("update-member-name");

        if(id && name ){
            let updateUser = new UpdateUser(id, name);
            UpdateUserFuntion(updateUser)
            .then((res)=>{
                console.log(res);
            })
            .catch((res)=>{
                console.error(res);
                alert("can't update for now ");
            });
        }else{
            alert("please fill complete details");
        }
            
    });

    // funcion to update user

function UpdateUserFuntion(updateUser){
    return fetch(URL + `/appointments/${updateUser.id}`,
    {
        method : 'PUT',
        headers : 
        {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(updateUser)
    })
    .then(res=>res.json());
}


/**
 * code to delete appointment
 * 
 */


document
.getElementById("delete-employee")
.addEventListener("click",
()=>{
    const id = document.getElementById("delete-member-id").value;
    console.log(id);
    if(id){
        deleteAppointment(+id)
        .then((res) => {
            console.log(res);
        })
    }
})

// function to make detele request

function deleteAppointment(id){
    return fetch(URL + `/appointments/${id}`,
    {
        method : 'DELETE',
        headers : 
        {
            'Content-Type' : 'application/json'
        }
    })
    .then(res=>res.json());
}