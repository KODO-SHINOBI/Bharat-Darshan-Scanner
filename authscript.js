const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const solid_btn = document.querySelector(".btn.solid");
const btn_sign_up = document.querySelector(".btn_sign_up");
const container = document.querySelector(".container");

var form= document.getElementById('form')
let token=""
    form.addEventListener('submit',function(e){
        e.preventDefault()
        var email=document.getElementById('email').value
        var password=document.getElementById('password').value
       
        // 'Authorization': 'Bearer ' + this.state.clientToken,
        // https://jsonplaceholder.typicode.com/posts
        fetch("https://bharatdarshan-backend.onrender.com/scanner/login",{
            method: 'POST',
            body:JSON.stringify({
                email:email,
                password:password,
                
            }),
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            }
        })
        .then(function(response){
            console.log(response.status)
            resJson = response.json();
            if(response.status===200){
                // console.log("res:",resJson.data);
                token=resJson.data;
                if( localStorage.getItem("Token")){
                    console.log("Token present");
                }
                else{
                    localStorage.setItem("Token",token);

                }
            }
            return resJson
           
        })
        .then(function(data){
            console.log("Received data.")
        })
    })

solid_btn.addEventListener("click", () => {
    
    const email = document.getElementById('email');
    const pwd = document.getElementById('password');
    // console.log(email,pwd);
  if(email.value==="abc123@gmail.com" && pwd.value==="pixels1080"){
    alert("Signin Successful");
    window.location.href="scanner.html";
  }
  else{
    location.reload();
  }
});

sign_in_btn.addEventListener("click", () => {
    location.reload();
    // container.classList.add()
});


