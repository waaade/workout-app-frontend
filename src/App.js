import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WorkoutView from './components/WorkoutView';
import Home from './components/Home';
import AddPlan from './components/AddPlan';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/workouts" element={ <WorkoutView/> } />
        <Route path="/add" element={ <AddPlan/> } />
      </Routes>
    </div>
  );
}

export default App;
