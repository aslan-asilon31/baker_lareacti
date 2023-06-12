import { Link, Head } from '@inertiajs/react';

import '../../assets/frontend/lib/animate/animate.min.css'
import '../../assets/frontend/lib/owlcarousel/assets/owl.carousel.min.css'
import '../../assets/frontend/css/bootstrap.min.css'
import '../../assets/frontend/css/style.css'

// img
import carousel1 from '../../assets/frontend/img/carousel-1.jpg'
import carousel2 from '../../assets/frontend/img/carousel-2.jpg'
import about1 from '../../assets/frontend/img/about-1.jpg'
import about2 from '../../assets/frontend/img/about-2.jpg'
import product1 from '../../assets/frontend/img/product-1.jpg'
import product2 from '../../assets/frontend/img/product-2.jpg'
import product3 from '../../assets/frontend/img/product-3.jpg'
import service1 from '../../assets/frontend/img/service-1.jpg'
import service2 from '../../assets/frontend/img/service-2.jpg'
import team1 from '../../assets/frontend/img/team-1.jpg'
import team2 from '../../assets/frontend/img/team-2.jpg'
import team3 from '../../assets/frontend/img/team-3.jpg'
import team4 from '../../assets/frontend/img/team-4.jpg'
import testimonial1 from '../../assets/frontend/img/testimonial-1.jpg'
import testimonial2 from '../../assets/frontend/img/testimonial-2.jpg'
import testimonial3 from '../../assets/frontend/img/testimonial-3.jpg'
import testimonial4 from '../../assets/frontend/img/testimonial-4.jpg'



export default function Footer({ auth, laravelVersion, phpVersion }) {
    return (
        <>
    <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Office Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Photo Gallery</h4>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src={product1} alt="Image" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src={product2} alt="Image" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src={product3} alt="Image" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src={product2} alt="Image" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src={product2} alt="Image" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light rounded p-1" src={product1} alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
        
