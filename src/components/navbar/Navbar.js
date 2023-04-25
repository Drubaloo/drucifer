import { NavLink } from "react-router-dom";
import Skullboard from "../skullboard";
function Navbar({ toggle }) {

    const navbarStyle = {
        display: "flex",
        fontSize: "1.5rem",
        // flexWrap: "wrap",
        background: `linear-gradient( rgba(252, 168, 14, 1) 0%, rgba(252, 168, 14, 0.6670869031206232) 75%, rgba(252, 168, 14, 0.1292717770702031) 100%)`,
        width: "100dvw",
        position: "fixed"
    };

    const listStyle = {
        display: "flex",
        width: "50vw",
        justifyContent: "space-around",
        alignContent: "center",
        listStyleType: "none",
        alignSelf: "center",
        padding: 0
        // marginLeft: "12vw"
    }

    const itemStyle = {
        textDecoration: "none",
        color: "#000000",
        width: "33%"
    }

    const activeStyle = {
        backgroundColor: "#7262d4",
        textDecoration: "none",
        width: "33%",
        color: "#fca80e"
    }

    const listItems = {
        textAlign: "center"
    }



    return (
        <div className="navBar" style={navbarStyle}>

            <NavLink to="/">

                <Skullboard />

            </NavLink>

            <ul style={listStyle}>

                <NavLink style={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : itemStyle} to="/">
                    <li style={listItems}>Home</li>
                </NavLink>

                <NavLink style={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : itemStyle} to="/drucifer/portfolio">

                    <li style={listItems}>Portfolio</li>

                </NavLink>

                <NavLink style={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : itemStyle} to="/drucifer/contact">

                    <li style={listItems}>Contact</li>

                </NavLink>

            </ul>

        </div>
    )
};

export default Navbar;