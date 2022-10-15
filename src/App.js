import{BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard'
import Content from './component/content/Content'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Content/>}></Route>
          <Route  path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App