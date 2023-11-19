import './App.css';
import AllRoutes from './routes/AllRoutes';
import { Navbar1 } from './components/HomePage/Navbar1';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <AllRoutes />
    </div>
  );
}

export default App;