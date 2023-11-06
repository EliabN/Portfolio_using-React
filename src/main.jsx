// Import client-side ReactDOM from the react-dom library
import ReactDOM from 'react-dom/client'
// Import main App component
import App from './App'
// Import css styling
import './index.css'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import different pages of application
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


// Accessible routes, and the components responding to URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);


// Render the App component into the root element using createRoot method to 
ReactDOM.createRoot(document.getElementById('root')).render(
  // Render RouterProvider with router pages component into the root element
  <RouterProvider router={router} />
)