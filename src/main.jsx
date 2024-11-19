import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import SidebarStyle from './components/SidebarComponent/SidebarStyle.jsx';
import { Explorer } from './pages/index.js';



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<SidebarStyle heading='Explorer' children={<Explorer />}/>}/>
      <Route path='search'/>
      <Route path='chatbot'/>
      <Route path='other'/>
    </Route>
  ),
  
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
