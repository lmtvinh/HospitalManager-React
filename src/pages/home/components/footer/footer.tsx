import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/main.css.txt';
import './main.css';
import Button from '@/components/button';
import InfoItem from './infoItem';

const Footer: FC = () => {
    return (
        <footer id="footer" className="footer light-background pb-5 mb-0">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <Button href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename text-decoration-none">MediHos</span>
                        </Button>
                        <div className="footer-contact pt-3 text-start">
                            <p>273 Đ. An Dương Vương, Phường 3, Quận 5, TP Hồ Chí Minh, Việt Nam</p>
                            <p className="mt-3"><strong>Hotline:</strong> <span>1800 5678</span></p>
                            <p><strong>Email:</strong> <span>https://sgu.edu.vn/</span></p>
                        </div>
                        <div className='social-links d-flex mt-4'>
                            <Button href="" className="social-icon-ft">
                                <InfoItem
                                    icon="bi-twitter-x"
                                />
                            </Button>
                            <Button href="" className="social-icon-ft">
                                <InfoItem
                                    icon="bi bi-facebook"
                                />
                            </Button>
                            <Button href="" className="social-icon-ft">
                                <InfoItem
                                    icon="bi bi-instagram"
                                />
                            </Button>
                            <Button href="" className="social-icon-ft">
                                <InfoItem
                                    icon="bi bi-linkedin"
                                />
                            </Button>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 footer-about'>
                        <div className='col-lg-2 col-md-3 footer-links text-start ms-5'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Button href="#" children="Home" className='btn-link-footer' />
                                </li>
                                <li>
                                    <Button href="#about" children="About us" className='btn-link-footer' />
                                </li>
                                <li>
                                    <Button href="#service" children="Services" className='btn-link-footer' />
                                </li>
                                <li>
                                    <Button href="#" children="Terms of service" className='btn-link-footer' />
                                </li>
                                <li>
                                    <Button href="#" children="Privacy policy" className='btn-link-footer' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
