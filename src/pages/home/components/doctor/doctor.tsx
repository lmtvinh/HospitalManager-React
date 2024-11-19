import React from 'react';
import TeamMember from './teammember';
import doctor1 from '@/assets/img/doctors/doctors-1.jpg';
import doctor2 from '@/assets/img/doctors/doctors-2.jpg';
import doctor3 from '@/assets/img/doctors/doctors-3.jpg';
import doctor4 from '@/assets/img/doctors/doctors-4.jpg';

interface SocialLinks {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
}

const Doctor: React.FC = () => {
    return (
        <section id="doctors" className="doctors section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Doctors</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <TeamMember
                        delay="100"
                        img={doctor1}
                        name="Name Doctor 1"
                        position="Chief Medical Officer"
                        description="Explicabo voluptatem mollitia et repellat qui dolorum quasi"
                        socialinks={{
                            twitter: "https://x.com/realmadrid",
                            facebook: "https://web.facebook.com/RealMadrid",
                            instagram: "https://www.instagram.com/realmadrid/",
                            linkedin: "https://www.linkedin.com/company/realmadrid"
                        }}
                    />

                    <TeamMember
                        delay="200"
                        img={doctor2}
                        name="Name Doctor 2"
                        position="Anesthesiologist"
                        description="Explicabo voluptatem mollitia et repellat qui dolorum quasi"
                        socialinks={{
                            twitter: "https://x.com/realmadrid",
                            facebook: "https://web.facebook.com/RealMadrid",
                            instagram: "https://www.instagram.com/realmadrid/",
                            linkedin: "https://www.linkedin.com/company/realmadrid"
                        }}
                    />

                    <TeamMember
                        delay="300"
                        img={doctor3}
                        name="Name Doctor 3"
                        position="Cardiology"
                        description="Explicabo voluptatem mollitia et repellat qui dolorum quasi"
                        socialinks={{
                            twitter: "https://x.com/realmadrid",
                            facebook: "https://web.facebook.com/RealMadrid",
                            instagram: "https://www.instagram.com/realmadrid/",
                            linkedin: "https://www.linkedin.com/company/realmadrid"
                        }}
                    />

                    <TeamMember
                        delay="400"
                        img={doctor4}
                        name="Name Doctor 4"
                        position="Neurosurgeon"
                        description="Explicabo voluptatem mollitia et repellat qui dolorum quasi"
                        socialinks={{
                            twitter: "https://x.com/realmadrid",
                            facebook: "https://web.facebook.com/RealMadrid",
                            instagram: "https://www.instagram.com/realmadrid/",
                            linkedin: "https://www.linkedin.com/company/realmadrid"
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Doctor;
