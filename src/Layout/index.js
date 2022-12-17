import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Header from './Header';
import Sidebar from './Sidebar';
import s from './layout.module.css'

const Layout = () => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div>
            {/* Sidebar */}
            <Sidebar isMobile={isMobile} setIsMobile={setIsMobile} />

            <div className={s.contentSection}>
                {/* Header */}
                <Header />
                {/* Main Contnt */}
                <Container fluid>
                    {/* Outlet used as a children components */}
                    <main className={s.mainArea}>
                        <Outlet />
                    </main>
                </Container>
            </div>
        </div>
    )
}

export default Layout;