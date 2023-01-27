import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export default function AddListItem() {
    const [job, setJob] = useState("")
    const submitJob = async (event) => {
        event.preventdefault();
        if (job.trim === "") {
            alert("enter a valid job"); // stops it being possible to send empty strings to database as jobs
            return;
        }
        const { uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, "todo_list_items"), {
            list_item: job,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
        }); // sets values to send to database, name, avatar and uid come from auth
        setJob(" "); // sets job back to an empty string after submission
    }
    return (
        <div className="add_list_item-wrapper">
            <form>
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