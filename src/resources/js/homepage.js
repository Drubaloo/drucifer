import React from 'react';
import './title'


const upAbove = require("../images/upAbove.png")
const burger = require("../images/bobsBurgers.jpg")
const batmanQuiz = require("../images/trivia.png")
const mealMate = require("../images/meal-mate.png")

function HomePage() {
    return (

        <div className="app">
            <div className="img1">
                

                <div className="container container1">
                    <div className="bar1 row mx-auto ">
                        <h1 className="mx-auto">Dru Sanchez
  <span
                                className="txt-rotate"
                                data-period="2000"
                                data-rotate='[ " Determined.", " Enthusiastic.", " Motiated.", " Developer."]'></span>
                        </h1>

                    </div>


                    <div className="row">
                        <h1 className="profile mx-auto">▼ KEEP GOING ▼ </h1>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row text-center">
                    <h3 className="m-auto p-4">Dru Sanchez</h3>
                    <p>I am a Software Engineer with a history of business leadership, customer satisfaction, and many abilities
                    including HTML, CSS, Javascript, and Python. As a graduate of the UC Davis Coding Bootcamp, I’m
                    currently pushing myself to apply my experience with embracing challenges and providing the best product
                    available. As a business manager I was able to raise profits 15% in 2019 while training and leading a
                    team of employees. As a Software Engineer, I bring excellent communication, time management, and
                    planning skills as an experienced leader. I am prepared to push myself, grow, and build phenomenal
                applications that exceed client expectations.</p>
                </div>
            </div>


            <div className="img2 " id="portfolio">
                <div className="">
                    <div className="container">

                        <div className="bar2 row m-auto col-6">
                            <h1 className=" do2 mx-auto p-3 col-sm-12">WHAT I'VE DONE</h1>
                            <h5 className="do2 mx-auto col-sm-12">I love building things, have a look.</h5>
                        </div>
                        <div className="row mx-auto text-center mt-5">
                            <a href="https://drubaloo.github.io/Up-Above/" className="mx-auto mt-4 mr-2 resize"> Up-Above<img src= {upAbove}
                                className="img-fluid" /></a>

                            <a href="https://drubaloo.github.io/Weather-Dashboard/" className="mx-auto mt-4 resize text-center">Mongoose Burger Tracker<img src= {burger}
                                className="img-fluid" /></a>

                            <a href="https://drubaloo.github.io/Trivia-Quiz/" className="mx-auto mt-4 resize text-center">Batman-Quiz<img src= {batmanQuiz} className="img-fluid" /></a>

                            <a href="https://meal-mate-1.herokuapp.com/" className="mx-auto mt-4 resize text-center">Meal Mate<img src= {mealMate} className="img-fluid" /></a>
                        </div>


                    </div>
                </div>

            </div>
            <div className="container mt-3">
                <div className="row text-center">
                    <h3 className="mx-auto p-4">I love being challenged!</h3>
                    <p>Every challenge is a new opprotunity to improve upon myself and put everything I've learned to the test,
                while at the same time teaching myself new skills! </p>
                </div>
            </div>

            <div className="img3" id="contact">

                <div className="bar3 row m-auto col-6">
                    <h1 className=" do3 mx-auto p-3">Get in touch with me!</h1>
                </div>
                <div className="container contact-overlay">
                    <form className="text-center">
                        <div className="form-group m-2">
                            <label htmlFor="Name">Name</label>
                            <input type="text" className="form-control" placeholder="Barry Allen" />
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="email address">Email</label>
                            <input type="text" className="form-control" placeholder="2Fast4U@gmail.com" />
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="Message">Message</label>
                            <input type="text" className="form-control text-center" style={{ height: "20rem" }}
                                placeholder="Write me something sweet" />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary portBtn">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage