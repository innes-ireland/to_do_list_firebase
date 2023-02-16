import { useState } from "react"
import { db, auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "../App.css"
import { doc, deleteDoc } from "firebase/firestore"


export default function Job({ job }) {

    const [user] = useAuthState(auth)


    const updateEntry = () => {
        const [entry, setEntry] = ("")

    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "jobs", id));
    }

    return (
        <div className="job_wrapper">
            <h3>{job.text} </h3>
            <button className="deleteJobButton" onClick={() => handleDelete(job.id)}> X </button>
            <button onClick={updateEntry()} className="editJobButton">Edit </button>
        </div>
    )

}
