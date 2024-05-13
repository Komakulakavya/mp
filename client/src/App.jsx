import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Array from './Array';
import Searching from './Searching';
import Sorting from './Sorting';
import Stackandqueues from './Stackandqueues';
import LinkedList from './Linkedlist';
import Trees from './Trees';
import Graphs from './Graphs';
import Quiza from './Quiza';
import Quizsearching from './Quizsearching';
import Quizsorting from './Quizsorting';
import Quizstackandqueues from './Quizstackandqueues';
import Quizlinkedlist from './Quizlinkedlist';
import Quizgraphs from './Quizgraphs';
import Quiztrees from './Quiztrees';
import Mhome from './mhome';
import Header from './header';
function App() {

  return (
   <BrowserRouter>
     <Routes>
      <Route path='/register' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/array' element={<Array />}></Route>
      <Route path='/searching' element={<Searching />}></Route>
      <Route path='/sorting' element={<Sorting />}></Route>
      <Route path='/stackandqueues' element={<Stackandqueues />}></Route>
      <Route path='/linkedlist' element={<LinkedList />}></Route>
      <Route path='/trees' element={<Trees />}></Route>
      <Route path='/graphs' element={<Graphs />}></Route>
      <Route path='/quiza' element={<Quiza />}></Route>
      <Route path='/quizsearching' element={<Quizsearching />}></Route>
      <Route path='/quizsorting' element={<Quizsorting />}></Route>
      <Route path='/quizstackandqueues' element={<Quizstackandqueues />}></Route>
      <Route path='/quizlinkedlist' element={<Quizlinkedlist />}></Route>
      <Route path='/quizgraphs' element={<Quizgraphs />}></Route>
      <Route path='/quiztrees' element={<Quiztrees />}></Route>
      <Route path='/' element={<Mhome />}></Route>
      <Route path='/header' element={<Header />}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
