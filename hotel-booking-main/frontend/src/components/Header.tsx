import React from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { logout } from '../redux/actions/UserActions';
import { Link } from "react-router-dom";
import '../styles/header.css';
import NavBottom from "./TopBottom";


const Header: React.FC = () => {


  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootStateOrAny) => state.userLogin); 

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="navbar-container">
      <Container className="navbar-content">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand-link">
           PM Luxury Gardens
          </Link>
        </div>
        <div className="navbar-toggle">
          {/* Add your toggle content here */}
        </div>
        <div className="navbar-collapse">
        <Nav className="navbar-nav-left">
            <Link to="/" className="nav-link"></Link>
          </Nav>
          <Nav className="navbar-nav-right">
            {userInfo ? (
              <><Image className="avatar" src={userInfo.avatar ? userInfo.avatar : `/uploads/user-default.jpg`} alt="Avatar" /><NavDropdown title={`Welcome, ${userInfo.name}`} id="basic-nav-dropdown">
                <Link to="/bookings/me" className="dropdown-item">My Bookings</Link>
                <Link to="/account/profile" className="dropdown-item">Profile</Link>
                <Link to="/account/password" className="dropdown-item">Password</Link>
                <div className="dropdown-divider" />
                <span className="dropdown-item" onClick={handleLogout}>Logout</span>
              </NavDropdown></>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
              </>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <Link to="/admin/rooms" className="dropdown-item">Rooms</Link>
                <Link to="/admin/bookings" className="dropdown-item">Bookings</Link>
                <Link to="/admin/users" className="dropdown-item">Users</Link>
              </NavDropdown>
            )}
          </Nav>
        </div>
      </Container>
      <NavBottom/>
    </div>
  );
};

export default Header;
