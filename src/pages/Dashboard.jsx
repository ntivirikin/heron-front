function Dashboard( { goAdd, goLogin }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1>Dashboard</h1>
                <p>
                    It appears you have no catches! Log one now below.
                </p>
            </div>

            <div className="flex mt-8 justify-center space-x-8">
                <button className="bg-sky-500 py-2 px-4 rounded-sm cursor-pointer" type="submit" onClick={goAdd}>Add Catch</button>
                <button className="bg-sky-500 py-2 px-4 rounded-sm cursor-pointer" type="submit" onClick={goLogin}>Back</button>
            </div>
        </>
    );
}

export default Dashboard;