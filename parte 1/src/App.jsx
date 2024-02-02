
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> 
       {props.course}
        </h1>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} /> 
      <div>
        <Content part={course.parts[0].name} />  
        <Total exercises={course.parts[0].exercises} />
      </div>
      <div>
        <Content part={course.parts[1].name} />  
        <Total exercises={course.parts[1].exercises} />
      </div>
      <div>
        <Content part={course.parts[2].name} /> 
        <Total exercises={course.parts[2].exercises} />
      </div>
      Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
    </div>
  );
}

export default App
