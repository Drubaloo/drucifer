import Envelope from "../components/Envelope"
import InstaCam from "../components/instaCam"
import LinkdIn from "../components/LinkinLogo"


export default function Contact() {
    return (
        <section className="contact">
            <h1>Did we just become best friends?</h1>
            <h3>Let's get in touch</h3>
            <div className="logoBox">

                <a href="mailTo:witeink+inquiry@gmail.com?subject=Site Inquiry" ><Envelope /></a>
                <a href="https://www.linkedin.com/in/dru-sanchez-465696194/"><LinkdIn /></a>
                <a href="https://www.instagram.com/DeviloperDru/"><InstaCam /></a>
            </div>
        </section>
    )
}