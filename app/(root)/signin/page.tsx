
import React from 'react'
import {Metadata} from "next";
import Login from "@/components/Login";



export const metadata: Metadata = {
    title: 'SignIn',
    description: 'This is the Sign In page',
}
const SignIn = () => {

    return (
        <div className="justify-center items-center flex flex-row min-w-max">
            <Login />
        </div>
    )
}
export default SignIn
