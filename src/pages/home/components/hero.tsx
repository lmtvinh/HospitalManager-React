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
<<<<<<< HEAD
                            <h3>Tại sao nên chọn NETHos?</h3>
                            <p>"NETHos – Tận tâm, Chuyên nghiệp, Hiện đại."</p>
=======
                            <h3>Đặt lịch</h3>
                            <p>"Đặt lịch hẹn khám trước để được chọn bác sĩ và dịch vụ phù hợp, nhanh chóng"</p>
>>>>>>> 37c101b4fe46f6722dc996cf928f7e43faee9743
                            <div className="text-center">
                                <Button
                                    href="#appointment"
                                    className="more-btn text-decoration-none"
                                >
<<<<<<< HEAD
                                    <span>Đặt lịch ngay</span>
=======
                                    <span>Đặt lịch khám</span>
>>>>>>> 37c101b4fe46f6722dc996cf928f7e43faee9743
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
<<<<<<< HEAD
                                    title="Tận tâm"
                                    description="Luôn luôn nhiệt tình chăm sóc, hỗ trợ tất cả mọi người khi đến với NETHos"
=======
                                    title="Không ngừng phát triển"
                                    description="Nỗ lực, bước vững trong lĩnh vực y tế"
>>>>>>> 37c101b4fe46f6722dc996cf928f7e43faee9743
                                />

                                <IconBox
                                    dadelay="400"
                                    icon={<i className="bi bi-gem"></i>}
<<<<<<< HEAD
                                    title="Chuyên nghiệp"
                                    description="Đội ngũ y bác sĩ đạt tiêu chuẩn hàng đầu."
=======
                                    title="Chất lượng y tế"
                                    description="Đạt chuẩn y khoa, luôn mang đến những dịch vụ cải tiến"
>>>>>>> 37c101b4fe46f6722dc996cf928f7e43faee9743
                                />

                                <IconBox
                                    dadelay="500"
                                    icon={<i className="bi bi-inboxes"></i>}
<<<<<<< HEAD
                                    title="Hiện đại"
                                    description="Các công nghệ, kiến thức và chuyên môn của bác sĩ luôn được cập nhật."
=======
                                    title="Bảo mật thông tin"
                                    description="Thận trọng trong bảo mật thông tin cá nhân của bệnh nhân"
>>>>>>> 37c101b4fe46f6722dc996cf928f7e43faee9743
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
