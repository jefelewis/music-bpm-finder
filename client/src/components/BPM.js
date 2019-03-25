// Imports: Dependencies
import React, { Component } from 'react';
import { Button } from 'reactstrap';

// Component: BPM
class BPM extends React.Component {
  constructor(props) {
    super(props);
  }

  // Find BPM
  findBPM = () => {
    console.log(`sup g`);
  };


  render() {
    return (
      <div>
        <div id="title-container">
          <h2 id="title-text">BPM Finder</h2>

          <Button outline color="primary" onClick={this.findBPM}>Find BPM</Button>

        </div>
      </div>
    );
  }
}

// Exports
export default BPM;
