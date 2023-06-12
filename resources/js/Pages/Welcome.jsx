import { Link, Head } from '@inertiajs/react';

import '../assets/frontend/lib/animate/animate.min.css'
import '../assets/frontend/lib/owlcarousel/assets/owl.carousel.min.css'
import '../assets/frontend/css/bootstrap.min.css'
import '../assets/frontend/css/style.css'

// img
import carousel1 from '../assets/frontend/img/carousel-1.jpg'
import carousel2 from '../assets/frontend/img/carousel-2.jpg'
import about1 from '../assets/frontend/img/about-1.jpg'
import about2 from '../assets/frontend/img/about-2.jpg'
import product1 from '../assets/frontend/img/product-1.jpg'
import product2 from '../assets/frontend/img/product-2.jpg'
import product3 from '../assets/frontend/img/product-3.jpg'
import service1 from '../assets/frontend/img/service-1.jpg'
import service2 from '../assets/frontend/img/service-2.jpg'
import team1 from '../assets/frontend/img/team-1.jpg'
import team2 from '../assets/frontend/img/team-2.jpg'
import team3 from '../assets/frontend/img/team-3.jpg'
import team4 from '../assets/frontend/img/team-4.jpg'
import testimonial1 from '../assets/frontend/img/testimonial-1.jpg'
import testimonial2 from '../assets/frontend/img/testimonial-2.jpg'
import testimonial3 from '../assets/frontend/img/testimonial-3.jpg'
import testimonial4 from '../assets/frontend/img/testimonial-4.jpg'

// Components
import Navbar from  '../Components/frontend/Navbar'
import Footer from  '../Components/frontend/Footer'



export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>

        <style>
            {
                `
                .backgroundnavbar{
                    background-color:black;
                    color:white;
                }
                .bakeryproduct{
                    max-width: 500px;
                }
                `
            }
        </style>

{/* <!-- Topbar Start --> */}
    <div className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 align-items-center d-none d-lg-flex" >
            <div className="col-lg-6 px-5 text-start" >
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Career</a></li>
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Terms</a></li>
                    <li className="breadcrumb-item"><a className="small text-light" href="#">Privacy</a></li>
                </ol>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn-lg-square text-primary border-end rounded-0" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn-lg-square text-primary border-end rounded-0" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn-lg-square text-primary border-end rounded-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn-lg-square text-primary pe-0" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Topbar End --> */}

{/* <!-- Navbar Start --> */}
<Navbar />
{/* <!-- Navbar End --> */}

{/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src={carousel1} alt="" />
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-8">
                                <p className="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                <p className="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src={carousel2} alt="" />
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-8">
                                <p className="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                <p className="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Carousel End --> */}


{/* <!-- Facts Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Years Experience</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-users fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Skilled Professionals</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">175</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-bread-slice fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Total Products</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">135</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Order Everyday</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">9357</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Facts End --> */}

{/* <!-- About Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src={about1} alt="" />
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src={about2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <p className="text-primary text-uppercase mb-2">// About Us</p>
                        <h1 className="display-6 mb-4">We Bake Every Item From The Core Of Our Hearts</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-2 mb-4">
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Quality Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Custom Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Online Order
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Home Delivery
                            </div>
                        </div>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- About End --> */}

{/* <!-- Product Start --> */}
    <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
            <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 text-light mb-0">The Best Bakery In Your City</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <div className="d-inline-flex align-items-center text-start">
                            <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                            <div className="ms-4">
                                <p className="fs-5 fw-bold mb-0">Call Us</p>
                                <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mx-auto mb-5 wow fadeInUp bakeryproduct" data-wow-delay="0.1s" >
                <p className="text-primary text-uppercase mb-2">// Bakery Products</p>
                <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">$11 - $99</div>
                            <h3 className="mb-3">Cake</h3>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src={product1} alt="" />
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                            <h3 className="mb-3">Bread</h3>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src={product2} alt="" />
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                            <h4 className="mb-3">Cookies</h4>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src={product3} alt="" />
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Product End --> */}


{/* <!-- Service Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="text-primary text-uppercase mb-2">// Our Services</p>
                    <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-bread-slice text-white"></i>
                                </div>
                                <h5 className="mb-0">Quality Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-birthday-cake text-white"></i>
                                </div>
                                <h5 className="mb-0">Custom Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-cart-plus text-white"></i>
                                </div>
                                <h5 className="mb-0">Online Order</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-truck text-white"></i>
                                </div>
                                <h5 className="mb-0">Home Delivery</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src={service1} alt="" />
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src={service2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Service End --> */}

{/* <!-- Team Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp bakeryproduct" data-wow-delay="0.1s">
                <p className="text-primary text-uppercase mb-2">// Our Team</p>
                <h1 className="display-6 mb-4">We're Super Professional At Our Skills</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team1} alt="" />
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team2} alt="" />
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team3} alt="" />
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team4} alt="" />
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Team End --> */}

{/* <!-- Testimonial Start --> */}
    <div className="container-xxl bg-light my-6 py-6 pb-0">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp bakeryproduct" data-wow-delay="0.1s">
                <p className="text-primary text-uppercase mb-2">// Client's Review</p>
                <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial1} alt="" />
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial2} alt="" />
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial3} alt="" />
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial4} alt="" />
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
            <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="position-relative">
                            {/* <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"> */}
                            <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- Testimonial End --> */}

{/* <!-- Footer Start --> */}
<Footer />
{/* <!-- Footer End --> */}

{/* <!-- Copyright Start --> */}
    <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Designed By <a href="">Aslan</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Copyright End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>



        </>
    );
}
