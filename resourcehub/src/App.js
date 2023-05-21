import './Styles/App.css';
//import Login from './Component/Login';
//import Sidebar from './Component/Sidebar';
import Routesapp from './Component/Routesapp';
import Topics from './Component/Topics';
import { ReactSession } from 'react-client-session';
function App() {
  ReactSession.setStoreType("localStorage");

  return (

      <Routesapp/>
    
  );
}

export default App;
