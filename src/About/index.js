import React from 'react';
import './index.css';


function About() {


    return (
        // <!-- About Section-->
        <section class="page-section bg-primary text-white mb-0" id="sobre">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">
                        Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. 
                    </p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">
                        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                    </p></div>
                </div>
        
            </div>
        </section>
    );
  }
  
  export default About;