import React from 'react'
import Home from './Home';
import {Route, Routes} from "react-router-dom";
import ChatPage from './components/pages/ChatPage';


const App = () => {

  return (
    <div>
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/chats' Component={ChatPage}></Route>
        </Routes>
     
    </div>
  )
}

export default App
