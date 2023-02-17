import Greeting from './Greeting'
import Welcome from './Welcome'

import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting massage="text tone" ansver="music bit" />
      <Welcome user="MrGX" age={36} />
      <Greeting massage="My Name Is ZORO" ansver="you name is shalva" />
    </div>
  );
}

export default App;
