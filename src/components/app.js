import React, { Component } from 'react';
import MadlibForm from './madlib_form'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className = 'backgroundSkew'>

          <div className="madlib-heading" >
            <h1>Bottega Mad Libs</h1>
            <div className="madlib-subheading" >
              <h2>Fill out the fields below and click on the 'generate' button<br /> to see how the story unfolds.</h2>
            </div>
          </div>
          <MadlibForm />
        </div>
      </div>
    );
  }
}
