"use client"
import React, { useState } from 'react'
import "./pricing.css"

const Pricing = ({ center }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const toggleVisibility4 = () => {
        setIsVisible4(!isVisible4);
    };
    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };
    return (
        <div id='pricing-section' className='section-heading-so sec-bg1'>
            <section className="bsb-pricing-2">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            {/* <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Pricing</h3> */}
                            <h2 className="heading-text text-center mb-4">IVF Packages at{" "}
                                {center?.center_name
                                    .split("-")
                                    .map(
                                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                                    )
                                    .join(" ")}
                            </h2>
                            {/* <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" /> */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-4 gy-lg-0 gx-xl-3">
                        <div className="col-12 col-lg-3">
                            <div className="card border-0 border-bottom border-primary shadow-sm">
                                <div className="card-body custom-card-padding">
                                    <h2 className="h4 mb-2 px-4 pricing-package-name">Value Plan</h2>
                                    <h4 className="display-custom-8 text-primary px-4 mb-0 package-strike-price"><del>₹1,15,000</del></h4>
                                    <p className=" display-custom-7 fw-bold text-primary px-4 mb-1">₹95,000</p>
                                    <p onClick={toggleVisibility} className="display-custom-6 fw-bold text-primary px-4 mb-1 hide-show-p">
                                        {isVisible ? 'Show less' : 'Show more'}
                                    </p>

                                    <div className={`hide-price-mob ${isVisible ? 'visible' : ''}`}>

                                        <ul className="list-group list-group-flush mb-4 custom-li-height">
                                            <li className="list-group-item d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Consultation + Scans + Investigation</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>IVF + ICSI</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Growth Hormones (If Needed)</strong><span className='price-extra'>{" "}(₹40,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Stimulations & Medications</strong><span className='price-extra'>{" "}(₹95,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span> <strong>Fresh embryo transfer</strong><span className='price-extra'>{" "}(₹20,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Embryo freezing</strong><span className='price-extra'>{" "}(₹25,000)</span> </span>
                                            </li>
                                            
                                            
                                            
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Frozen Embryo transfer</strong> <span className='price-extra'>{" "}(₹60,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Second Embryo transfer</strong> <span className='price-extra'>{" "}(₹40,000)</span></span>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card border-0 border-bottom border-primary shadow-lg bsb-pricing-popular">
                                <div className="card-body custom-card-padding">
                                    <h2 className="h4 mb-2 px-4 pricing-package-name">Service plan </h2>
                                    <h4 className="display-custom-8 text-primary px-4 mb-0 package-strike-price"><del>₹1,55,000</del></h4>
                                    <p className=" display-custom-7 fw-bold text-primary px-4 mb-1">₹1,45,000</p>


                                    <p onClick={toggleVisibility2} className="display-custom-6 fw-bold text-primary px-4 mb-1 hide-show-p">
                                        {isVisible2 ? 'Show less' : 'Show more'}
                                    </p>
                                    <div className={`hide-price-mob ${isVisible2 ? 'visible' : ''}`}>

                                        <ul className="list-group list-group-flush mb-4 custom-li-height hide-price-mob">
                                            <li className="list-group-item d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Consultation + Scans + Investigation</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>IVF + ICSI</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Growth Hormones (If Needed)</strong><span className='price-extra'>{" "}(₹40,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Stimulations & Medications</strong><span className='price-extra'>{" "}(₹95,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span> <strong>Fresh embryo transfer</strong><span className='price-extra'>{" "}(₹20,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Embryo freezing</strong> </span>
                                            </li>
                                            
                                           
                                            
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Frozen Embryo transfer</strong> </span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Second Embryo transfer</strong> <span className='price-extra'>{" "}(₹40,000)</span></span>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card border-0 border-bottom border-primary shadow-sm">
                                <div className="card-body custom-card-padding">
                                    <h2 className="h4 mb-2 px-4 pricing-package-name">Flexible Plan</h2>
                                    <h4 className="display-custom-8 text-primary px-4 mb-0 package-strike-price"><del>₹1,95,000</del></h4>
                                    <p className=" display-custom-7 fw-bold text-primary px-4 mb-1">₹1,80,000</p>

                                    <p onClick={toggleVisibility3} className="display-custom-6 fw-bold text-primary px-4 mb-1 hide-show-p">
                                        {isVisible3 ? 'Show less' : 'Show more'}
                                    </p>

                                    <div className={`hide-price-mob ${isVisible3 ? 'visible' : ''}`}>

                                        <ul className="list-group list-group-flush mb-4 custom-li-height hide-price-mob">
                                            <li className="list-group-item d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Consultation + Scans + Investigation</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>IVF + ICSI</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Growth Hormones (If Needed)</strong><span className='price-extra'>{" "}(₹40,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Stimulations & Medications</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span> <strong>Fresh embryo transfer</strong><span className='price-extra'>{" "}(₹20,000)</span></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Embryo freezing</strong> </span>
                                            </li>
                                            
                                            
                                            
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Frozen Embryo transfer</strong> </span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <span><strong>Second Embryo transfer</strong> <span className='price-extra'>{" "}(₹40,000)</span></span>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card border-0 border-bottom border-primary shadow-sm">
                                <div className="card-body custom-card-padding">
                                    <h2 className="h4 mb-2 px-4 pricing-package-name">Ultimate Plan</h2>
                                    <h4 className="display-custom-8 text-primary px-4 mb-0 package-strike-price"><del>₹2,60,000</del></h4>
                                    <p className=" display-custom-7 fw-bold text-primary px-4 mb-1">₹2,50,000</p>

                                    <p onClick={toggleVisibility4} className="display-custom-6 fw-bold text-primary px-4 mb-1 hide-show-p">
                                        {isVisible4 ? 'Show less' : 'Show more'}
                                    </p>

                                    <div className={`hide-price-mob ${isVisible4 ? 'visible' : ''}`}>

                                        <ul className="list-group list-group-flush mb-4 custom-li-height hide-price-mob">
                                            <li className="list-group-item d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Consultation + Scans + Investigation</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>IVF + ICSI</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Growth Hormones (If Needed)</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Stimulations & Medications</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span> <strong>Fresh embryo transfer</strong></span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Embryo freezing</strong> </span>
                                            </li>
                                            
                                            
                                           
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Frozen Embryo transfer</strong> </span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg align-items-center" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span><strong>Second Embryo transfer</strong> </span>
                                            </li>
                                        </ul>
                                        {/* <br /> */}
                                        <a href="#" className="btn bsb-btn-xl btn-primary rounded-pill">Choose Plan</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Pricing