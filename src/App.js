import {Routes,Route} from "react-router-dom"
import "./App.css"
import LogInPage from "./components/LogInPage"
import SignUpPage from "./components/SignUpPage"
import DisplayWeather from "./components/DisplayWeather"

const App = () => (
  <div>
    <Routes>
      <Route exact path = "/login" element = {< LogInPage />}/>
      <Route exact path = "/signup" element = {< SignUpPage />} />
      <Route exact path = "/weather" element = {<DisplayWeather />} />
    </Routes>
  </div>
)

export default App