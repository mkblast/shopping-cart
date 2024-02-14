import { Outlet } from "react-router-dom"
import Nav from "./components/NavigationBar/Nav"

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
