import { createRoot } from 'react-dom/client'
import FrameworkList from "./frameworklist.jsx";
import FrameworkListsearchfilter from "./frameworklistsearchfilter.jsx";
import ResponsiveDesign from "./ResponsiveDesign.jsx";
import './tailwind.css';


createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <FrameworkListsearchfilter/> */}
            <ResponsiveDesign/>
        </div>
    )