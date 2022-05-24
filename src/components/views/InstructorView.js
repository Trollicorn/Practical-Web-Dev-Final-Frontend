import { Link } from "react-router-dom";


const InstructorView = (props) => {

  const {instructor, deleteInstructor, editCourse, allCourses} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  console.log(instructor);
  console.log("instructor logged");
  if (! instructor){ //failed to fetch instructor
    return(
      <div>
        <h2>Instructor not found</h2>
        <Link to={"/instructors"}>
          <h4>Return to all instructors</h4>
        </Link>
      </div>
    )

  }
  return (
    <div>      
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: null})}>x</button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>
      <button onClick={() => deleteInstructor(instructor.id)}>Delete</button>
  
    </div>
  );

};

export default InstructorView;