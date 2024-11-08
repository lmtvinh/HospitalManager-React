// src/components/Services.tsx
import React from 'react';
import { faDna, faHeartPulse, faHospitalUser, faNotesMedical, faPills, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import ServiceItem from './serviceitem';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Services: React.FC = () => {
    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur...</p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <ServiceItem
                        icon={faHeartPulse as IconDefinition}
                        title="Nesciunt Mete"
                        description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
                    />
                    <ServiceItem
                        icon={faPills as IconDefinition}
                        title="Eosle Commodi"
                        description="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
                    />
                    <ServiceItem
                        icon={faHospitalUser as IconDefinition}
                        title="Ledo Markt"
                        description="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
                    />
                    <ServiceItem
                        icon={faDna as IconDefinition}
                        title="Asperiores Commodit"
                        description="Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
                    />
                    <ServiceItem
                        icon={faWheelchair as IconDefinition}
                        title="Velit Doloremque"
                        description="Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore."
                    />
                    <ServiceItem
                        icon={faNotesMedical as IconDefinition}
                        title="Dolori Architecto"
                        description="Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
