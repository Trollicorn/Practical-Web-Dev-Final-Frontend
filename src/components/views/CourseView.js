import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title ? course.title : "Course " + course.id}</h1>
      {course.instructor ? 
        <Link to={`/instructor/${course.instructorId}`}>
          <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>
        </Link>
        : <h3>staff</h3>
      }
      <h4>Timeslot: {course.timeslot}</h4>
      <h4>Location: {course.location}</h4>
      <Link to={`/course/${course.id}/edit`} state={{course: course}}>
        <button>Edit Course Information</button>
      </Link>
    </div>
  );

};

export default CourseView;