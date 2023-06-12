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

export default function Product({ auth, laravelVersion, phpVersion }) {
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
