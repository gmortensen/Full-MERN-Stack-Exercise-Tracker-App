import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {MdAddTask} from 'react-icons/md';

function HomePage( {setExerciseToEdit} ) {
    const [exercises, setExercises] = useState([]);

    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            setExercises(exercises.filter(e => e._id !== _id));

        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }

    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise")
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises'); 
        const exercises = await response.json();
        setExercises(exercises);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
            <Link className='button' to="/create-exercise"><MdAddTask/>Add Exercise</Link>
        </>
    );
}

export default HomePage;