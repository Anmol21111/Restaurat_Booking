import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Book_a_table from './pages/Book_a_table';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Menu/>} path='/menu'/>
        <Route element={<Blog/>} path='/blog'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<Book_a_table/>} path='/book-a-table'/>
        <Route element={<Layout/>} path='/layout'/>
   

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
