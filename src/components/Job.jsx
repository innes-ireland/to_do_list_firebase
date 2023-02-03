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

    return (
        <div className="job_wrapper">
            <h3>{job.text} </h3>
            <button className="deleteJobButton"> X </button>
            <button onClick={updateEntry()} className="editJobButton">Edit </button>
        </div>
    )

}
