import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export default function Login() {
    const username = useRef("");
    const pass = useRef("");
    const router = useRouter(); // Initialize the useRouter hook
    
    const onSubmit = async() => {
        const result = await signIn("credentials", {
            username: username.current,
            password: pass.current,
            redirect: false,
        });

        if (result?.error) {
            alert("invalid credentials");
        } else {
            router.push('/');
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200" data-theme="light">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-3xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input name="username" type="text" placeholder="username" className="input input-bordered" 
                                onChange={(e) => (username.current = e.target.value)}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" 
                                onChange={(e) => (pass.current = e.target.value)}/>
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={onSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};