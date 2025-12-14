import React, { use, useContext } from 'react';
import signinlottie from "../../assets/Lotties/sign in.json"; 
import LottieWrapper from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link } from 'react-router';

const Lottie = LottieWrapper.default || LottieWrapper;


const SignIn = () => {
  const {SignInUser} = useContext(AuthContext);
  const handleRegister = e =>
  {
    e.preventDefault();
    const form = e.target;
    const email = form.mail.value;
    const password = form.password.value;
    console.log(email,password)

// Sign In User

SignInUser (email,password).then(result => {
    console.log(result.user)
}).catch (error =>
{
    console.log(error)
}
)



createUser(email,password).then(result => {
  console.log(result.user)
}).catch (error => {
  console.log(error)
})



  }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    
                    <Lottie style={{width:"500px"}} animationData={signinlottie} loop={true} ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Sign In!</h1>
                        <form onSubmit={handleRegister}>
                          <fieldset className="fieldset">
                            <label  className="label">Email</label>
                            <input type="email" className="input" name="mail" placeholder="Email" />
                            <label  className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                           
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        </form>
                        <div className="text-center mt-6 text-sm text-gray-600">
                            New here? 
                            <Link to="/register" className="link link-hover font-bold text-blue-600 hover:text-blue-800 ml-1">
                                Create an account
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;