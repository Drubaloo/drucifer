
export default function Homepage() {

    const styleSheet = {
        about: {
            border: "2px black solid",
            borderRadius: "25px",
            backgroundColor: "#fca80e",
            width: "50dvw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "2vw"
        }
    }

    return (
        <section style={styleSheet.about}>
            <h1>Who am I?</h1>
            <p>I'm a web developer who loves to longboard, design in 3D, and print my creations. When I'm not cruising down the street and feeling the wind in my hair, I spend my time teaching web development to aspiring developers.
                <br />
                <br />
                I have expertise in a range of programming languages, including HTML, CSS, JavaScript, NodeJS, React, Express, MongoDB, and more. I take pride in crafting user-friendly and responsive web applications that meet the unique needs of each of my clients.
                <br />
                <br />
                Whether I'm flying down the street on my longboard or debugging code, I'm always pushing myself to learn and grow in my field. So if you're looking for a developer who's passionate about what they do, then look no further than yours truly.</p>
        </section>
    )
}