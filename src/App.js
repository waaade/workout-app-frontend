import { Routes, Route } from 'react-router-dom';
import WorkoutView from './components/WorkoutView';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={ <WorkoutView/> } exact />
      </Routes>
    </div>
  );
}

export default App;
