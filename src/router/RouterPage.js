import React, { } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {BrowserRouter as Router, Routes, Route, Await} from 'react-router-dom'

import Registro from '../pages/Registro'
import Inicio from '../pages/Inicio'

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </Router>
    </div>
  )
}
