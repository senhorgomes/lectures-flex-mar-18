

function StudentInformationListItem(props) {

// function StudentInformationListItem({studentFirstName, studentLastName, studentCohort, studentEmail}) {

    // How do we keep track of all these props?
    // We can keep them as props.
    // We can deconstruct props at the function level

    let graduated = false;

    function toggleGraduate(){
        graduated = true;
        console.log(graduated)
    }
    return ( 
        <li className={props.isGraduated && "toggle-graduate"}>
            <h2>{props.studentFirstName} {props.studentLastName}</h2> 
            <h3>{props.studentCohort}</h3>
            <p>{props.studentEmail}</p>
            <button onClick={()=> props.setIsGraduated(true)}>Graduated!</button>
            {/* happyBirthday() */}
            <button onClick={()=> props.happyBirthday(props.studentFirstName)}>Happy Birthday!</button>
        </li>
     );
}

export default StudentInformationListItem;