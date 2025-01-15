import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';
import UserList from './UserList';
import Timer from './Timer';


function App() {

  const [timerVisible, setTimerVisible] = useState(true);

  function ToggleButton() 
  {
      setTimerVisible((prev) => !prev);
  }

  return (
    <div>
      <Counter/>
      <button onClick={() => ToggleButton()} className='btn btn-primary m-4'>{timerVisible? 'Masquer' : 'Afficher'}</button>
      { timerVisible? <Timer/>: ""}
      {/* <UserList/> */}
    </div>
  )
}

export default App
