import './App.css';
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import TweetGenerator from './components/TweetGenerator/TweetGenerator';
import TweetTagsGenerator from './components/TweetTagsGenerator/TweetTagsGenerator';
import ThreadGenerator from './components/ThreadGenerator/ThreadGenerator';

function App() {

  return (


    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/generate-tweets" exact element={<TweetGenerator />} />
          <Route path="/generate-threads" exact element={<ThreadGenerator />} />
          <Route path="/generate-tags" exact element={<TweetTagsGenerator />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
