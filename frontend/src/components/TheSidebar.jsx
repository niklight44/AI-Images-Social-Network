import React from "react";
import { Link } from "react-router-dom";

import "../styles/TheSidebar.css";

export const TheSidebar = () => {
    const categories = [
        { icon: '🎨', text: 'Art', link: '/art' },
        { icon: '👗', text: 'Fashion', link: '/fashion' },
        { icon: '🌄', text: 'Landscape', link: '/landscape' },
        { icon: '🐾', text: 'Pet', link: '/pet' },
        { icon: '🍔', text: 'Food', link: '/food' },
        { icon: '🧚', text: 'Fantasy', link: '/fantasy' },
        { icon: '🏛️', text: 'Architecture', link: '/architecture' },
        { icon: '🌟', text: 'Celebrities', link: '/celebrities' },
        { icon: '🌿', text: 'Nature', link: '/nature' },
        { icon: '🎨', text: 'Abstract', link: '/abstract' },
    ];

    return (
        <div className="sidebar">
            <div className="logo">Dreamscape</div>
            <Link to="/" className="sidebar-item">
                🏡   Home
            </Link>
            <Link to="/" className="sidebar-item">
                🔥   Popular
            </Link>

            <div className="sidebar__subheader">Categories</div>

            {categories.map((category, index) => (
                <Link to={category.link} key={index} className="sidebar__category">
                    <div className="sidebar__category-icon">{category.icon}</div>
                    <div className="sidebar__category-text">{category.text}</div>
                </Link>
            ))}
        </div>
    );
};
