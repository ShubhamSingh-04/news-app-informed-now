import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  pageSize = 15;
  country = 'us';
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  
  constructor(){
    super();
    this.state = {
      curState: 'general'
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>

            <Route key = 'general' exact path = '/' element = {<News pageSize={this.pageSize} country={this.country} category={`general`} />} />
            {this.categories.map((category) => {
              return (
                      <Route key={category} exact path={`/${category}`} element={<News pageSize={10} country='us' category={`${category}`} />}
          />         );
            })}


          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
