import React from 'react';
import './App.css';
import './resources/js/title'
import { ParallaxProvider, Parallax } from 'react-skrollr'

function App() {
  return (
    <div className="App">
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
                <div className="caption"
                  data-40p="opacity: 1; transform:translate(0px,0px);"
                  data-70p="opacity: 0; transform:translate(0px,-100%);"
                  data-anchor-target="#helper"
                >




                  <div className="titleContainer">
                    <div className="title">
                      <h1>Dru Sanchez
                        <span
                          className="txt-rotate"
                          data-period="2000"
                          data-rotate='[ " Motivated.", " Determined.", " Enthusiatstic.", " Quick to learn."]'></span>
                      </h1>
                      <h1>▴</h1>
                      <div className="bioContainer">
                        <div className="bio">
                          Who am i
                      </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>


              <div id="slide-2" className="slide">
                <div className="caption"
                  data-130p="opacity: 0; transform:translate(0px,-200%);"
                  data-180p="opacity: 1; transform:translate(0px,0px);"
                  data-250p=""
                  data-280p="opacity: 0; transform:translate(-100px,0px);"
                  data-anchor-target="#helper"
                >
                  <h1>Image 2 Title</h1>
                  <p>Image description goes here.</p>
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
  );
}

export default App;
