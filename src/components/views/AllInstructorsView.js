import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  const {deleteInstructor} = props;
  if (!props.allInstructors.length) {
    return (
    <div>
      <p>There are no instructors.</p>
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>);
  }

  return (
    <div>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname ? (instructor.firstname + " " + instructor.lastname)
          : "Instructor " + (instructor.lastname ? instructor.lastname : instructor.id);
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link><button onClick={() => deleteInstructor(instructor.id)}>X</button> 
          <p>{instructor.department}</p>
        </div>
        );

      })}
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;