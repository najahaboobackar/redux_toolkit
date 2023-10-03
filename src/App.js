import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import {createBrowserRouter,createRoutesFromElement,Route,RouterProvider} from 'react-router-dom';

function App() {
  const router=createBrowserRouter(createRoutesFromElement(
    <Route>
      <Route></Route>
    </Route>
  ))
  return (
    <div className="App">
      <Product/>
    </div>
  );
}

export default App;
