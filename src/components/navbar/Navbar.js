import { NavLink } from "react-router-dom";
import Skullboard from "../skullboard";
function Navbar({ toggle }) {

    return (
        <div className="navBar">

            <figure aria-label="skullboard logo" onClick={() => {toggle()}}>
                <NavLink to="/rebel" className="unclickable">
                    <Skullboard />
                    <figcaption >DON'T CLICK</figcaption>
                </NavLink>
            </figure>

            <ul>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeStyle" : "inactiveStyle"} to="/">
                    <li>Home</li>
                </NavLink>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeStyle" : "inactiveStyle"} to="/drucifer/portfolio">

                    <li>Portfolio</li>

                </NavLink>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeStyle" : "inactiveStyle"} to="/drucifer/contact">

                    <li>Contact</li>

                </NavLink>

            </ul>
            <div className="emptyPosition" />
        </div>
    )
};

export default Navbar;