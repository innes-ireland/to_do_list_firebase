import { useState } from "react"
import { db, auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "../App.css"
import { doc, deleteDoc, updateDoc } from "firebase/firestore"


export default function Job({ job }) {

    const [user] = useAuthState(auth)


    const updateStatus = async (id) => {

        await updateDoc(doc(db, "jobs", id), { isComplete: true })

    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "jobs", id));
    }


    return (
        <div className="job_wrapper" id={job.id}>
            <div className={`job_text_${job.isComplete === true ? "complete" : ""}`}>
                <h3>{job.text} </h3>
            </div>
            <div className="job_buttons">
                <button className="completeJobButton" onClick={() => updateStatus(job.id)}> &#10004; </button>
                <button className="deleteJobButton" onClick={() => handleDelete(job.id)}> X </button>
            </div>
        </div>
    )

}
