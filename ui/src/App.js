
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Home,Feed,Dashboard,Create } from './pages';

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/employer" >
       <Route path="employer/dashboard" element={<Dashboard/>}/>
       <Route path="employee/create" element={<Create/>}/>
       <Route path="employee/feed" element={<Feed/>}/>
       </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
