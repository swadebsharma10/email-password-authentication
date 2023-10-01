import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../Firebase/firebase.config";


const Login = () => {

    const[error, setError] = useState('');

    const emailRef = useRef(null);

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(password.length < 6){
            setError('Password should be 6 character');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('Please Provider an UpperCase later');
            return;
        }

        // reset error
        setError('');

        // sign in user
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            if(user.emailVerified){
              console.log('logged user', user);
            swal("Good job!", "user Logging successfully!", "success");
            }
            else{
                swal( "please Verify your email!");
            }
            
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })

    }


    const handleForgetPassword =()=>{ 
        const email= emailRef.current.value;
        if(!email){
            swal("Please!", "provide your email!", "error"); 
            return; 
        }

        //send email password reset
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            swal("please check Email!")
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <section>
        <div className="hero min-h-[80vh] bg-base-100">
        <div className="hero-content flex-col ">
          <div className="text-center mb-8 lg:text-left">
            <h1 className="text-3xl text-purple-800 font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4 bg-blue-200">
            <div className="card-body">
              <form onSubmit={handleLogIn}>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               type="email"
                name="email"
                ref={emailRef}
                 required
                  placeholder="email"
                   className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" required placeholder="password" className="input input-bordered" />
              <label className="label">
                <button onClick={handleForgetPassword}  className="label-text-alt link link-hover py-3 font-bold text-error">Forgot password?</button>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
              </form>
              <div>
                <p>New to this site? <Link className="text-primary font-bold" to='/register'>Register</Link></p>
              </div>
              <p className="text-sm my-4 font-semibold text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Login;