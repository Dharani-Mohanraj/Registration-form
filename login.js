import axios from 'axios';
import React from 'react';
export function Login(){
   function validate(event){
      event.preventDefault()
      var username=document.getElementById("username").value
      var password=document.getElementById("password").value
      var key={
       username:username,
       password:password
      }
      if(username==""){
       alert("please enter first name")
     }
     else if(password==""){
       alert("please enter password")
     }
     else{
       axios.post("http://localhost:3002/log",key)
       .then((res)=>{
           if(res.data.status==="empty set"){
               alert("please check ")
           }
           else if(res.data.status==="success"){
               var s_no = res.data.s_no
               alert("successfully log in")
               window.location.href=`/dashboard/${s_no}`
           }
           else if(res.data.status==="invalid_user"){
               alert("plz enter valid user name")
           }
           else if(res.data.status==="error"){
               alert("all the data are invalid")
           }
           else{
               alert("please enter all details")
           }
       }
       
       )}
   }
   return(
       <>
        <div class="text-center d-flex flex-column align-items-center login">
       <form onSubmit={validate}>
       <h1 class="mt-5 text-light">LOG IN </h1>
       <table className='tabdiv p-2' cellpadding="10px">
           <tr>
               <td>
               <label>USER NAME</label> </td> 
               <td> <input type="text"id="username" placeholder='Enter the user Name'/></td>
           </tr>
           <tr>
               <td><label>PASSWORD</label></td> 
               <td><input type="password" id="password"placeholder='Enter the password'/> <br/></td>
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