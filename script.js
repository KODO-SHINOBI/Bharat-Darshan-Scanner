// scanner auth 
let token="" 
var form= document.getElementById('form')
  
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
            return response.json()
        })
        .then(function(data){
            console.log("data:",data)
            token=data
        })
    })

    // scanner app  .......................................................
    const scanner = new Html5QrcodeScanner('reader', { 
        // Scanner will be initialized in DOM inside element with id of 'reader'
        qrbox: {
            width: 250,
            height: 250,
        },  // Sets dimensions of scanning box (set relative to reader element width)
        fps: 20, // Frames per second to attempt a scan
    });


    scanner.render(success, error);
    // Starts scanner

    function success(result) {

        document.getElementById('result').innerHTML = `
        <h2>Success!</h2>
        <p><a href="${result}">${result} ${token} </a></p>`;
        // Prints result as a link inside result element
    //     fetch("https://bharatdarshan-backend.onrender.com/scanner/login",{
    //     method: 'POST',
    //     body:JSON.stringify({
    //         email:email,
    //         password:password,
            
    //     }),
    //     headers:{
    //         "Content-Type":"application/json; charset=UTF-8",
    //         // 'Authorization': 'Bearer ' + this.state.clientToken
    //     }
    // })
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(data){
    //     console.log("data:",data)
    //     console.log()
    // })
    //     scanner.clear();
        // Clears scanning instance

        document.getElementById('reader').remove();
        // Removes reader element from DOM since no longer needed
    
    }

    function error(err) {
        console.error(err);
        // Prints any errors to the console
    }