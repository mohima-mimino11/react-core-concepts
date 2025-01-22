// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Bookstore from './Bookstore';
import Book from './Book';

function App() {
  const actors = ['Brad Pitt', 'Angelina Jolie', 'Anne Hatheway', 'Kate Winslet', 'Emma Watson'];
  const singers = [
    {id:1, name: 'Taylor Swift', age: 34},
    {id:2, name: 'Sabrina', age: 24},
    {id:3, name: 'Girl in Red', age: 26},

  ]

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Chemistry', price: 120},
    {id: 3, name: 'Math', price: 130},
    {id: 4, name: 'Biology', price: 150},

  ]
  return (
    <>
     
      <h3>Vite + React</h3>
      <Bookstore books={books} ></Bookstore>
      {
        books.map(book => <Book book={book}></Book>)
      }
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }




      <Actor name={"Anya Taylor"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      
      {/* <Todo 
      task="Learn React" 
      isDone={false}>
      </Todo>
      <Todo 
      task="Learn Node" 
      isDone={true}>
      </Todo>
      <Todo 
      task="Learn NextJs" 
      isDone={false}>
      </Todo> */}

      {/* <Person></Person>
      <Device name="Laptop" price="55000" ></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="Watch" price="1200"></Device>
      <Student grade="7" score="80"></Student>
      <Student grade={grade} score={score} ></Student>
      <Student grade="12" ></Student>

      <Developer></Developer> */}
      
    </>
  )
}

function Person(){
  const age = 24;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am {person.name} with age: {age + money}</h3>
}

function Device(props){
  console.log(props);
  return (
    <div>
      <h5>This Device: {props.name} and price: {props.price}</h5>
    </div>

  )
}

const {grade, score} = {grade: '6', score: '99'};

function Student({grade=1, score=0}){
  console.log(grade, score);
  
  return (
    <div className='student'>
      <h3>This is a student.</h3>
      <p>Class: {grade} </p>
      <p>Score: {score} </p>
    </div>
  )
}

function Developer(){
  const developerStyle ={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }

  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
