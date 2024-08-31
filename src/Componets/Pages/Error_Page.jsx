import { Link, useRouteError } from "react-router-dom";
import Error from "../../assets/Images/404.gif";
// import ErrorPage from '../../assets/Images/404.jpg'
const Error_Page = () => {
    const error = useRouteError();
  

    return (
       

              <div id="error-page" className="text-center my-2 ">
      <h1 className="text-3xl font-bold text-red-600 ">Oops!</h1>

      <div className="">
        <img className="w-[450px] mx-auto" src={Error} alt="Error" />
      </div>

      <p className="text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
      <p >
        <i className="text-2xl font-bold">{error.statusText || error.message}</i>
      </p>

      <div className="mx-auto my-3">
        
      <Link to='/'><button className="btn btn-error text-2xl text-white">Back to Home Page</button></Link>
      </div>
    </div>
      
    );
};

export default Error_Page;