import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { editInstructorThunk, fetchInstructorThunk } from '../../store/thunks';
 //IMPLEMENT THUNK

class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "", 
          imageUrl: "", 
          instructorId: "",
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
      //getting course ID from url
      this.props.fetchInstructor(this.props.match.params.id);
      let instructor = this.props.instructor;
      this.setState({
        firstname: instructor.firstname,
        lastname: instructor.lastname,
        department: instructor.deparment,
        imageUrl: instructor.imageUrl,
        instructorId: instructor.id,
      })
      console.log(this.props.instructor);
    }

    handleChange = event => { 
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            id: this.state.instructorId
        };
        
        let editInstructor = await this.props.editInstructor(instructor);

        this.setState({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          department: this.state.deparment,
          imageUrl: this.state.imageUrl,
          instructorId: this.state.instructorId, 
          redirect: true, 
          redirectId: this.state.instructorId
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single instructor view of newly created instructor
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <EditInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}  
            instructor={this.props.instructor}    
          />
        );
    }
}


const mapState = (state) => {
  return {
    instructor: state.instructor,
  };
};



const mapDispatch = (dispatch) => {
    return({
        editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
        fetchInstructor: (id) => dispatch(fetchInstructorThunk(id))
    })
}

export default connect(mapState, mapDispatch)(EditInstructorContainer);