import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/addStudents';

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const userInfo = {
                    displayName: name
                };
                profileUpdate(userInfo)
                    .then(() => {
                        navigate(from, { replace: true });
                        const currentUser = {
                            name,
                            email
                        }
                        saveUser(currentUser);
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => toast.error('Email already in use'));
    }
    //save user to database
    const saveUser = user => {
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Sign Up successfully');
                }
            })
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 shadow-xl p-3'>
                <h2 className='text-3xl text-center text-primary'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg py-2">Name</span>
                        </label>
                        <input type='text' name='name' className="w-full max-w-md py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]" placeholder="Name" />

                    </div>
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
                <p>Already have an Account? <Link to='/login' className='text-green-500'>Please Login</Link></p>
                <button className='btn text-white px-6 md:px-24 py-4 bg-primary mt-8 rounded-md hover:bg-red-600 w-full max-w-md'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SignUp;