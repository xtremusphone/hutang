import React from 'react';
import './App.css';
import './index.css';
import { Button,Icon } from 'semantic-ui-react'
import QrContainer from './component/QRContainer'
import { faStrikethrough } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-container">
          <h1>Hutang</h1>
          <h5>A simple way to <span style={{textDecorationLine: 'line-through'}}>take money</span> manage your borrowing with friends.</h5>
        </div>
        <div className="Body-container">
          <Button style={{ margin: 10 }}  color="green" icon labelPosition='left' size="massive">
            <Icon name="money bill alternate"/>
            Kasi Hutang Lah!
          </Button>
          <Button style={{ margin: 10 }} className="btn-content" color="orange" icon labelPosition='left' size="massive">
            <Icon name="history"/>
            Aiyo Sudah Lupa!
          </Button>
        </div>
        <div className="Bottom-container">
          <h6>
          <Icon name="coffee"/>Developed with love by Amir.
          </h6>
        </div>
        <QrContainer/>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
