// src/components/About.tsx
import React from "react";
import { faVialCircleCheck, faPumpMedical, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Button from "@/components/button";
import Image from "@/components/image";
import backgroundImg from "../../../assets/img/about.jpg";
import IconList from "@/components/iconlist";

const About: React.FC = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="row gy-4 gx-5">
                    <div
                        className="col-lg-6 position-relative align-self-start"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Image src={backgroundImg} className="img-fluid" alt=""/>
                        <Button
                            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                            className="glightbox pulsating-play-btn"
                        />
                    </div>
                    <div
                        className="col-lg-6 content"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3>About Us</h3>
                        <p>
                            Dolor iure expedita id fuga asperiores qui sunt consequatur
                            minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
                            magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
                            reiciendis veritatis asperiores placeat.
                        </p>
                        <ul>
                            <IconList
                                icon={faVialCircleCheck}
                                title="Ullamco laboris nisi ut aliquip consequat"
                                description="Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade"
                            />
                            <IconList
                                icon={faPumpMedical}
                                title="Ullamco laboris nisi ut aliquip consequat"
                                description="Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade"
                            />
                            <IconList
                                icon={faHeartCircleXmark}
                                title="Ullamco laboris nisi ut aliquip consequat"
                                description="Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
