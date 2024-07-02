// Creating a small list of student names
import { useState } from 'react';
import StudentInformationListItem from './StudentInformationListItem'
function StudentInformationList({listOfStudentNames}) {
    // Could we somehow modify this array to return HTML elements instead?
    
    const [isGraduated, setIsGraduated] = useState(false);
    function happyBirthday(studentName){
      console.log(`Happy Birthday ${studentName}!!`)
    }
    return (
        <ul>
            {listOfStudentNames.map((student)=> 
                // <li>
                //     <h2>{student.first_name} {student.last_name}</h2> 
                //     <h3>{student.cohort}</h3>
                //     <p>{student.email}</p>
                // </li>
                // Single Source of Truth
                <StudentInformationListItem 
                  // studentInformation={student}
                  studentFirstName={student.first_name}
                  studentLastName={student.last_name}
                  studentEmail={student.email}
                  studentCohort={student.cohort}
                  isGraduated={isGraduated}
                  setIsGraduated={setIsGraduated}
                  happyBirthday={happyBirthday}
                  // etc.
                />
            )}
        </ul>
    );
}

export default StudentInformationList;