import React from 'react';
import './title'
import { ParallaxProvider, Parallax } from 'react-skrollr'

const upAbove = require("../images/upAbove.png")
const burger = require("../images/bobsBurgers.jpg")
const batmanQuiz = require("../images/trivia.png")
const mealMate = require("../images/meal-mate.png")

function HomePage() {
    return (
        <div className="container">
            <ParallaxProvider>
                <Parallax
                    data={{
                        'data-center-center': 'opacity: 1;',
                        'data-bottom-top': 'opacity: 0;'
                    }}
                >
                    <div id="slides-container">
                        <div id="slides"
                            data-0="transform:translate(0%,0%);"
                            data-150p="transform:translate(0%,-50%);"
                            data-200p=""
                            data-300p="transform:translate(-50%,-50%);"
                            data-350p=""
                            data-450p="transform:translate(-50%,0%);"
                        >
                            <div id="slide-1" className="slide">
                                <div className="captionMain"
                                    data-40p="opacity: 1; transform:translate(0px,0px);"
                                    data-70p="opacity: 0; transform:translate(0px,-100%);"
                                    data-anchor-target="#helper"
                                >
                                    <h1>Dru Sanchez
                                    <span
                                            class="txt-rotate"
                                            data-period="2000"
                                            data-rotate='[ " Motivated", " Determined", " Enthusiastic"]'></span>
                                    </h1>
                                </div>

                                <div className="caption"
                                    data-40p="opacity: 1; transform:translate(0px,0px);"
                                    data-70p="opacity: 0; transform:translate(0px,-100%);"
                                    data-anchor-target="#helper"
                                >
                                    <div className="whatIDo">I build things</div>

                                </div>

                            </div>


                            <div id="slide-2" className="slide">
                                <div className="captionPortfolio"
                                    data-130p="opacity: 0; transform:translate(0px,-200%);"
                                    data-180p="opacity: 1; transform:translate(0px,0px);"
                                    data-250p=""
                                    data-280p="opacity: 0; transform:translate(-100px,0px);"
                                    data-anchor-target="#helper"
                                >
                                    <div className="captionPortfolio"
                                        data-130p="opacity: 0; transform:translate(0px,-200%);"
                                        data-180p="opacity: 1; transform:translate(0px,0px);"
                                        data-250p=""
                                        data-280p="opacity: 0; transform:translate(-100px,0px);"
                                        data-anchor-target="#helper"
                                    >
                                        <a href="https://drubaloo.github.io/Up-Above/" className=""> Up-Above<img src={upAbove}
                                            class="portImg" alt="up above preview" /></a>

                                        <a href="https://bobs-burger-tracker.herokuapp.com/" className=""> Handle Bars Burger<img src={burger}
                                            class="portImg" alt="handlebars project" /></a>


                                    </div>


                                    <div className="captionPortfolio2"
                                        data-130p="opacity: 0; transform:translate(0px,-200%);"
                                        data-180p="opacity: 1; transform:translate(0px,0px);"
                                        data-250p=""
                                        data-280p="opacity: 0; transform:translate(-100px,0px);"
                                        data-anchor-target="#helper"
                                    >

                                        <a href="https://drubaloo.github.io/Up-Above/" className=""> Up-Above<img src={batmanQuiz}
                                            class="portImg" alt="up above preview" />
                                        </a>
                                        <a href="https://drubaloo.github.io/Up-Above/" className=""> Up-Above<img src={mealMate}
                                            class="portImg" alt="up above preview" /></a>


                                        <div className="caption"
                                            data-130p="opacity: 0; transform:translate(0px,-200%);"
                                            data-180p="opacity: 1; transform:translate(0px,0px);"
                                            data-250p=""
                                            data-280p="opacity: 0; transform:translate(-100px,0px);"
                                            data-anchor-target="#helper"
                                        >
                                        </div>
                                    </div>
                                        <h1>Some things I built</h1>
                                        <p>A few select projects that I've been working on</p>
                                </div>
                            </div>
                            <div id="slide-3" className="slide">
                                <div className="caption"
                                    data-250p="opacity: 0; transform:translate(300px,0px);"
                                    data-300p="opacity: 1; transform:translate(0px,0px);"
                                    data-anchor-target="#helper"
                                >
                                    <h1>Image 3 Title</h1>
                                    <p>Image description goes here.</p>
                                </div>
                            </div>
                            <div id="slide-4" className="slide">
                                <div className="caption"
                                    data-430p="opacity: 0;"
                                    data-450p="opacity: 1;"
                                    data-anchor-target="#helper"
                                >
                                    <h1>Image 4 Title</h1>
                                    <p>Image description goes here.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="helper">
                        <div className="marker red"></div>
                        <div className="marker green"></div>
                        <div className="marker blue"></div>
                        <div className="marker yellow"></div>
                    </div>




                </Parallax>
            </ParallaxProvider>


        </div>
    )
}

export default HomePage