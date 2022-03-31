import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {MdHomeFilled, MdAddTask} from 'react-icons/md'

function Navigation() {
  return (
    <>
       <Link className='nav-a' to="/"><MdHomeFilled/> Home </Link>
       <Link className='nav-a' to="/create-exercise"><MdAddTask/> Add Exercise </Link>
    </>
  );
}

export default Navigation;