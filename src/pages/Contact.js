import Envelope from "../components/Envelope"
import InstaCam from "../components/instaCam"
import LinkdIn from "../components/LinkinLogo"

const styleSheet = {
    contact: {
        border: "2px black solid",
        borderRadius: "25px",
        backgroundColor: "#fca80e",
        width: "50dvw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "2vw"
    },
    logoBox: {
        display: "flex",
        justifyContent: "space-around"
    },
    anchor: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "15dvw",
        padding: "0",
        // border: "2px solid red"
    }
    // envelope: {
    //     width: "33dvw"
    // }
}

export default function Contact() {
    return (
        <section style={styleSheet.contact}>
            <h1>Did we just become best friends?</h1>
            <h3>Let's get in touch</h3>
            <div style={styleSheet.logoBox}>

                <a style={styleSheet.anchor} href="mailTo:witeink+inquiry@gmail.com?subject=Site Inquiry" ><Envelope /></a>
                <a style={styleSheet.anchor} href="https://www.linkedin.com/in/dru-sanchez-465696194/"><LinkdIn /></a>
                <a style={styleSheet.anchor} href="https://www.instagram.com/DeviloperDru/"><InstaCam /></a>
            </div>
        </section>
    )
}