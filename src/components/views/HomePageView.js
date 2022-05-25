

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>Mohammed Uddin</h1>
      <h2>Final Project</h2>
      <Link to={'/instructors'} > All Instructors </Link>
      <p/>
      <Link to={'/courses'} > All Courses </Link>
      
    </div>
  );    
}




export default HomePageView;
