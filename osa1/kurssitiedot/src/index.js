import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }   

const Part = (props) => {
    console.log(props.name)
    return(
    <>
        {props.name} {props.exercises}
    </>
    )
}

const Content = (props) => {

    const part = props.part

    return(
    <div>    
      <Part name={part.name} exercises={part.exercises}/>
    </div>
    )

}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
    // const-määrittelyt
    const course = 'Half Stack application development'
    const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
    }
    const part2 = {
    name: 'Using props to pass data',
    exercises: 7
    }
    const part3 = {
    name: 'State of a component',
    exercises: 14
    }
  
    return (
      <div>
        <Header course={course} />
        <Content part={part1}/>
        <Content part={part2}/>
        <Content part={part3}/>
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))