import { Link } from "react-router-dom";


const InstructorView = (props) => {

  const {instructor, editCourse, allCourses} = props;
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
  let name = instructor.firstname ? (instructor.firstname + " " + instructor.lastname)
          : "Instructor " + (instructor.lastname ? instructor.lastname : instructor.id);
  return (
    <div>      
      <h1>{name}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title ? course.title : "Course " + course.id}</h4>
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
              <h4>{course.title ? course.title : "Course " + course.id}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>
  
    </div>
  );

};

export default InstructorView;