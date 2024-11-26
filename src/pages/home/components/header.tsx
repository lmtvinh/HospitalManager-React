import { Button } from "react-bootstrap";
import { useBoolean } from "usehooks-ts";
import AuthModal from "./auth-modal";
import UserMenu from "./usermenu";
const Header = () => {
    const { toggle, value } = useBoolean(false);
    
    return (
        <header id="header" className="header sticky-top">
            <AuthModal onHide={toggle} show={value} />
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
                        </ul>
                    </nav>
                    <Button
                        onClick={toggle}
                        className="cta-btn d-none d-sm-block text-decoration-none"
                    >
                        Đăng nhập
                    </Button>
                    <UserMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;