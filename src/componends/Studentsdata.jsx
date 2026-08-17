import { useContext } from "react"
import { StudentContext } from "./Studentcontext"

const Studentsdata = ({ student }) => {

    const { favourites, addFavourite } = useContext(StudentContext)

    const alreadyFavourite = favourites.some(
        (item) => item.id === student.id
    )

    return (
        <div className="bg-green-200 w-fit h-fit m-10 p-5 rounded-md">

            <h1>
                Student name : {student.name}
            </h1>

            <h2>
                Student ID : {student.id}
            </h2>

            <h2>
                Course : {student.Course}
            </h2>

            <button
                onClick={() => addFavourite(student)}
                disabled={alreadyFavourite}
                className="bg-black rounded-md p-2 m-5 text-white"
            >
                {alreadyFavourite
                    ? "Already Favourite"
                    : "Add Favourite"
                }
            </button>

        </div>
    )
}

export default Studentsdata