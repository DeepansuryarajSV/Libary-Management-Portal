import {React, useEffect, useState} from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import '../../scss/admindashboard.scss';

function AdminPageNav(props) {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('dash');
    const [adminName, setAdminName] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const name = urlParams.get('name');
        setAdminName(name);
    }, [location.search]);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg px-4 sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" href={window.location.href}>
                        <img src="/logo.png" alt="logo" width="80"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-nav mx-3">
                            <li className="nav-item px-3 rounded-pill mx-3 text-center">
                            <Link to="/AdminDashboard/" className={`nav-link custom-nav-link ${activeItem === 'dash' ? 'active' : ''}`} aria-current="page"  onClick={() => handleItemClick('dash')}>Dashboard</Link>
                            </li>
                            <li className="nav-item px-3 rounded-pill mx-3 text-center">
                            <Link to={`/AdminDashboard/addbooks?name=${adminName}`} className={`nav-link custom-nav-link ${activeItem === 'add' ? 'active' : ''}`} aria-current="page"  onClick={() => handleItemClick('add')}>Add Book</Link>
                            </li>
                            <li className="nav-item px-3 rounded-pill mx-3 text-center">
                            <Link to={`/AdminDashboard/updatebooks?name=${adminName}`} className={`nav-link custom-nav-link ${activeItem === 'update' ? 'active' : ''}`} aria-current="page"  onClick={() => handleItemClick('update')}>Update Book</Link>
                            </li>
                            <li className="nav-item px-3 rounded-pill mx-3 text-center">
                            <Link to={`/AdminDashboard/deletebooks?name=${adminName}`} className={`nav-link custom-nav-link ${activeItem === 'delete' ? 'active' : ''}`} aria-current="page"  onClick={() => handleItemClick('delete')}>Delete Book</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav mx-3">
                            <span className="navbar-text custom-dash-text text-primary">
                                Hello Admin, <span className='text-secondary'>{adminName}</span>
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}

export default AdminPageNav;