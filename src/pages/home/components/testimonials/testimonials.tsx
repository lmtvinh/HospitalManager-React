import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import './main.css';
import TestimonialItem from './testimonialItem';
import testimonial1 from '@/assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '@/assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '@/assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '@/assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '@/assets/img/testimonials/testimonials-5.jpg';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
                        <h3>Testimonials</h3>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>

                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            loop={true}
                            speed={600}
                            autoplay={{ delay: 3000 }}
                            slidesPerView="auto"
                            pagination={{ clickable: true }}
                            className="swiper-wrapper"
                        >
                            <SwiperSlide>
                                <TestimonialItem
                                    src={testimonial1}
                                    name="Saul Goodman"
                                    position="CEO & Founder"
                                    stars={5}
                                    description="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialItem
                                    src={testimonial2}
                                    name="Sara Wilsson"
                                    position="Designer"
                                    stars={5}
                                    description="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialItem
                                    src={testimonial3}
                                    name="Jena Karlis"
                                    position="Store Owner"
                                    stars={5}
                                    description="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialItem
                                    src={testimonial4}
                                    name="Matt Brandon"
                                    position="Freelancer"
                                    stars={5}
                                    description="Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialItem
                                    src={testimonial5}
                                    name="John Larson"
                                    position="Entrepreneur"
                                    stars={5}
                                    description="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
