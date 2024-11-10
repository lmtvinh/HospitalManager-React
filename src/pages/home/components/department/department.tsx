import React, { useState } from 'react';
import './Department.css';
import Button from '@/components/button';
import DepartmentDetail from './departmentitem';
import departmentImage1 from '../../../assets/img/departments-1.jpg';
import departmentImage2 from '../../../assets/img/departments-2.jpg';
import departmentImage3 from '../../../assets/img/departments-3.jpg';
import departmentImage4 from '../../../assets/img/departments-4.jpg';
import departmentImage5 from '../../../assets/img/departments-5.jpg';

const Department: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("departments-tab-1");

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <section id="departments" className="departments section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Departments</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            {[
                                { id: "departments-tab-1", label: "Cardiology" },
                                { id: "departments-tab-2", label: "Neurology" },
                                { id: "departments-tab-3", label: "Hepatology" },
                                { id: "departments-tab-4", label: "Pediatrics" },
                                { id: "departments-tab-5", label: "Eye Care" }
                            ].map(tab => (
                                <li key={tab.id} className="nav-item mw-100">
                                    <Button
                                        className={`nav-link col-12 text-start ${activeTab === tab.id ? "active show" : ""}`}
                                        data-bs-toggle="tab"
                                        onClick={() => handleTabClick(tab.id)}
                                    >
                                        {tab.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            <DepartmentDetail
                                id="departments-tab-1"
                                classname={activeTab === "departments-tab-1" ? "col-12 text-start active show" : ""}
                                title="Cardiology"
                                description="Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka"
                                detail="Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal"
                                image={departmentImage1}
                            />
                            <DepartmentDetail
                                id="departments-tab-2"
                                classname={activeTab === "departments-tab-2" ? "col-12 text-start active show" : ""}
                                title="Neurology"
                                description="Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka"
                                detail="Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal"
                                image={departmentImage2}
                            />
                            <DepartmentDetail
                                id="departments-tab-3"
                                classname={activeTab === "departments-tab-3" ? "col-12 text-start active show" : ""}
                                title="Hepatology"
                                description="Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut"
                                detail="Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae"
                                image={departmentImage3}
                            />
                            <DepartmentDetail
                                id="departments-tab-4"
                                classname={activeTab === "departments-tab-4" ? "col-12 text-start active show" : ""}
                                title="Pediatrics"
                                description="Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus"
                                detail="Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore"
                                image={departmentImage4}
                            />
                            <DepartmentDetail
                                id="departments-tab-5"
                                classname={activeTab === "departments-tab-5" ? "col-12 text-start active show" : ""}
                                title="Eye Care"
                                description="Omnis blanditiis saepe eos autem qui sunt debitis porro quia."
                                detail="Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel"
                                image={departmentImage5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Department;
