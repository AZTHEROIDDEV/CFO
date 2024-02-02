
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p> 
       {props.course}
        </p>
    </div>
  )
}


const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p> 
        {props.part}
      </p>
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p> 
         {props.exercises}
      </p>
    </div>
  )
}





const App = () => {
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
      <h1> <Header course={course} /> </h1>
      <div>
        <Content part={part1.name} />  
        <Total exercises={part1.exercises} />
      </div>
      <div>
        <Content part={part2.name} />  
        <Total exercises={part2.exercises} />
      </div>
      <div>
        <Content part={part3.name} /> 
        <Total exercises={part3.exercises} />
      </div>
      Number of exercises {part1.exercises + part2.exercises + part3.exercises}
    </div>
  );
}

export default App
