function validateForm(){
    var x = document.getElementById("user").value;
    console.log(x);

    if(x == ""){
        uerror.textContent = "this field can't be empty"
        uerror.style.color = "red"
    }
    else{
        uerror.textContent = "";
    }
    /* mail validator */
     let c = document.getElementById("email1").value;
    let d = document.getElementById("email2").value;
    if(c == d && c != "" && d != ""){
        console.log("dobar mejl");
        eerror11.textContent = "";
        eerror22.textContent = "";
    }
    else if(c != d){
        eerror22.textContent = "mail has to be same as the other one  "
        eerror22.style.color = "red"
        }

    var pattern1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(pattern1.test(d)){
        eerror2.textContent = "";
    }
    else{
        eerror2.textContent = "enter correct email format ";
        eerror2.style.color = "red";
    }
     if(pattern1.test(c)){
        eerror1.textContent = "";
    }
    else
        {
        eerror1.textContent = "enter correct email format ";
        eerror1.style.color = "red";
        }
        /* mail validator */

        /* pass */

    let g = document.getElementById("pass1").value;
    let f = document.getElementById("pass2").value;
    if(g == f && g != "" && f != ""){
        console.log("sifra je ok");
        epass1.textContent = "";
        epass2.textContent = "";
    }
     if(g != f){
        epass2.textContent = "passwords have to match "
        epass2.style.color = "red"
        }
        else 
            epass2.textContent = "";

        
        if(f == ""){
            epass22.textContent = "this field can't be empty "
            epass22.style.color = "red"
        }
        else{
            epass22.textContent = ""
            epass22.style.color = ""
        }
        if(g == ""){
            epass11.textContent = ""
            epass11.style.color = ""
        }
        else{
            epass11.textContent = ""
            epass11.style.color = ""
        }
    
 
  } /* енд */
  
  