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
            Some content or Component
      <div className="img1">
        <div className="container1">
          <div className="title">
            <h1>Dru Sanchez
  <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ " Motivated.", " Determined.", " Enthusiatstic.", " Quick to learn."]'></span>
            </h1>
          </div>
some test
        </div>

      </div>


                </Parallax>
              </ParallaxProvider>


    </div>
  );
}

export default App;
