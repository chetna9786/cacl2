import React from "react"
import Home from './component/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const App = (props) =>{
  let name='Garima Tomar'
  let address='Gwalior'
  return(
   <Router>
    <Routes>
      <Route  path='/home' element={<Home/>}> </Route>
    </Routes>
   </Router>
  )
}
export default App