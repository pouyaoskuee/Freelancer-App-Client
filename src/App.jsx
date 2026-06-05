import './App.css'
import {Route, Routes} from "react-router-dom";
import Auth from "./components/Auth/Auth.jsx";

function App() {

  return (
      <Routes>
          <Route path="/auth" component={Auth} />
      </Routes>

  )
}

export default App
