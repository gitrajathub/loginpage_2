function Login(){

    return(
        <>
            
            <div className="flex justify-between p-16 px-40">
                <div className="w-1/2">
                    <div className="border-2 h-screen">
                        <form className="px-24 py-12">
                            <img className="h-10 w-10 " src="https://imgs.search.brave.com/5ph5KkLypMH8CU3_Z_KWUJ53xf2d04c-bVHrco3Pgpw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnBob3Rvc3RvY2tl/ZGl0b3IuY29tL2Mv/MTUxMi9jdXAtZ3Jl/ZW4tdGVhcG90LXBv/dXJpbmctcmVkLWxp/cXVpZC10by13aGl0/ZS10ZWFjdXAtY2xv/c2V1cC1waG90b2dy/YXBoeS1iZXZlcmFn/ZS1iZXZlcmFnZS1p/bWFnZS5qcGc" alt="background"/>
                            <p className="text-2xl pt-4 font-semibold">Welcome Back!</p>
                            <p className="text-gray-500 pt-1 text-sm">Enter to get unlimited access to data & information.</p>
                            <div className="flex flex-col pt-7 ">
                                <label className="font-semibold">Email*</label>
                                <input className="border-2 p-1 my-1 " placeholder="Enter your username"></input>
                                <label className="font-semibold pt-2">Password*</label>
                                <input className="border-2 p-1 my-1"  placeholder="*********"></input>
                            </div>
                            <div className="flex justify-between text-sm py-1 font-semibold">
                                <div className="flex items-center"> 
                                    <input type="checkbox" className="mt-1"></input>
                                    <label className="pl-2">Remember me</label>
                                </div>
                                <a href="#.html" className="text-blue-700">Forgot your Password?</a>
                            </div>
                            <button className="bg-blue-500 text-white p-2 my-5 font-semibold rounded-md w-full">Login</button>
                            <p className="flex justify-center text-sm text-gray-500">----- Or, Login with -----</p>
                            <div className="border-2 shadow-sm p-2 mt-4 flex justify-center rounded-md items-center">
                                <img className="w-8 h-7 pr-1" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google"/>
                                <p className="font-semibold">Sign up with google</p>
                            </div>
                            <div className="flex justify-center pt-4 font-semibold">
                                <p>Don't have an account? </p>
                                <a href="#.html" className="pl-2 text-blue-500 underline">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="w-full max-h-screen" src="https://imgs.search.brave.com/5ph5KkLypMH8CU3_Z_KWUJ53xf2d04c-bVHrco3Pgpw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnBob3Rvc3RvY2tl/ZGl0b3IuY29tL2Mv/MTUxMi9jdXAtZ3Jl/ZW4tdGVhcG90LXBv/dXJpbmctcmVkLWxp/cXVpZC10by13aGl0/ZS10ZWFjdXAtY2xv/c2V1cC1waG90b2dy/YXBoeS1iZXZlcmFn/ZS1iZXZlcmFnZS1p/bWFnZS5qcGc" alt="background" />
                </div>
            </div>



        </>
    )
}

export default Login;