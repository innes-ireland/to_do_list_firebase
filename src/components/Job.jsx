import { useState } from "react"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "../App.css"

export default function Job({ job }) {

    const [user] = useAuthState(auth)
    /* const handleDelete = (job) => {
         remove(ref(db, `/${job.uid}`))
 
     }*/
    const updateEntry = () => {
        const [entry, setEntry] = ("")

    }

    return (
        <div className="item">
            <h6>{job.text} </h6>
            <button> X </button>
            <button onClick={updateEntry()}>Edit </button>
        </div>
    )

}