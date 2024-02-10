import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: '',
//         element: <Header/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       }
//     ],
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      {/* <Route path='' element={<Header/>}/> iska route nahi denge tab bhi chalega kyuki header layout.jsx folder me included hai*/}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />

    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
