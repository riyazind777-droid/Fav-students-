const Addstudents = () => {
    return (
        <div>
            <div className="px-10 py-5 border rounded-md ">
                <h2 className="text-3xl m-5 p-2">Add your students name</h2>
                <input type="text" placeholder="Studend name.." className="bg-white border-black rounded-md p-2"></input>
                <button className="border-black rounded-md text-white p-2 m-5 bg-black cursor-pointer hover:translate-y-0.5 transition-transform">Add</button>
            </div>


        </div>
    )
}

export default Addstudents