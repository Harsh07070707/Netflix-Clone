import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const sunIconUrl = "https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-9.png";
    const moonIconUrl = "data:image/jpeg;base64,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";

    return (
        <nav className="navbar navbar-expand-lg" style={{
            backgroundColor: 'black',
            padding: '10px 20px',
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            alignItems: 'center'
        }}>
            <div className="navbar-container" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%"
            }}>
                <NavLink className="navbar-brand" to="/" style={{
                    color: '#E50914',
                    fontSize: '2.5rem',
                    fontWeight: '400',
                    textDecoration: "none",
                    letterSpacing: "1px",
                    marginRight: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" style={{
                        height: "45px",
                        marginRight: "0.5rem",
                        verticalAlign: "middle",
                    }} />

                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav" style={{
                    display: "flex",
                }}>
                    <ul className="navbar-nav" style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "20px"
                    }}>
                        <li className="nav-item" style={{marginLeft: "25px"}}>
                            <NavLink to="/" className="nav-link" style={{color: 'white', textDecoration: "none", fontWeight:"100"}} activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{marginLeft: "25px"}}>
                             <NavLink to="/favorites" className="nav-link" style={{color: 'white', textDecoration: "none", fontWeight:"100"}} activeClassName="active">
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button className="theme-toggle-button" onClick={toggleTheme} style={{marginLeft: "auto"}}>
                  {theme === 'light' ? (
                      <img src={sunIconUrl} alt="Light Mode" />
                   ) : (
                      <img src={moonIconUrl} alt="Dark Mode" />
                   )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;