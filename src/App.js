import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import { CircularProgress } from '@mui/material';

const HomePage  = React.lazy(()=>import('./components/homePage'));
const NavBar = React.lazy(()=>import('./components/navBar'));
const LocationPage = React.lazy(()=>import('./components/locationPage'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1><CircularProgress/></h1>}>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              <Route index element={<HomePage location/>}/>
              <Route path='/:locationid' element={<LocationPage/>}/>
            </Route>
          </Routes>
        </Suspense>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
