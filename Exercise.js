import React from 'react';
import { MdDeleteOutline, MdEdit } from 'react-icons/md'

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td ><MdEdit onClick={ () => onEdit(exercise)} className='icon'/></td>
            <td ><MdDeleteOutline onClick={ () => onDelete(exercise._id)} className='icon'/></td>
        </tr>
    );
}

export default Exercise;