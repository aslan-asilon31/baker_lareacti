import { Link, Head } from '@inertiajs/react';

import '../../assets/frontend/lib/animate/animate.min.css'
import '../../assets/frontend/lib/owlcarousel/assets/owl.carousel.min.css'
import '../../assets/frontend/css/bootstrap.min.css'
import '../../assets/frontend/css/style.css'



export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>

          <style>
            {
                `.hur {
                    font-size:100px;
                },
                `
            }
          </style>

        <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn backgroundnavbar" data-wow-delay="0.1s" >
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-primary m-0 " >Baker</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="\ navbar-collapse" id="navbarCollapse" >
                <div className="navbar-nav mx-auto p-4 p-lg-0 warnanavbar">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <a href="/about" className="nav-item nav-link">About</a>
                    <a href="/service" className="nav-item nav-link">Services</a>
                    <a href="/product" className="nav-item nav-link">Products</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="team.html" className="dropdown-item">Our Team</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className=" d-none d-lg-flex">
                    <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                        <i className="fa fa-phone text-primary"></i>
                    </div>
                    <div className="ps-3">
                        <small className="text-primary mb-0">Call Us</small>
                        <p className="text-light fs-5 mb-0">+012 345 6789</p>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
        
