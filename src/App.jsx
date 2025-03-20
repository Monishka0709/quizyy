
import Quiz from './components/Quiz'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login'
import './App.css'
import QuizList from './components/QuizList';


function App() {
  
  

  return (
    <div className='app--container'>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route path='/quizes' element={<QuizList/>}/>
      <Route exact path='/quizes' element={<QuizList/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route exact path='/quiz' element={<Quiz/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
    </Router>

    </div>
  )
}

export default App
