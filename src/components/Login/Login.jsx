import React from 'react';

const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl font-semibold my-5">Login</h2>

                    <form className='flex flex-col gap-3'>
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                        <input type="button" value="Login" class="btn btn-primary"/>
                        <div class="divider">OR</div>
                        <button class="btn btn-outline">Sign In With Google</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;