

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h3>Mohammed Uddin</h3>
      <h5>Final Project</h5>
      <Link to={'/instructors'} > All Instructors </Link>
      <p/>
      <Link to={'/courses'} > All Courses </Link>
      
    </div>
  );    
}




export default HomePageView;
