import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory()

    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Succesfully Created Exercise');

        } else {
            alert(`Failed to create new exercise, status code = ${response.status}`)
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Create Exercise</h1>
            <input
                type="text"
                placeholder="Enter Exercise Name Here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select onChange={e => setUnit(e.target.value)}>
                <option value="" selected={"selected"} disabled hidden>Unit</option>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
                </select>
            <input
                type="text"
                placeholder="MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={createExercise}
            >Add</button>
        </div>
    );
}

export default CreateExercisePage;