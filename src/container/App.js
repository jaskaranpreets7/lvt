import React, { Component} from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import history from '../history';
import { Router , Route} from 'react-router-dom';


class App extends Component {



  render() {
    return (
        <div className="App">
            <Router history={history}>
                <Navbar/>
                <Route path="/" exact component={Main}/>
            </Router>  
        </div>
    );
  }
}

export default App;
