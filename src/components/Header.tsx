import {Routes, Route, Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CSS from 'csstype';


export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const navigationStyle: CSS.Properties = {
        width: "100%",
        textAlign: "center",
        padding: "0.5rem 0rem",
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "0 2px 2px 2px rgba(9, 9, 9, 0.23)"
    };

    const navigationMenuStyle: CSS.Properties = {
        width: "100%",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        padding: "0.5rem 0rem",
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "0 2px 2px 2px rgba(9, 9, 9, 0.23)"
    };

    const navMenuButtonStyle: CSS.Properties = {
        position: "absolute",
        right: "5px",
        // border: "1px solid",
        borderRadius: "5px",
        padding: "3px"
    }

    const navMenuLink: CSS.Properties = {
        listStyleType: "none",
        textAlign: "center"
    }

    const onClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <nav style={navigationStyle}>
                <Link to="/" className="">Catan Logger</Link>
                <button
                    style={navMenuButtonStyle} 
                    onClick={onClick}
                >
                    <FontAwesomeIcon 
                        icon={["fas", "bars"]} 
                        size="lg" 
                    />
                </button>
                
                
            </nav>
            {showMenu && 
            <div style={navigationMenuStyle}>
                <div>
                    <Link to="/login" className="nav-item">Login</Link> 
                </div>
            </div>
            }
        </>
    );
}