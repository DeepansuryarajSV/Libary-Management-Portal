import React, { useEffect, useRef, useState,Link } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import '../scss/home.scss';
import { NavLink, useNavigate, useHistory} from 'react-router-dom';


function Home(props) {
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (item) => {
        if(item == 'Adminlogin' || item == 'Userlogin'){
            // const url = `/login?value=${item}`;
            // navigate(url);
        }
        else{
            setActiveItem(item);
        }
        
        
    };
    

    const navbarRef = useRef(null);
    const fillDivRef = useRef(null);
    
    const adjustFillDivHeight = () => {
      const navbar = navbarRef.current;
      const fillDiv = fillDivRef.current;
      const navbarHeight = navbar.offsetHeight;
      fillDiv.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    };

    const adjustOffset = () => {
        const navbarHeight = navbarRef.current?.offsetHeight || 0;
        return -navbarHeight;
      };
    
    useEffect(() => {
      adjustFillDivHeight(); // Call the function on initial load
    
      const handleResize = () => {
        adjustFillDivHeight(); // Call the function on screen resize
      };
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className='home-main-container'>
            <nav ref={navbarRef} className="navbar navbar-expand-lg px-4 sticky-top">
                <div className="container-fluid ">
                    <a className="navbar-brand" href={window.location.href}>
                    <img src="/logo.png" alt="logo" width="80"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav">
                        <li className="nav-item px-3 rounded-pill mx-3 text-center">
                            <ScrollLink to="home-page" smooth={false} duration={1000} offset={adjustOffset()}>
                                <a as={Link} className={`nav-link custom-nav-link ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
                                Home
                                </a>
                            </ScrollLink>
                        </li>
                        <li className="nav-item px-3 rounded-pill mx-3 text-center">
                        <ScrollLink to="about-page" smooth={false} duration={1000} offset={0}>
                            <a as={Link} className={`nav-link custom-nav-link ${activeItem === 'about' ? 'active' : ''}`}  onClick={() => handleItemClick('about')}>
                            About
                            </a>
                        </ScrollLink>
                        </li>
                        <li className="nav-item px-3 rounded-pill mx-3 text-center">
                        <NavLink as="Link"  to="/login?value=Admin" className={`nav-link custom-nav-link ${activeItem === 'Adminlogin' ? 'active' : ''}`} onClick={() => handleItemClick('Adminlogin')}>
                        Admin Login
                        </NavLink>
                        </li>
                        <li className="nav-item px-3 rounded-pill mx-3 text-center">
                        <NavLink as="Link" to="/login?value=User" className= "nav-link custom-nav-link" onClick={() => handleItemClick('Userlogin')}>
                        User Login
                        </NavLink>
                        </li>
                    </ul>

    
                    </div>
                </div>
            </nav>

            <div ref={fillDivRef} className='container-fluid home-body' id='home-page'>
                <div className="greet-text-container ms-4 position-absolute top-50 translate-middle-y">
                    <h1 className='fw-bold text-primary'>Welcome <span className='text-secondary'>Folks</span></h1>
                    <p>Vision Library is powerful Library Management tool that enables faster access to the resources.</p> <br />
                </div>
            </div>

            {/* about page*/}

            <div className="about-container container-fluid" id='about-page'>
            <div className="about-text-container container-md ms-2 w-50">
                    <h1 className='fw-bold text-primary'>About <span className='text-secondary'>Us</span></h1><br />
                    <p className='about-details'>Elevate your library experience with Vision Library, the ultimate solution for efficient and effective resource management. Seamlessly organize and categorize your extensive collections, enabling lightning-fast access to books, journals, and multimedia materials.Empower your patrons with a user-friendly interface that simplifies searches and accelerates information retrieval. With advanced features such as customizable tagging, insightful analytics, and seamless integration, Vision Library transforms the way libraries operate. Stay ahead of the curve and provide unparalleled service with this powerful tool, revolutionizing the management of knowledge in the digital age.</p> <br />
                </div>
            </div>
            
        </div>
    );
}

export default Home;