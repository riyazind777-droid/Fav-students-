import Studentsdata from "./Studentsdata"

const Studentlist = () => {

    const student = [
        { id: 1, name: "Riyaz", Course: "Java full stack" },
        { id: 2, name: "Thoufiq", Course: "Mec eng" },
        { id: 3, name: "Rajesh", Course: "B.Com" },
        { id: 4, name: "Mayil", Course: "EEE" }
    ]

    return (
        <div className="flex flex-wrap">
            {
                student.map((item) => {
                    return (
                        <Studentsdata
                            key={item.id}
                            student={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default Studentlist