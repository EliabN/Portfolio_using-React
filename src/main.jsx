// Import client-side ReactDOM from the react-dom library
import ReactDOM from 'react-dom/client'
// Import main App component
import App from './App.jsx'
// Import css styling
import './index.css'

// Render the App component into the root element using createRoot method to 
ReactDOM.createRoot(document.getElementById('root')).render(
  // Render App component into the root element
  <App />
)
