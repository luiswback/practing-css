import React from 'react';
import './app.css';
import Header from "./components/header/header";
import Content from "./components/Content/content";
import FloatingButton from "./components/Floating-button/floating-button";

function App() {
    return (
        <div className="app-container">
            <Header/>
            <Content/>
            <FloatingButton/>
        </div>
    );
}

export default App;
