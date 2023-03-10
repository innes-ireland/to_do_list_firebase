import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, } from "firebase/firestore";
import { query, orderBy, onSnapshot, limit, } from "firebase/firestore";
import Job from "./Job"
import AddJob from "./AddJob";
import { useAuthState } from "react-firebase-hooks/auth";






export default function ToDoList() {

    const [list, setList] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const q = query(collection(db, "jobs"), // setting the collection type and name
            orderBy("createdAt"), //ordering items chronologically
            limit(100) // limit on items to be fetched from the database
        );
        const unsubscribe = onSnapshot(q, (QuerySnapShot) => { // unsubscribe constant represents onSnapShot method fed props of q and querysnapshot method
            let list = [] // list set to an empty array 
            QuerySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            });
            setList(list) // list state set to new array
            const sortedList = list.filter(job => job.uid === user.uid) // sortedList should only retrieve objects with a uid corresponding to the signed in user 
            setList(sortedList)

        })
        return () => unsubscribe

    }, []);

    console.log(list)


    return (
        <div className="toDoList_Wrapper">
            <div className="toDoList_Header">
                <h1> Welcome {user.displayName}</h1>
                <h2> Things to do</h2>
            </div>
            <div className="toDoList_items">
                {list?.map((job) => (
                    <Job key={job.id} job={job} /> // if list is true, map through array returning each entry as an object "job"
                ))}
                <div className="toDoList_form">
                    <AddJob />
                </div>
            </div>
        </div>
    )
}