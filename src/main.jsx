import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Error from './components/Error/Error';
import ViewDetails from './components/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('featuresJob.json')
      },
      {
        path: '/job/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('featuresJob.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('marks.json')
      },
      {
        path: '/job',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
