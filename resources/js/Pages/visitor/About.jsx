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

// Components
import Navbar from  '../../Components/frontend/Navbar'
import Footer from  '../../Components/frontend/Footer'

export default function About({ auth, laravelVersion, phpVersion }) {
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


{/* <!-- Footer Start --> */}
<Footer/>
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
