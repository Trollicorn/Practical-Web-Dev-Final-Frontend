import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseThunk, fetchCourseThunk } from '../../store/thunks';


class EditCourseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "", 
      timeslot: "",
      location: "", 
      courseId: "",
      redirect: false, 
      redirectId: null
    };
  }
  
  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);
    let course = this.props.course;
    this.setState({
      title: course.title,
      timeslot: course.timeslot,
      location: course.location,
      courseId: course.id,
    })
    console.log(this.props.course);
  }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            id: this.state.courseId
        };
        console.log("submitting");
        console.log(course);
        let editCourse = await this.props.editCourse(course);

        this.setState({
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          courseId: this.state.courseId, 
          redirect: true, 
          redirectId: this.state.courseId
        });
    }
    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          console.log("REDIRECT ID: " + this.state.redirectId);
          return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }
        return (
          <EditCourseView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}     
            course={this.props.course} 
          />
        );
        
    }
    
}

const mapState = (state) => {
  return {
    course: state.course,
  };
};


const mapDispatch = (dispatch) => {
    return({
        editCourse: (course) => dispatch(editCourseThunk(course)),
        fetchCourse: (id) => dispatch(fetchCourseThunk(id))
    })
}

export default connect(mapState, mapDispatch)(EditCourseContainer);