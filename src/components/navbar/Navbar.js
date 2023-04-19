import { NavLink } from "react-router-dom";
import Skullboard from "../skullboard";
function Navbar() {

    const navbarStyle = {
        display: "flex",
        fontSize: "1.5rem",
        flexWrap: "wrap",
        background: `linear-gradient( rgba(252, 168, 14, 1) 0%, rgba(252, 168, 14, 0.6670869031206232) 75%, rgba(252, 168, 14, 0.1292717770702031) 100%)`,
        width: "100dvw",
        position: "fixed"
      };

    const listStyle = {
        display: "flex",
        width: "50vw",
        justifyContent: "space-evenly",
        alignContent: "center",
        listStyleType: "none",
        alignSelf: "center",
        // marginLeft: "12vw"
    }

    const itemStyle = {
        textDecoration: "none",
        color: "#000000",
    }

    const activeStyle = {
        backgroundColor: "green",
        color: "purple"
    }

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        console.log(pathname);
        return pathname === "/";
    }


    return (
        <div className="navBar" style={navbarStyle}>
            <NavLink to="/">
                <Skullboard />
            </NavLink>
            <ul style={listStyle}>
                <li><NavLink style={itemStyle} isActive={checkActive} to="/drucifer" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink style={itemStyle} to="/drucifer/portfolio" activeStyle={activeStyle}>Portfolio</NavLink></li>
                <li><NavLink style={itemStyle} to="/drucifer/contact" activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
        </div>
    )
};

export default Navbar;