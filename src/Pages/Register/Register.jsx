import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../Firebase/firebase.config";


const Register = () => {
    const[error , setError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const accepted = form.terms.checked;
        
        console.log(name,email, password, accepted);

        if(password.length < 6){
            setError('Password should be 6 character');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('Please Provider an UpperCase later');
            return;
        }
        else if(!accepted){
            setError('Please accept Terms and condition!')
            return;
        }

        // reset error
        setError('');

        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log('create user', user);
            swal("Good job!", "user created successfully!", "success");

            // update user profile
            updateProfile(user, {
                displayName: name,
            })
            .then(()=>{
                alert("updated Profile!");
            })
            .catch(error =>{
                setError(error.message)
            })


            // send email verification
            sendEmailVerification(user)
            .then(()=>{
                swal("please check your email!"); 
            })
            .catch(error=>{
                setError(error.message);
            })


            form.reset();
        })
        .catch(error => {
           
            setError(error.message)
        })


    }

    return (
        <section>
        <div className="hero min-h-[80vh] bg-base-100">
        <div className="hero-content flex-col ">
          <div className="text-center mb-8 lg:text-left">
            <h1 className="text-3xl text-purple-400 font-bold">Please Register !!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4 bg-blue-200">
            <div className="card-body">
              <form onSubmit={handleRegister}>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" />
            </div>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" required placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
              type= {showPassword ? 'text' : "password" }
              name="password"
             required
             placeholder="password" 
             className="input input-bordered" />
              <label className="label">
                <span onClick={()=>setShowPassword(!showPassword)}  className=" font-bold">
                {
                   showPassword ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                }
                </span>
              </label>
            </div>
            <div className="">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms"> Accept our<a href="#">Terms and condition</a></label>
            </div>
            
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Register" />
            </div>
              </form>
              <div>
                <p>Already Have Account? <Link className="text-primary font-bold" to='/login'>Login</Link></p>
              </div>
              <p className="text-sm my-4 font-semibold text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Register;