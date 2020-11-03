import React from 'react';
import './index.css';


function Masthead() {


    return (
        // <!-- Masthead-->
        <header class="masthead text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img class="masthead-avatar mb-5" src="assets/img/Star_Wars_Logo.svg" alt="" />
                {/* <!-- Masthead Heading--> */}
                <h1 class="masthead-heading text-uppercase mb-0">may the force be with you</h1>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p class="masthead-subheading font-weight-light mb-0">By Muryllo Dantas</p>
            </div>
        </header>
    );
  }
  
  export default Masthead;