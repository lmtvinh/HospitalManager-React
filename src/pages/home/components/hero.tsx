import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImg from '@/assets/img/hero-bg.jpg';
import Image from '@/components/image';
import Button from '@/components/button';
import IconBox from '@/components/iconbox';
import { once } from 'events';

const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 100,
            once: true,
        });
    }, []);


    return (
        <section id="hero" className="hero section light-background">
            <Image
                src={heroImg}
                alt="Hình ảnh background"
                dataAos="fade-in"
            />
            <div className="container position-relative">
                <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
                    <h2>WELCOME TO MEDILAB</h2>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                </div>
                <div className="content row gy-4">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                            <h3>Why Choose Medilab?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                            <div className="text-center">
                                <Button
                                    href="#about"
                                    className="more-btn text-decoration-none"
                                >
                                    <span>Learn More</span>
                                    <i className="bi bi-chevron-right"></i>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="row gy-4">
                                <IconBox
                                    dadelay="300"
                                    icon={<i className="bi bi-clipboard-data"></i>}
                                    title="Corporis voluptates officia eiusmod"
                                    description="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
                                />

                                <IconBox
                                    dadelay="400"
                                    icon={<i className="bi bi-gem"></i>}
                                    title=""
                                    description=""
                                />

                                <IconBox
                                    dadelay="500"
                                    icon={<i className="bi bi-inboxes"></i>}
                                    title=""
                                    description=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
