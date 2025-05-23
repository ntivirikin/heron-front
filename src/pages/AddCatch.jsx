function AddCatch({ goDash }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1>Add New Catch</h1>
            </div>

            <div className="flex mt-8 justify-center space-x-8">
                <button className="bg-sky-500 py-2 px-4 rounded-sm cursor-pointer" type="submit" onClick={goDash}>Back</button>
            </div>
        </>
    );
}

export default AddCatch;