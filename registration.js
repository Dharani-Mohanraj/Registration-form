import React from 'react';
import axios from 'axios';
export function Register(){
   function validate(event){
    event.preventDefault()
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var phonenumber=document.getElementById("phone").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var key={fname:fname,
             lname:lname,
             phonenumber:phonenumber,
             email:email,
             password:password
            }
      if(fname==""){
        alert("please enter first name")
      }
      else if(lname==""){
        alert("please enter last name")
      }
      else if(phonenumber==""){
        alert("please enter phone number")
      }
      else if(email==""){
        alert("please enter email")
      }
      else if(password==""){
        alert("please enter password")
      }
      else{
        axios.post("http://localhost:3004/register",key)
        .then((res)=>{
        if(res.data.status==="error"){
           alert("data are not inserted")
           window.location.reload()
        }
       else if(res.data.status==="success"){
            alert("data are  inserted")
            window.location.href="/login"
        }
        })
      }
    }
    return(
        <>
        <div class="text-center d-flex flex-column align-items-center register">
        <form onSubmit={validate}>
        <h1 class="mt-5 text-light">REGISTRATION FORM</h1>
        <table className='tabdiv p-2' cellpadding="10px">
            <tr>
                <td>
                <label>FIRST NAME</label></td> 
                <td><input type="text"id="fname" placeholder='Enter your First Name'/></td>
            </tr>
            <tr>
                <td><label>LAST NAME</label></td> 
                <td><input type="text" id="lname"placeholder='Enter your Last Name'/> <br/></td>
            </tr>
            <tr>
                <td><label>PHONE NUMBER</label></td> 
                <td><input type="tel" id="phone" placeholder='Enter your Mobile Number'/></td>
            </tr>
            <tr>
                <td><label>EMAIL</label></td>
                <td><input type="email" id="email" placeholder='Enter your Email ID'/></td>
            </tr>
          
            <tr>
                <td><label>PASSWORD</label></td>
                <td><input type="password" id="password" placeholder='Enter Your Password'/></td>
            </tr>
            <tr>
             <td><button className='btn btn-primary'>SUBMIT</button>
            </td></tr>
        </table>
        </form>
    </div>
    
        </>
    );
}
