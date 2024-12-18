import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import SidebarStyle from './components/SidebarComponent/SidebarStyle.jsx';
import { loadRepos } from './pages/Search/Search.jsx';
import {Surprise, LlamaChat, Explorer, Search} from './pages/index.js';



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<SidebarStyle heading='Explorer' children={<Explorer />}/>}/>
      <Route path='search' element={<SidebarStyle heading='My Repositories' children={<Search />} />} loader={loadRepos} />
      <Route path='chatbot' element={<SidebarStyle heading='Llama Chatbot' children={<LlamaChat/ >} />}/>
      <Route path='other' element={<SidebarStyle heading='Surprise' children={<Surprise/ >} />}/>
    </Route>
  ),
  
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
