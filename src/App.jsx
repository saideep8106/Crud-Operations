// App.jsx

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Addelement from "./Addelement"; // Import Addelement
// import Table from "./Table";

// const App = () => {
  
  
//   return (
//     <BrowserRouter>
      

//       <Routes>
//         <Route path="/" element={<Table></Table>}></Route>
//         <Route path="/add" element={<Addelement />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { Component } from 'react'
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// rafce 
// rfc=react function componenet
// rfc= react function componenet
// rfce=reactfunction export componenet
// rcc= reactclasscomponents
// rce= react class export Component
// imr = import React from 'react'

//////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetUsers from './pages/GetUsers';
import AddUsers from './pages/AddUsers';
import UpdateUsers from './pages/UpdateUsers';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GetUsers/>}/>
                <Route path='/add' element={<AddUsers/>}/>
                <Route path='/update/:id' element={<UpdateUsers/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App