import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Dashboard from './pages/dashboard'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          {/* <Route path='/login' element={login}></Route> */}
          <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
