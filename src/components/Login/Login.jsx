import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleGoogleLogin = (e) => {
        e.preventDefault();

        signInWithGoogle()
    }

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl font-semibold my-5">Login</h2>

                    <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>

                        {/**********Email**********************/}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input class="input input-bordered w-full max-w-xs" type='email' {...register("email", {
                            required: {
                                value: "true",
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email Address'
                            }

                        })} />
                            <label class="label">
                           
                            {errors.email?.type === 'required' &&  <span class="label-text-alt">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' &&  <span class="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/**************** Password *******************/}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input class="input input-bordered w-full max-w-xs" type='password' {...register("password", {
                            required: {
                                value: "true",
                                message: 'Password is required'
                            },
                           minLength: {
                               value: 6,
                               message: 'Password must be at least 6 characters long'
                           }

                        })} />
                            <label class="label">
                           
                            {errors.password?.type === 'required' &&  <span class="label-text-alt">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' &&  <span class="label-text-alt">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" value="Login" class="btn"/>




                  




                        <div class="divider">OR</div>
                        <button class="btn btn-outline" onClick={handleGoogleLogin}>Sign In With Google</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;