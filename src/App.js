import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavbarLinks from './Pages/NavbarLinks'
import Footer from './Components/Footer'
import Routes from './Pages/Routes';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarLinks />
                <Routes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
