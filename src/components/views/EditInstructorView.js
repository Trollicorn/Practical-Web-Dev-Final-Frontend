const EditInstructorView = (props) => {
  const {handleChange, handleSubmit, instructor} = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit Instructor
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First name: </label>
          <input type="text" name="firstname" defaultValue={instructor.firstname} onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last name: </label>
          <input type="text" name="lastname" defaultValue={instructor.lastname} onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
          <input type="text" name="department" defaultValue={instructor.department} onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
          <input type="text" name="imageUrl" defaultValue={instructor.imageUrl} onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default EditInstructorView;