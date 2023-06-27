import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
import '../styles/App.scss'

import { fetchTransactions } from '../app state/tranSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTransactions())
  }, [dispatch])

  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

