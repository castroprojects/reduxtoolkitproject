import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import PaymentPage from './components/Payment.jsx'
import ItemsBar from './components/itemsBar.jsx'
import ImageOption from './components/ImageOption.jsx'
import App from './App.jsx'
import { getTotals } from './features/todo/todoSlice.js'

store.dispatch(getTotals())

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path='payment' element={<PaymentPage/>}/>
    <Route path='' element={<ImageOption/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
