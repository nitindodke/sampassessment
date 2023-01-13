/* eslint-disable no-undef */
import React, { useState } from 'react';
import "./employee.css";
import EmployeeData from "./EmployeeData.json";
import EmployeeSalary from "./EmployeeSalary.json";


const Employee = () => {
     
    const [toggle,setToggle]=useState(false)

    let arrEmpDetails = [];
    EmployeeData.map((empDetails, index) => {

        let EmpSalaryDetails = EmployeeSalary.filter(function (empSal, i) {
            return empSal.emp_id === empDetails.emp_id;
        })
        let arr_data = empDetails;
        arr_data.sal = EmpSalaryDetails;
        arrEmpDetails.push(arr_data);
    });


    function ShowHideEmpSalDetails(empId) {  
       setToggle(true)
        // if (document.querySelector(".empsal-" + empId).style.display == "block") {
        //     document.querySelector(".empsal-" + empId).style.display = "none";
        // } else if (document.querySelector(".emp-"+empId).style.display == "none") {
        //     document.querySelector(".empsal-" + empId).style.display = "block";
        // } else {
        //     document.querySelector(".empsal-" + empId).style.display = "block";
        // }
    };

    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th scope='col'>Emp_id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Designation</th>
                        <th scope='col'>Country</th>
                        <th scope='col'>DOB</th>
                        <th scope='col'></th>
                        <th scope='col'>Total Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrEmpDetails.map((empData, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>
                                            <span onClick={(e) =>ShowHideEmpSalDetails(empData.emp_id)} >v</span>
                                        </td>
                                        <td>{empData.emp_id}</td>
                                        <td>{empData.Name}</td>
                                        <td>{empData.Designation}</td>
                                        <td>{empData.Country}</td>
                                        <td>{empData.DOB}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                   {empData && empData.sal && empData.sal.length>0 && empData.sal.map((empSalData, ind) => {
                                       
                                        let basic_salary = (empSalData.basic_salary) ? empSalData.basic_salary : 0;
                                        let bonus = (empSalData.bonus) ? empSalData.bonus : 0;
                                        let insurance = (empSalData.insurance) ? empSalData.insurance : 0;
                                        let professional_tax = (empSalData.professional_tax) ? empSalData.professional_tax : 0;
                                        let totalSal = (basic_salary + bonus) - (insurance + professional_tax);

                                    
                                        return(
                                            <tr className={`empsal-${empSalData.emp_id}`}>

                                            <td>{(empSalData.salary_id) ? empSalData.salary_id : ''} </td>
                                            <td>{(empSalData.emp_id) ? empSalData.emp_id : ''} </td>
                                            <td>{(empSalData.date) ? empSalData.date : ''} </td>
                                            <td>{basic_salary} </td>
                                            <td>{bonus} </td>
                                            <td>{insurance} </td>
                                            <td>{professional_tax} </td>
                                            <td>{totalSal} </td>

                                        </tr>
                                        )

                                    
                                    }
                                    )
                                   }
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Employee;





















