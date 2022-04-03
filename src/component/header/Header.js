import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let activeStyle = {
        color: 'cyan'
    };
    return (
        <div>
            <nav className='flex justify-center py-5 font-semibold bg-cyan-400 text-cyan-900'>
                <NavLink className={'mx-5'}
                    to="home"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>
                <NavLink className={'mx-5'}
                    to="review"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Review
                </NavLink>
                <NavLink className={'mx-5'}
                    to="blogs"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Blogs
                </NavLink>
                <NavLink className={'mx-5'}
                    to="dashboard"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink className={'mx-5'}
                    to="about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    About
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;