import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/addStudents';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(() => {
                toast.success("Login Successfully.");
                navigate(from, { replace: true });
            })
            .catch(e => toast.error(e))
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 shadow-xl p-3'>
                <h2 className='text-3xl text-center text-primary'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg py-2">Email</span>
                        </label>
                        <input type='email' name='email' className="w-full max-w-md py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]" placeholder="Email" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg">Password</span>
                        </label>
                        <input type='password' name='password' className="w-full max-w-md py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]" placeholder="password" />

                    </div>
                    <p className='text-xs mt-2'><span>Forgot Password?</span></p>

                    <input className="btn text-white px-6 md:px-24 py-4 bg-primary mt-4 rounded-md hover:bg-red-600 w-full max-w-md" type="submit" value='Login' />
                </form>
                <p>New user? <Link to='/signup' className='text-green-500'>Please Sign Up</Link></p>
                <button className='btn text-white px-6 md:px-24 py-4 bg-primary mt-8 rounded-md hover:bg-red-600 w-full max-w-md'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;