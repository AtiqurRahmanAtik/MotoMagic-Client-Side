import { Outlet } from "react-router-dom";

import Footer from "../Componets/Footer/Footer";
import NavigationBar from "../Componets/NavigationBar/NavigationBar";


const Main = () => {

    return (
        <div>

          <NavigationBar></NavigationBar>

           <div className="my-9">
           <Outlet></Outlet> 
           </div>

           <Footer></Footer>

        </div>
    );
};

export default Main;