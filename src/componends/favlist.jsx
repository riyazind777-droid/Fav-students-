import { useContext } from "react"
import { StudentContext } from "./Studentcontext"

const Favlist = () => {

    const { favourites, removeFavourite } =
        useContext(StudentContext)

    return (
        <div className="bg-emerald-400 min-h-screen text-center">

            <div className="text-5xl p-3 m-5">
                <h1>
                    <b>Favourite List</b>
                </h1>
            </div>

            {
                favourites.length === 0 ? (

                    <h2 className="text-2xl p-5">
                        No favourite students added yet
                    </h2>

                ) : (

                    <div className="flex flex-wrap">

                        {
                            favourites.map((student) => (

                                <div
                                    key={student.id}
                                    className="bg-green-200 w-fit h-fit m-10 p-5 rounded-md"
                                >

                                    <h1>
                                        Student name : {student.name}
                                    </h1>

                                    <h2>
                                        Student ID : {student.id}
                                    </h2>

                                    <h2>
                                        Course name : {student.Course}
                                    </h2>

                                    <button
                                        onClick={() =>
                                            removeFavourite(student.id)
                                        }
                                        className="bg-red-500 rounded-md p-2 m-5 text-white"
                                    >
                                        Remove
                                    </button>

                                </div>

                            ))
                        }

                    </div>
                )
            }

        </div>
    )
}

export default Favlist