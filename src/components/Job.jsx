import { useState } from "react"
import { db, auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "../App.css"
import { doc, deleteDoc, updateDoc } from "firebase/firestore"


export default function Job({ job }) {

    const [user] = useAuthState(auth)


    const markAsDone = async (id) => {

        await updateDoc(doc(db, "jobs", id), { isComplete: true })

    }

    const markAsNotDone = async (id) => {
        await updateDoc(doc(db, "jobs", id), { isComplete: false })
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
                {job.isComplete === false ? (
                    <button className="job_status_button" onClick={() => markAsDone(job.id)}> &#10004; </button>) : (
                    <button className="job_status_button" onClick={() => markAsNotDone(job.id)}> &#10004; </button>
                )}
                <button className="delete_job_button" onClick={() => handleDelete(job.id)}> X </button>
            </div>
        </div>
    )

}
