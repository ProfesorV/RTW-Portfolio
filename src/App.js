import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
    </div>
  );
}

export default App;
