import { useState } from "react";
import Employee from "./Employee";
import NewEmployee from "./NewEmployee";


const initialdata = [
  { id: 1, name: 'rio', job: 'Developer', active: true },
  { id: 4, name: 'Ahmed', job: 'Designer', active: true },
  { id: 2, name: 'Anfal', job: 'Developer', active: true },
  { id: 3, name: 'Jo', job: 'Designer', active: true },
]

const Employees = () =>{

  const [data, setData] = useState(initialdata)
  const[show , setShow] = useState(false)

  // const toggleShow = () =>{
  //   setShow(!show);
  // }

  const handleNewEmployee = (newEmp) =>{
    console.log(newEmp)
    setData((state) => {
      const newData = [newEmp, ...state]
      return newData
    })
    setShow(false);
  }

  // const editName = ()=>{
  //   // const newData = [...data]
  //   // newData[0].name = 'Hello'
  //   // setData(newData)
  //   setData((state) =>{
  //     const newData = [...state]
  //     newData[0].name = 'Hello'
  //     return newData;
  //   })
  // }

  return (
    <div className='employees'>
      {show ? (
        <NewEmployee addNewEmployee={handleNewEmployee} />
      ) : (
        <div className='center'>
          <button
            className='btn'
            onClick={() => {
              setShow(true)
            }}
          >
            Add New Employee
          </button>
        </div>
      )}
      <div className='employee__list card'>
      {
        data.map(employee =>(
          <Employee data={employee} key={employee.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default Employees;