// import { Navbar } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import avatar from '../../assets/images/profile-avatar.jpg';
import { IconUser, IconLogout } from '@tabler/icons';
import { OverlayTrigger, Card, Nav, NavItem } from 'react-bootstrap';
import s from './header.module.css'

const Header = () => {
    const navigate = useNavigate();
    const Logout = () => {
        // perfrom logout
        navigate('/login')
    }
    const popoverCard = (
        <Card className={`${s.overlayCard} shadow`}>
            <Nav className={`${s.cardList} d-flex flex-column`}>
                <NavItem>
                    <Link className={s.linkStyle} to='/profile'>
                        <IconUser stroke={1.5} size="1.5rem" /> Profile
                    </Link>
                </NavItem>
                <NavItem className={s.listStyle} onClick={() => Logout()}><IconLogout stroke={1.5} size="1.5rem" /> Logout</NavItem>
            </Nav>
        </Card >
    );
    return (
        <header className={s.headerHeight}>
            <div className={s.mrr35}>
                <div className="d-flex flex-row-reverse">
                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverCard}>
                        <div className={`d-flex ${s.profileSection}`}>
                            <div className={s.profileMargin}>
                                <small>Good Morning</small>
                                <h4>Admin User</h4>
                            </div>
                            <div>
                                <img src={avatar} className={`rounded-circle ${s.avatarSize}`} alt="Avatar" />
                            </div>
                        </div>
                    </OverlayTrigger>
                </div>
            </div>
            {/* </div> */}
        </header>
    )
}

export default Header;