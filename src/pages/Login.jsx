function Login({ goDash }) {
    return (
        <>
            <div className="grid grid-cols-2 max-w-2/5 mx-auto">
                <div className="flex flex-col space-y-4 col-span-1">
                    <h1 className="text-6xl text-bold">Heron</h1>

                    <label htmlFor="username">Username</label>
                    <input className="bg-white text-black" id="username" type="text" />

                    <label htmlFor="password">Password</label>
                    <input className="bg-white text-black" id="password" type="text" />
                </div>

                <img src="/login.png" alt="Green heron in water." className="col-span-1"></img>
            </div>

            <div className="flex mt-8 justify-center">
                <button className="bg-sky-500 py-2 px-4 rounded-sm cursor-pointer" type="submit" onClick={goDash}>Login</button>
            </div>
        </>
    );
}

export default Login;