import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';
import UserList from './UserList';
import Timer from './Timer';
import ErrorBoundary from './ErrorBoundary';
import OptimizedCounter from './OptimizedCounter';
import Todo_App from './Todo_App';


function App() {

  const [timerVisible, setTimerVisible] = useState(true);

  function ToggleButton() 
  {
      setTimerVisible((prev) => !prev);
  }

  return (
    <div>
      <ErrorBoundary>
          <Counter/>
      </ErrorBoundary>
      
      <button onClick={() => ToggleButton()} className='btn btn-primary m-4'>{timerVisible? 'Masquer le compteur' : 'Afficher le compteur'}</button>
      { timerVisible? <Timer/>: ""}
      {/* <UserList/> */}
      {/* <OptimizedCounter/> */}
      <Todo_App/>
    </div>
  )
}

export default App
