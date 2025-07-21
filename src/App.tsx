// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Sidebar from "./components/Sidebar/Sidebar";
import FileStorage from "./components/FileStorage/FileStorage";
import Albums from "./components/Albums/Albums";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/storage" element={<FileStorage />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/" element={<FileStorage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
