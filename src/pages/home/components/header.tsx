import Dropdown from "@/components/dropdown";
import { Button } from "react-bootstrap";
const Header = () => {
    return (
        <header id="header" className="header sticky-top">
            {/* Header Topbar */}
            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center">
                            {/* <a href="mailto:contact@example.com">contact@example.com</a> */}
                            <Button
                                title="contact@example.com"
                                href="mailto:contact@example.com"
                            ></Button>
                        </i>
                        <i className="bi bi-phone d-flex align-items-center ms-4">
                            <span>1800 5678</span>
                        </i>
                    </div>
                    {/* <div className="social-links d-none d-md-flex align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                        <a
                            href="#"
                            className="twitter"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a
                            href="#"
                            className="facebook"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="#"
                            className="instagram"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="linkedin"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div> */}
                </div>
            </div>

            {/* Branding */}
            <div className="branding d-flex align-items-center">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <a
                        href="index.html"
                        className="text-decoration-none logo d-flex align-items-center me-auto"
                    >
                        <h1 className="sitename">Medilab</h1>
                    </a>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="text-decoration-none active"
                                >
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-decoration-none"
                                >
                                    Giới thiệu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-decoration-none"
                                >
                                    Dịch vụ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#departments"
                                    className="text-decoration-none"
                                >
                                    Chuyên khoa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#doctors"
                                    className="text-decoration-none"
                                >
                                    Bác sĩ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-decoration-none"
                                >
                                    Liên hệ
                                </a>
                            </li>
                            {/* <Dropdown
                                title="Dropdown"
                                items={[
                                    { href: "#dropdown1", label: "dropdown 1" },
                                    { href: "#dropdown2", label: "dropdown 2" },
                                ]}
                            >

                            </Dropdown>
                            <li>
                                <a
                                    title="Contact"
                                    href="#contact"
                                    className="text-decoration-none"
                                >
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    <a
                        href="#login"
                        className="cta-btn d-none d-sm-block text-decoration-none"
                    >
                        Đăng nhập
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;