
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import {Route, Routes} from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {

  return (
      <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar/>
          <div id="main-content" className="flex-1 p-4">
            <Header />
            <Outlet>
              
            </Outlet>
          </div>
      </div>
  )
}

export default App
