import{HashRouter, Routes, Route} from 'react-router-dom';
import CreateAccount from "./user/signup";
import Login from './user/login';
import Home from './home';
import TopHeader from './user/header';

//inline component

function App() {

  return (
    <HashRouter>
      <TopHeader/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/signup" element={ <CreateAccount/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </HashRouter>
  );
}
  
  

export default App;
