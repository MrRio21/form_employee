import React, { useState } from 'react'

const NewEmployee = (props) => {


  const [name, setName] = useState('')
  const [job, setJob] = useState('Developer')

  const handleNameChenge = (event) => {
    // console.log(event)
    setName(event.target.value)
  }
  const handleJobChenge =(event) =>{
    setJob(event.target.value)
  }
  const addNewEmployee = (e) =>{
    e.preventDefault()
    if (!name) {
      alert('add name')
      return;
    }
    const employee = {
      id:new Date().getTime(),
      name,job,
      active:true
    }
    // console.log(employee)
    props.addNewEmployee(employee)
    setName('')
    setJob('developer')
  }

  return (
    <div className='employee__new card'>
      <h2>Add New Employee</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <br />
          <input
            type='text'
            id='name'
            value={name}
            name='name'
            placeholder='new employee'
            onChange={handleNameChenge}
          />
          <br />
        </div>
        <div>
          <label htmlFor='job'>Job:</label>
          <br />
          <select
            id='job'
            name='job'
            value={job}
            placeholder='new employee'
            onChange={handleJobChenge}
          >
            <option value='Developer'>Developer</option>
            <option value='Designer'>Designer</option>
          </select>
          <br />
        </div>
        <div>
          <button
            className='btn btn-primary'
            type='submit'
            onClick={addNewEmployee}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewEmployee