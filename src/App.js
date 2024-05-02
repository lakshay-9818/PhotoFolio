// App.js
import React from 'react';
import Navbar from './components/Navbar';
import './global.css';
import MainBody from './MainBody';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage'; // Import the loginPage component

function App() {
  return (
    <Provider store={store}>
       <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainBody />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
