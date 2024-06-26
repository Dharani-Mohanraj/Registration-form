import React from 'react';
import {Link} from 'react-router-dom';
export function Menu()
{
    return(
        <>    
   <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">Employee</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/register"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="register">Register</a>
              </li></Link>
              <Link to="/login"><li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="login">Login</a>
              </li></Link>
            </ul>
          </div>
        </div>
      </nav>
      
        </>
    
    );

}