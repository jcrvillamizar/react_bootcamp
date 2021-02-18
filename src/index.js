import React from 'react'
import ReactDOM from 'react-dom'

/**
const Title = ({course}) => <h1>{course}</h1>
 */
const Title = ({course}) => {
  return <h1>{course}</h1>
}

const Parte = (props) => {
  return <h1 style={{color: props.color}}>
    {props.part}
    </h1>
}

const Exercise = (props) => {
  return <h1 style={{color: props.color}}>
    {props.exercise}
    </h1>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React:'
  const exercises1 = 10
  const part2 = 'Using props to pass data:'
  const exercises2 = 7
  const part3 = 'State of a component:'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <p>
        <Parte color='black' part={part1}/> <Exercise color='red' exercise={exercises1}/> 
      </p>
      <p>
        <Parte color='black' part={part2}/> <Exercise color='red' exercise={exercises2}/> 
      </p>
      <p>
        <Parte color='black' part={part3}/> <Exercise color='red' exercise={exercises3}/> 
      </p>
      <p></p>
      <h2>Number of exercises <Exercise color='blue' exercise={exercises1 + exercises2 + exercises3}/> </h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))