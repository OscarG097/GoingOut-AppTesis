import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoingOutApp } from './GoingOutApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoingOutApp />
  </BrowserRouter>
)
