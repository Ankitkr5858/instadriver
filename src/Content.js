import filterImage from './img/filter.svg'
import oceanWaves from './img/ocean-waves.png';
import searchDriver from './img/searchdriver.svg';
import calldriverImage from "./img/calldriver.svg";
import hiredriverImage from "./img/hiredriver.svg";
import searchdriverImage from "./img/searchdriver.svg";
import driversImage from './img/drivers.svg';
import oceanWaveWhiteImage from './img/ocean-waves-white.png';
import employeesImage from "./img/employees.svg";
import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forDriver: false,
        };
    }
    setForDriver = (forDriver) => {
        this.setState({ forDriver });
    }
    render() {
        let tab;
        if (this.state.forDriver) {
            tab = <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                aria-labelledby="pills-home-tab">
                <div className="row text-center">
                    <div className="col-md-4">
                        <br /><br />
                        <img src={searchDriver} alt="" />
                        <h4 className="service-heading">Search Drivers</h4>
                        <p className="text-muted">
                            Visit Instadriver platform, select the driver category you want, choose the location of the driver and you can either select all drivers or verified drivers and press search button.
                                                </p>
                    </div>
                    <div className="col-md-4">
                        <br /><br />
                        <img src={calldriverImage} alt="" />
                        <h4 className="service-heading">Call Driver</h4>
                        <p className="text-muted">
                            After hitting search button, you will see summarised profiles of the drivers with their contacts. Click view profile, to read the full profile. Access the contact number and call the driver.
                                                </p>
                    </div>
                    <div className="col-md-4">
                        <br /><br />
                        <img src={hiredriverImage} alt="" />
                        <h4 className="service-heading">Hire Drivers</h4>
                        <p className="text-muted">
                            On the call, discuss the job opportunity, terms and conditions, or arrange a meetup to discuss further and if you are both a perfect fit, proceed to hire that driver. As simple as that.
                                                </p>
                    </div>
                </div>
            </div>

        }
        else {
            tab = <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row text-center">
                    <div className="col-md-4">
                        <br /><br />
                        <img src={searchdriverImage} alt="" />
                        <h4 className="service-heading">Post Profile</h4>
                        <p className="text-muted">
                            As a driver, all you need to do is to create an account with Instadriver, go to your profile page and update your profile. Once you post your profile, employers will be able to find you.
                                                </p>
                    </div>
                    <div className="col-md-4">
                        <br /><br />
                        <img src={calldriverImage} alt="" />
                        <h4 className="service-heading">Employers find you and call you</h4>
                        <p className="text-muted">
                            Employers normally come to Instadriver to find and hire drivers. Employers will be able to view your profile, and if they are impressed, they will call you and you instantly get a driving job.
                                                </p>
                    </div>
                    <div className="col-md-4">
                        <br /><br />
                        <img src={hiredriverImage} alt="" />
                        <h4 className="service-heading">And you get hired</h4>
                        <p className="text-muted">
                            Instadriver is the best and reliable platform for drivers to get hired. When it comes to looking for drivers, employers only know of Instadriver. Leverage Instadriver to get a good job.
                                                </p>
                    </div>
                </div>
            </div>
        }


        return (
            <div>
                <div id="content">
                    <header className="masthead">
                        <div className="container">
                            <div className="col-lg-5 intro-text">
                                <div className="blackbox">
                                    <div className="intro-lead-in">Find and Hire A Driver. Its Free <br />and No Login Requirement</div>
                                    <div className="padding50">
                                        <input type="hidden" id="verified_cnt" name="verified_cnt" />
                                        <form method="get" id="frmSearch" name="frmSearch" action="https://instadriver.co/driver/search">
                                            <div className="select">
                                                <select id="cid" name="cid" defaultValue="0">
                                                    <option value="">Select Category</option>
                                                    <option value="1">Personal Driver</option>
                                                    <option value="2">Public Commuter Driver (e.g. Bus, Ambulance)</option>
                                                    <option value="3">Ride-Sharing Driver e.g Uber, Taxify</option>
                                                    <option value="4">School Bus Driver</option>
                                                    <option value="5">Truck Driver</option>
                                                    <option value="6">Forklift Driver</option>
                                                    <option value="7">On-Demand Driver</option>
                                                </select>
                                                <div className="select__arrow"></div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control select pac-target-input" id="loc" name="loc" placeholder="Enter a location" autoComplete="off" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">
                                                        <svg className="feather feather-map-pin sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="select">
                                                <select id="sty" name="sty">
                                                    <option value="">Select Search Type</option>
                                                    <option value="all">Search All Drivers</option>
                                                    <option value="Y">Search Verified Drivers</option>
                                                </select>
                                                <div className="select__arrow"></div>
                                            </div>
                                            <div id="sr_msg_list" role="alert"></div>
                                            <div className="row padding12">
                                                <div className="col-lg-2 col-2">
                                                    <img src={filterImage} data-toggle="modal" data-target="#filterModal" className="cursorpointer" alt="" />
                                                </div>
                                                <div className="col-lg-10 col-10">
                                                    <a href="https://instadriver.co/" className="btn btn-primary btn-xl js-scroll-trigger width100"> Search</a>
                                                </div>
                                                <div role="alert" id="sr_msg_nolist"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading">How it works</h2>
                                    <img src={oceanWaves} alt="" />
                                    <br /><br />
                                    <div className="d-flex justify-content-center">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item tab">
                                                <a className={`nav-link ${!this.state.forDriver ? "active" : ""}`} id="pills-home-tab" onClick={() => this.setForDriver(false)}>For Employers</a>
                                            </li>
                                            <li className="nav-item tab">
                                                <a className={`nav-link ${this.state.forDriver ? "active" : ""}`} id="pills-profile-tab" onClick={() => this.setForDriver(true)}>For Drivers</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        {tab}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="" id="portfolio">
                        <div className="container-fluid">
                            <div className="row imagewave">
                                <div className="col-lg-6 bg-light text-center padding501">
                                    <div className="col-lg-9 float-right">
                                        <img src={employeesImage} alt="" /><br /><br />
                                        <h2 className="section-heading text-center">Employers!</h2>
                                        <img src={oceanWaves} alt="" />
                                        <p>
                                            You don’t have to waste money posting vacancy Ads. Stop posting vacancy ads on whatsapp groups and on social media. Stop making desperate hires because you have few choices. Stop nagging your friends to find you a driver. Get your driver from Instadriver and it is free. At Instadriver, you have a long list to choose a competent driver. Go to search bar, select the driver category you want, choose the location of the driver and press search button. Pick the driver you want. It is that simple and instantaneous.
                                    </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-center yellowbg">
                                    <div className="col-lg-9 float-left">
                                        <img src={driversImage} alt="" /><br /><br />
                                        <h2 className="section-heading text-center">Drivers!</h2>
                                        <img src={oceanWaveWhiteImage} alt="" />
                                        <p>
                                            This is a platform to get employed faster and effortlessly. It is not fun staying unemployed. You don’t have to toil asking your relatives, friends and acquaintances to find you a job. Get a job instantly. Just post your profile on Instadriver and employers will find you instantaneously. You can increase your visibility and increase the odds of getting hired by using the <a href="https://instadriver.co/verified_search" style={{ color: '#fff' }}>Verified Feature</a> and the <a style={{ color: '#fff' }} href="https://instadriver.co/top_ad_features">Top Add Feature</a>. To create your profile for free, click <a style={{ color: '#fff' }} href="https://instadriver.co/login">here</a>. This is how millennials and Gen Z find employment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="modal fade" id="filterModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Filter</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <form method="get" id="frmSearch1" name="frmSearch1" action="https://instadriver.co/driver/search" >
                                <input type="hidden" name="cid" id="cid1" />
                                <input type="hidden" name="sty" id="sty1" />
                                <input type="hidden" name="loc" id="loc1" />
                                <div className="modal-body text-left">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <div className="form-group mb-0">
                                                <label htmlFor="currency">Select currency used in your country</label>
                                            </div>
                                            <div className="select selectbox">
                                                <select className="form-control" id="currency" name="currency" defaultValue="INR">
                                                    <option value="">Select Currency</option>
                                                    <option value="AFN">Afghan Afghani</option>
                                                    <option value="ALL">Albanian Lek</option>
                                                    <option value="DZD">Algerian Dinar</option>
                                                    <option value="EUR">Andorra Euro</option>
                                                    <option value="AOA">Angolan Kwanza</option>
                                                    <option value="XCD">East Caribbean Dolla</option>
                                                    <option value="XCD">East Caribbean Dolla</option>
                                                    <option value="ARS">Argentine Peso</option>
                                                    <option value="AMD">Armenian Dram</option>
                                                    <option value="AWG">Aruban Florin</option>
                                                    <option value="AUD">Australian Dollar</option>
                                                    <option value="EUR">Austria Euro</option>
                                                    <option value="AZN">Azerbaijani Manat</option>
                                                    <option value="BHD">Bahraini Dinar</option>
                                                    <option value="BDT">Bangladeshi Taka</option>
                                                    <option value="BBD">Barbadian Dollar</option>
                                                    <option value="BYR">Belarusian Ruble</option>
                                                    <option value="EUR">Belgium Euro</option>
                                                    <option value="BZD">Belize Dollar</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="BMD">Bermudian Dollar</option>
                                                    <option value="BTN">Bhutanese Ngultrum</option>
                                                    <option value="BWP">Botswana Pula</option>
                                                    <option value="BRL">Brazilian Real</option>
                                                    <option value="BGN">Bulgarian Lev</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="BIF">Burundian Franc</option>
                                                    <option value="KHR">Cambodian Riel</option>
                                                    <option value="XAF">Central African CFA </option>
                                                    <option value="CAD">Canadian Dollar</option>
                                                    <option value="CVE">Cape Verdean Escudo</option>
                                                    <option value="KYD">Cayman Islands Dolla</option>
                                                    <option value="XAF">Central African CFA </option>
                                                    <option value="CLP">Chilean Peso</option>
                                                    <option value="CNY">Chinese Yuan</option>
                                                    <option value="COP">Colombian Peso</option>
                                                    <option value="KMF">Comorian Franc</option>
                                                    <option value="NZD">New Zealand Dollar</option>
                                                    <option value="CRC">Costa Rican Colón</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="HRK">Croatian Kuna</option>
                                                    <option value="CUC">Cuban Convertible Pe</option>
                                                    <option value="EUR">Cyprus Euro</option>
                                                    <option value="CZK">Czech Koruna</option>
                                                    <option value="DKK">Danish Krone</option>
                                                    <option value="DJF">Djiboutian Franc</option>
                                                    <option value="XCD">East Caribbean Dolla</option>
                                                    <option value="DOP">Dominican Peso</option>
                                                    <option value="USD">United States Dollar</option>
                                                    <option value="EGP">Egyptian Pound</option>
                                                    <option value="USD">United States Dollar</option>
                                                    <option value="XAF">Central African CFA </option>
                                                    <option value="ERN">Eritrean Nakfa</option>
                                                    <option value="EUR">Estonia Euro</option>
                                                    <option value="ETB">Ethiopian Birr</option>
                                                    <option value="DKK">Danish Krone</option>
                                                    <option value="FJD">Fijian Dollar</option>
                                                    <option value="EUR">Finland Euro</option>
                                                    <option value="EUR">France Euro</option>
                                                    <option value="XPF">CFP Franc</option>
                                                    <option value="XAF">Central African CFA </option>
                                                    <option value="GEL">Georgian Lari</option>
                                                    <option value="EUR">Germany Euro</option>
                                                    <option value="GHS">Ghana Cedi</option>
                                                    <option value="GIP">Gibraltar Pound</option>
                                                    <option value="EUR">Greece Euro</option>
                                                    <option value="XCD">East Caribbean Dolla</option>
                                                    <option value="GTQ">Guatemalan Quetzal</option>
                                                    <option value="GBP">British Pound</option>
                                                    <option value="GNF">Guinean Franc</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="GYD">Guyanese Dollar</option>
                                                    <option value="HTG">Haitian Gourde</option>
                                                    <option value="HNL">Honduran Lempira</option>
                                                    <option value="HKD">Hong Kong Dollar</option>
                                                    <option value="HUF">Hungarian Forint</option>
                                                    <option value="ISK">Icelandic Króna</option>
                                                    <option value="INR">Indian Rupee</option>
                                                    <option value="IDR">Indonesian Rupiah</option>
                                                    <option value="IQD">Iraqi Dinar</option>
                                                    <option value="EUR">Ireland Euro</option>
                                                    <option value="GBP">British Pound</option>
                                                    <option value="ILS">Israeli New Shekel</option>
                                                    <option value="EUR">Italy Euro</option>
                                                    <option value="JMD">Jamaican Dollar</option>
                                                    <option value="JPY">Japanese Yen</option>
                                                    <option value="GBP">British Pound</option>
                                                    <option value="JOD">Jordanian Dinar</option>
                                                    <option value="KZT">Kazakhstani Tenge</option>
                                                    <option value="KES">Kenyan Shilling</option>
                                                    <option value="AUD">Australian Dollar</option>
                                                    <option value="KWD">Kuwaiti Dinar</option>
                                                    <option value="KGS">Kyrgyzstani Som</option>
                                                    <option value="LAK">Lao Kip</option>
                                                    <option value="EUR">Latvia Euro</option>
                                                    <option value="LBP">Lebanese Pound</option>
                                                    <option value="LSL">Lesotho Loti</option>
                                                    <option value="LRD">Liberian Dollar</option>
                                                    <option value="CHF">Swiss Franc</option>
                                                    <option value="EUR">Lithuania Euro</option>
                                                    <option value="EUR">Luxembourg Euro</option>
                                                    <option value="MGA">Malagasy Ariary</option>
                                                    <option value="MWK">Malawian Kwacha</option>
                                                    <option value="MYR">Malaysian Ringgit</option>
                                                    <option value="MVR">Maldivian Rufiyaa</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="EUR">Malta Euro</option>
                                                    <option value="USD">United States Dollar</option>
                                                    <option value="MRO">Mauritanian Ouguiya</option>
                                                    <option value="MUR">Mauritian Rupee</option>
                                                    <option value="MXN">Mexican Peso</option>
                                                    <option value="MDL">Moldovan Leu</option>
                                                    <option value="EUR">Monaco Euro</option>
                                                    <option value="MNT">Mongolian Tögrög</option>
                                                    <option value="EUR">Montenegro Euro</option>
                                                    <option value="XCD">East Caribbean Dolla</option>
                                                    <option value="MAD">Moroccan Dirham</option>
                                                    <option value="MZN">Mozambican Metical</option>
                                                    <option value="MMK">Burmese Kyat</option>
                                                    <option value="NAD">Namibian Dollar</option>
                                                    <option value="AUD">Australian Dollar</option>
                                                    <option value="NPR">Nepalese Rupee</option>
                                                    <option value="EUR">Netherlands Euro</option>
                                                    <option value="XPF">CFP Franc</option>
                                                    <option value="NZD">New Zealand Dollar</option>
                                                    <option value="NIO">Nicaraguan Córdoba</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="NGN">Nigerian Naira</option>
                                                    <option value="NZD">New Zealand Dollar</option>
                                                    <option value="NOK">Norwegian Krone</option>
                                                    <option value="OMR">Omani Rial</option>
                                                    <option value="PKR">Pakistani Rupee</option>
                                                    <option value="PAB">Panamanian Balboa</option>
                                                    <option value="PGK">Papua New Guinean Ki</option>
                                                    <option value="PYG">Paraguayan Guaraní</option>
                                                    <option value="PEN">Peruvian Nuevo Sol</option>
                                                    <option value="PHP">Philippine Peso</option>
                                                    <option value="PLN">Polish Z?oty</option>
                                                    <option value="EUR">Portugal Euro</option>
                                                    <option value="QAR">Qatari Riyal</option>
                                                    <option value="RON">Romanian Leu</option>
                                                    <option value="RUB">Russian Ruble</option>
                                                    <option value="RWF">Rwandan Franc</option>
                                                    <option value="XCD">East Caribbean Dolla</option>
                                                    <option value="WST">Samoan</option>
                                                    <option value="EUR">San Marino Euro</option>
                                                    <option value="SAR">Saudi Riyal</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="RSD">Serbian Dinar</option>
                                                    <option value="SCR">Seychellois Rupee</option>
                                                    <option value="SLL">Sierra Leonean Leone</option>
                                                    <option value="BND">Brunei Dollar</option>
                                                    <option value="EUR">Slovakia Euro</option>
                                                    <option value="EUR">Slovenia Euro</option>
                                                    <option value="SBD">Solomon Islands Doll</option>
                                                    <option value="SOS">Somali Shilling</option>
                                                    <option value="ZAR">South African Rand</option>
                                                    <option value="EUR">Spain Euro</option>
                                                    <option value="LKR">Sri Lankan Rupee</option>
                                                    <option value="SDG">Sudanese Pound</option>
                                                    <option value="SRD">Surinamese Dollar</option>
                                                    <option value="SZL">Swazi Lilangeni</option>
                                                    <option value="SEK">Swedish Krona</option>
                                                    <option value="CHF">Swiss Franc</option>
                                                    <option value="TWD">New Taiwan Dollar</option>
                                                    <option value="TJS">Tajikistani Somoni</option>
                                                    <option value="THB">Thai Baht</option>
                                                    <option value="XOF">West African CFA Fra</option>
                                                    <option value="TOP">Tongan Pa?anga</option>
                                                    <option value="TTD">Trinidad And Tobago </option>
                                                    <option value="TND">Tunisian Dinar</option>
                                                    <option value="TRY">Turkish Lira</option>
                                                    <option value="TMT">Turkmenistan Manat</option>
                                                    <option value="AUD">Australian Dollar</option>
                                                    <option value="UGX">Ugandan Shilling</option>
                                                    <option value="UAH">Ukrainian Hryvnia</option>
                                                    <option value="AED">United Arab Emirates</option>
                                                    <option value="GBP">British Pound</option>
                                                    <option value="USD">United States Dollar</option>
                                                    <option value="UYU">Uruguayan Peso</option>
                                                    <option value="UZS">Uzbekistani Som</option>
                                                    <option value="VUV">Vanuatu Vatu</option>
                                                    <option value="VND">Vietnamese ??ng</option>
                                                    <option value="XPF">CFP Franc</option>
                                                    <option value="YER">Yemeni Rial</option>
                                                    <option value="ZMW">Zambian Kwacha</option>
                                                    <option value="BWP">Botswana Pula</option>
                                                </select>
                                                <div className="select__arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <div className="form-group mb-0">
                                                <label htmlFor="min"><strong>Salary</strong></label>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-6">
                                                    <input type="text" className="form-control" id="min" name="min" placeholder="Minimum" maxLength="15" />
                                                </div>
                                                <div className=" col-lg-6">
                                                    <input type="text" className="form-control" id="max" name="max" placeholder="Maximum" maxLength="15" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <div className="form-group mb-0">
                                                <label htmlFor="gdr"><strong>Gender</strong></label>
                                            </div>
                                            <div className="">
                                                <div className="select selectbox">
                                                    <select id="gdr" name="gdr">
                                                        <option value="">Select</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                    <div className="select__arrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="dlp" className="text-left"><strong>Years since driving
                              Licence was issued</strong></label>
                                            <div className="input-group mb-0">
                                                <input type="text" className="form-control" placeholder="At least" id="dlp" name="dlp" maxLength="15" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">Years</span>
                                                </div>
                                                <label htmlFor="dlp" generated="true" className="error"></label>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="dexp" className="text-left"><strong>Driving<br /> experience</strong></label>
                                            <div className="input-group mb-0">
                                                <input type="text" className="form-control" placeholder="At least" id="dexp" name="dexp" maxLength="15" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">Years</span>
                                                </div>
                                                <label htmlFor="dexp" generated="true" className="error"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert alert-success">You may consider editing your filters or watering down your filters
                     for fast search. Otherwise, go with the selected filters.</div>
                                </div>
                                <div className="modal-footer text-center ">
                                    <button type="button" className="btn btn-primary btn-form display-4 pr-3 pl-3"
                                    >Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="PremiumSearchModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Search</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body text-left">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div className="row ">
                                            <div className="alert alert-success">Verified Search is a premium feature. Proceed to pay to view
                           search results.</div>
                                            <div className="col-lg-6 pt-2">
                                                <label htmlFor="inputEmail4">
                                                    <strong>
                                                        <h3>KShs. 2000</h3>
                                                    </strong>
                                                </label>
                                            </div>
                                            <div className="col-lg-6 text-right"><a href="https://instadriver.co/home/payment"
                                                className="btn btn-primary btn-form display-4">Pay To View
                              Results</a>
                                            </div>
                                        </div>
                                        <div className="row text-center mt-3 mb-2">
                                            <div className="col-lg-12">
                                                <img src="./InstaDriver _ Home_files/or.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputEmail4" className="text-left">Insert Search No. to view result of the verified
                                        search you made 5 days ago. You can also
                        check your email for search url.</label>
                                    </div>
                                </div>
                                <form id="frmSearchId" name="frmSearchId" method="post" >
                                    <div className="input-group mb-3">
                                        <input type="hidden" name="_token" />
                                        <input type="text" className="form-control" placeholder="Insert search number" id="search_id" name="search_id" maxLength="6" />
                                        <div className="input-group-append">
                                            <button className="input-group-text" id="basic-addon2" type="button" >Search</button>
                                        </div>
                                    </div>
                                    <div htmlFor="search_id" generated="true" className="error"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Content