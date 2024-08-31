import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

import registerImage from '../../assets/Images/RegisterForm.jpg';
import { Link } from "react-router-dom";


const Registration = () => {


    return (

        <div>
    <div>
        <h1 className='text-4xl text-center font-bold my-5'>Please Register Here! </h1>
    </div>


<div className="hero  min-h-screen">

<div className="hero-content flex-col lg:flex-row">
  <div className="text-center w-full  lg:text-left">
    <img className=' object-cover' src={registerImage} alt="login" />
  </div>

  {/* form */}
  <div className="card bg-orange-400 w-full  lg:w-2/4 shrink-0 shadow-2xl">

    <form className="card-body">
      
      <div className="form-control">
        <label className="label">
          <span className="label-text text-xl">Email</span>
        </label>
        <input type="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-xl">Password</span>
        </label>
        <input type="password" placeholder="password" className="input input-bordered" required />
     
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-blue-500 text-3xl hover:bg-red-500 hover:text-white border-none">Register</button>
      </div>
    </form>

    <div className="  space-x-1">
      <h1 className="text-2xl font-medium text-center capitalize"> Login with social accounts</h1>
  </div>


          <div className="text-center space-y-2 my-3">
             <div>
             <button className="btn  border-none w-72 text-3xl">
             <FcGoogle className='text-5xl' />
              Google</button>
             </div>
             
         <div className='flex '>
        
             <button className="btn mx-auto  w-72  text-3xl capitalize">
             <SiFacebook className='text-5xl text-blue-600 ' />
              FaceBook</button>
         </div>
            
        
             
          </div>

  <p className="text-2xl text-center capitalize"> have an account? Please

        <Link to='/login'>  <button className="btn btn-link no-underline text-2xl">Login</button></Link>
  </p>
  </div>
</div>
</div>
        </div>
    );
};

export default Registration;