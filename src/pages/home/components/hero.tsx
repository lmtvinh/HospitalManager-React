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
                    <h2>Luôn luôn lắng nghe và thấu hiểu</h2>
                    <p>NETHos tự hào là bệnh viện mang lại dịch vụ y tế bậc nhất</p>
                </div>
                <div className="content row gy-4">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                            <h3>Đặt lịch</h3>
                            <p>"Đặt lịch hẹn khám trước để được chọn bác sĩ và dịch vụ phù hợp, nhanh chóng"</p>
                            <div className="text-center">
                                <Button
                                    href="#appointment"
                                    className="more-btn text-decoration-none"
                                >
                                    <span>Đặt lịch khám</span>
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
                                    title="Không ngừng phát triển"
                                    description="Nỗ lực, bước vững trong lĩnh vực y tế"
                                />

                                <IconBox
                                    dadelay="400"
                                    icon={<i className="bi bi-gem"></i>}
                                    title="Chất lượng y tế"
                                    description="Đạt chuẩn y khoa, luôn mang đến những dịch vụ cải tiến"
                                />

                                <IconBox
                                    dadelay="500"
                                    icon={<i className="bi bi-inboxes"></i>}
                                    title="Bảo mật thông tin"
                                    description="Thận trọng trong bảo mật thông tin cá nhân của bệnh nhân"
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
