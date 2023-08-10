import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <section>
        <div className="container flex items-center justify-center min-h-screen">
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-center">Welcome</label>
                    <input className="input" placeholder="username" type="text"/>
                </div>
                <Link to="/" className="btn btn-primary">
                    Login
                </Link>
            </form>

        </div>
    </section>
  )
}


export default Login