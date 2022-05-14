import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const onSubmit = (data) => {
       console.log(data);
   }
    return (
        <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-4xl font-semibold my-5">Sign Up</h2>

                <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                    {/*********** USERNAME ****************/}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='text' {...register("username", {
                            required: {
                                value: "true",
                                message: 'Username is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Username must be over 6 characters long'
                            }

                        })} />
                        <label className="label">
                            {errors.username?.type === 'required' && <span className="label-text-alt">{errors.username.message}</span>}
                            {errors.username?.type === 'minLength' && <span className="label-text-alt">{errors.username.message}</span>}
                        </label>
                    </div>






                    {/**********Email**********************/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='email' {...register("email", {
                            required: {
                                value: "true",
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email Address'
                            }

                        })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/**************** Password *******************/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='password' {...register("password", {
                            required: {
                                value: "true",
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }

                        })} />
                        <label className="label">

                            {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password.message}</span>}
                       
                        </label>
                    </div>

                    <input type="submit" value="Login" className="btn" />
                    <div>Already a member ? <Link className="text-primary"to='/login'>Login</Link> </div>










                    <div className="divider">OR</div>
                    <button className="btn btn-outline">Sign In With Google</button>
                </form>

            </div>
        </div>
    </div>
    );
};

export default SignUp;