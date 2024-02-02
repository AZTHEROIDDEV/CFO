
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
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1> <Header course={course} /> </h1>
      <div>
        <Content part={parts[0].name} />  
        <Total exercises={parts[0].exercises} />
      </div>
      <div>
        <Content part={parts[1].name} />  
        <Total exercises={parts[1].exercises} />
      </div>
      <div>
        <Content part={parts[2].name} /> 
        <Total exercises={parts[2].exercises} />
      </div>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </div>
  );
}

export default App
