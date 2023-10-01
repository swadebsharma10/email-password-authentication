

const Login = () => {

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


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
              <input type="email" name="email" required placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" required placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Login;