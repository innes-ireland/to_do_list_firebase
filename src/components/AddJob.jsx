import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export default function AddJob() {
    const [jobDescription, setJobDescription] = useState("");
    const addJob = async (event) => {
        event.preventDefault();
        if (jobDescription.trim() === "") {
            return (
                alert("please enter valid message"))
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "jobs"), {
            text: jobDescription,
            isComplete: false,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid

        });
        setJobDescription("")
    }
    return (
        <div className="add_list_item-wrapper">
            <form className="add_job_form" onSubmit={(event) => addJob(event)}>
                <input type="text"
                    id="jobInput"
                    name="jobInput"
                    className="job_input"
                    placeholder="add job here"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
                <button
                    type="submit"
                    className="submit_job_button">
                    Add to list
                </button>
            </form>
        </div>
    )
}