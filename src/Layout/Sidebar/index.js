import { useEffect, useState } from "react";
import { Nav, Navbar, NavItem, NavLink, NavDropdown, Collapse } from "react-bootstrap";
import {
    MdDashboard,
    MdShoppingCart,
    MdPeople,
    MdManageAccounts,
    MdNoteAdd,
    MdChat,
    MdBusiness,
    MdOutlineEqualizer,
    MdCampaign
} from 'react-icons/md';
import { IconChevronDown, IconChevronRight } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
// import { IconLayoutDashboard } from '@tabler/icons';
import logo from '../../assets/images/seller-logo-transparent.png'
// import '../layout.css';
import s from './sidebar.module.css'

const Sidebar = ({ setIsMobile, isMobile }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const [active, setActive] = useState(String(pathname))
    // console.log('active------>', active);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    // console.log('open---->', open);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleCollapse = () => {
        setOpen(!open);
    };

    const handleActive = (path) => {
        setActive(path)
        if (path === "/add-product" ||
            path === "/products" ||
            path === "/category") {
            console.log('path....', path);
            setOpen(!open)
        } else {
            setOpen(false)
        }
    }

    useEffect(() => {
        setActive(String(pathname))
        if (String(pathname) === "/add-product" ||
            String(pathname) === "/products" ||
            String(pathname) === "/category") {
            setOpen(!open)
        }
    }, [pathname])

    const returnNav = () => {
        return (
            <>
                {isMobile ? (
                    ""
                ) : (
                    <Nav className={`d-md-block ${s.sidebar}`}>
                        <div className="p-2">
                            <div>
                                <div className="mb-4">
                                    <Link to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/')}
                                        className={active === "/" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to="/"
                                    >
                                        <MdDashboard className={s.setIcon} stroke={1.5} size="1.5rem" /> Dashboard
                                    </NavLink>
                                </NavItem>
                                <NavItem
                                    className="mb-2"
                                    aria-controls="collapseID"
                                    aria-expanded={open}
                                    onClick={() => handleCollapse()}>
                                    <NavLink className={`d-flex justify-content-between ${s.myNavLink}`}>
                                        <div>
                                            <MdBusiness className={s.setIcon} size={24} /> Products
                                        </div>
                                        <div>
                                            {open ? (
                                                <IconChevronDown stroke={1.5} size="1.2rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                            ) : (
                                                <IconChevronRight stroke={1.5} size="1.2rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                                            )}
                                        </div>
                                    </NavLink>
                                    <Collapse in={open} unmountOnExit>
                                        <div className={s.collapseArea} id="collapseID">
                                            <NavItem className="mb-1 mt-2">
                                                <NavLink
                                                    onClick={() => handleActive('/add-product')}
                                                    className={active === "/add-product" ? s.collapseNavLinkActive : s.collapseNavLink}
                                                    as={Link}
                                                    to='/add-product'>
                                                    Add Product
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="mb-1">
                                                <NavLink
                                                    onClick={() => handleActive('/products')}
                                                    className={active === "/products" ? s.collapseNavLinkActive : s.collapseNavLink}
                                                    as={Link}
                                                    to='/products'>
                                                    All Proucts
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="mb-2">
                                                <NavLink
                                                    onClick={() => handleActive('/category')}
                                                    className={active === "/category" ? s.collapseNavLinkActive : s.collapseNavLink}
                                                    as={Link}
                                                    to='/category'>
                                                    Category
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                    </Collapse>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/orders')}
                                        className={active === "/orders" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/orders'>
                                        <MdShoppingCart className={s.setIcon} stroke={1.5} size="1.5rem" /> Orders
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/customers')}
                                        className={active === "/customers" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/customers'
                                    >
                                        <MdPeople className={s.setIcon} stroke={1.5} size="1.5rem" /> Customers
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/marketing')}
                                        className={active === "/marketing" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/marketing'
                                    >
                                        <MdCampaign className={s.setIcon} stroke={1.5} size="1.5rem" /> Marketing
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/analytics')}
                                        className={active === "/analytics" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/analytics'
                                    >
                                        <MdOutlineEqualizer className={s.setIcon} stroke={1.5} size="1.5rem" /> Analytics
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/chat')}
                                        className={active === "/chat" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/chat'
                                    >
                                        <MdChat className={s.setIcon} stroke={1.5} size="1.5rem" /> Chat
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/blogs')}
                                        className={active === "/blogs" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/blogs'
                                    >
                                        <MdNoteAdd className={s.setIcon} stroke={1.5} size="1.5rem" /> Blogs
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mb-2">
                                    <NavLink
                                        onClick={() => handleActive('/settings')}
                                        className={active === "/settings" ? s.myNavLinkActive : s.myNavLink}
                                        as={Link}
                                        to='/settings'
                                    >
                                        <MdManageAccounts className={s.setIcon} stroke={1.5} size="1.5rem" /> Settings
                                    </NavLink>
                                </NavItem>
                            </div>
                        </div>
                    </Nav >
                )}
            </>
        )
    }

    return (
        returnNav()
    )
}

export default Sidebar;