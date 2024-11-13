import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 0.5rem;
`;

const Header = styled.div`
    position: relative;
    margin-bottom: 2rem;
    text-align: center;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
`;

const TabContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
`;

const Tab = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    padding: 0.5rem 0;
    font-weight: ${(props) => (props.active ? '600' : 'normal')};
    color: ${(props) => (props.active ? '#3b82f6' : '#6b7280')};
    border-bottom: ${(props) => (props.active ? '2px solid #3b82f6' : 'none')};
    cursor: pointer;
`;

const SocialLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

const SocialButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #f3f4f6;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

interface Props {
    show: boolean;
    onHide: () => void;
}

export default function LoginModal({ show, onHide }: Props) {
    const [activeTab, setActiveTab] = React.useState<'login' | 'register'>('login');
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Body className="home">
                <Container>
                    <Header>
                        <img src="https://placewaifu.com/image/150/40" alt="hellobacsi" width={150} height={40} />
                        <CloseButton aria-label="Close">X</CloseButton>
                    </Header>

                    <TabContainer>
                        <Tab active={activeTab === 'login'} onClick={() => setActiveTab('login')}>
                            Đăng nhập
                        </Tab>
                        <Tab active={activeTab === 'register'} onClick={() => setActiveTab('register')}>
                            Tạo tài khoản
                        </Tab>
                    </TabContainer>

                    <p
                        css={css`
                            color: #6b7280;
                            margin-bottom: 1rem;
                        `}
                    >
                        Dùng số điện thoại, email, hoặc phương thức khác để đăng nhập hoặc đăng kí.
                    </p>

                    <div
                        css={css`
                            display: flex;
                            margin-bottom: 1rem;
                        `}
                    >
                        <Form.Control type="phone" placeholder="Số điện thoại" />
                    </div>

                    <Button
                        css={css`
                            width: 100%;
                        `}
                        className='cta-btn d-none d-sm-block text-decoration-none'
                    >
                        Tiếp tục
                    </Button>

                    <div
                        css={css`
                            text-align: center;
                            margin-top: 1rem;
                        `}
                    >
                        <p
                            css={css`
                                color: #6b7280;
                            `}
                        >
                            Hoặc tiếp tục bằng
                        </p>
                        <SocialLoginContainer>
                            <SocialButton>
                                <img src="https://placewaifu.com/image/24/24" alt="Google" width={24} height={24} />
                                Google
                            </SocialButton>
                            <SocialButton>
                                <img src="https://placewaifu.com/image/24/24" alt="Facebook" width={24} height={24} />
                                Facebook
                            </SocialButton>
                            <SocialButton>
                                <img src="https://placewaifu.com/image/24/24" alt="Email" width={24} height={24} />
                                Email
                            </SocialButton>
                        </SocialLoginContainer>
                    </div>

                    <p
                        css={css`
                            font-size: 0.875rem;
                            color: #6b7280;
                            margin-top: 1.5rem;
                            padding-top: 1rem;
                        `}
                    >
                        Bằng cách đăng ký, tôi xác nhận rằng mình đã đọc, hiểu và đồng ý với{' '}
                        <a
                            href="#"
                            css={css`
                                color: #3b82f6;
                            `}
                        >
                            Chính sách bảo mật
                        </a>{' '}
                        và{' '}
                        <a
                            href="#"
                            css={css`
                                color: #3b82f6;
                            `}
                        >
                            Điều khoản sử dụng
                        </a>{' '}
                        của Hellobacsi.
                    </p>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
