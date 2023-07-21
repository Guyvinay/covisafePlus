document.querySelectorAll(".page").forEach((e) => {
    e.addEventListener("click", () => {
        if(!e.classList.contains("active")){
            SwitchSign(e);
        }
    })
})


function SwitchSign(e){
    document.querySelector(".active").setAttribute("class", "page");
    e.setAttribute("class", "active page");
    // sign in form  
    const signin = document.querySelector(".signin");
    // sign up form 
    const signup = document.querySelector(".signup");

    const next = document.querySelector(".next");

    const next2 = document.querySelector(".next2");

    // sign in styles for read only 
    const signinStyle = window.getComputedStyle(signin);
    // sign up style for read only 
    const signupStyle = window.getComputedStyle(signup);

    if(signinStyle.getPropertyValue("display") === "grid"){
        signin.style.display = "none";
        signup.style.display = "grid";
        next2.style.display = "none";
        next.style.display = "none";

    }else{
        signup.style.display = "none";
        signin.style.display = "grid";
        next.style.display = "none";
        next2.style.display = "none";
    }
}