

const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password)


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
              <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
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
              <input type="password" name="password" required placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Register" />
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Register;