import './App.css';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Review from './component/review/Review';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/dashboard/Dashboard'
import About from './component/about/About'
import NoData from './component/noData/NoData';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NoData></NoData>}></Route>
      </Routes>
    </div>
  );
}

export default App;
