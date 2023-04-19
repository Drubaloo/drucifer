import React from "react"


function Project(props) {
    return (
        <div>
            <div>
                <div>

                    <div>
                        <h1>WHAT I'VE DONE</h1>
                        <h5>I love building things, have a look.</h5>
                    </div>
                    <div>

                        {props.children}

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Project