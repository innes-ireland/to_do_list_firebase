import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export default function AddJob() {
    const [job, setJob] = useState("");
    const addJob = async (event) => {
        event.preventDefault();
        if (job.trim() === "") {
            return (
                alert("please enter valid message"))
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "jobs"), {
            text: job,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid

        });
        setJob("")
    }
    return (
        <div className="add_list_item-wrapper">
            <form onSubmit={(event) => addJob(event)}>
                <input type="text"
                    id="jobInput"
                    name="jobInput"
                    className="jobInput"
                    placeholder="add job here"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button
                    type="submit"
                    className="submitJobButton">
                    Add to list
                </button>
            </form>
        </div>
    )
}