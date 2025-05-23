import React, { useState } from 'react';
import Nav from '../../common/header/Nav';
import Logo from '../../elements/logo/Logo';
import MobileMenu from './MobileMenu';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';


const HeaderOne = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    const submenu = this.parentElement.querySelector('.axil-submenu');
                    if (submenu) {
                        submenu.classList.toggle("active");
                    }
                    this.classList.toggle("open");
                };
            }
        }
    }


    return (
        <>
            <header className="header axil-header header-style-1">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/sparkiedo-logo.svg"
                                dimage="/images/sparkiedo-3.svg"
                                simage="/images/sparkiedo-2.svg"
                                />
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    {/* <li className="sidemenu-btn d-lg-block d-none">
                                        <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li> */}
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    {/* <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
            <MobileMenu MobileHandler={MobileMenuHandler}/>
        </>
    )
}

export default HeaderOne;