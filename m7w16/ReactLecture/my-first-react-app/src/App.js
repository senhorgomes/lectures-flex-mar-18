import './App.css';
import StudentInformationList from './components/StudentInformationList'
// JSX cannot return more than one element
// 
function App() {
  const listOfStudentNames = [{
    "first_name": "Rosita",
    "last_name": "Brand-Hardy",
    "email": "rbrandhardy0@ocn.ne.jp",
    "cohort": "6/29/2024"
  }, {
    "first_name": "Davy",
    "last_name": "Penley",
    "email": "dpenley1@woothemes.com",
    "cohort": "6/30/2024"
  }, {
    "first_name": "Keene",
    "last_name": "McCallum",
    "email": "kmccallum2@sun.com",
    "cohort": "6/29/2024"
  }, {
    "first_name": "Greer",
    "last_name": "Oland",
    "email": "goland3@earthlink.net",
    "cohort": "6/30/2024"
  }, {
    "first_name": "Dulcinea",
    "last_name": "Symon",
    "email": "dsymon4@storify.com",
    "cohort": "6/30/2024"
  }, {
    "first_name": "Hestia",
    "last_name": "Starford",
    "email": "hstarford5@webeden.co.uk",
    "cohort": "6/29/2024"
  }, {
    "first_name": "Betsey",
    "last_name": "Keneleyside",
    "email": "bkeneleyside6@amazon.co.uk",
    "cohort": "6/30/2024"
  }, {
    "first_name": "Roxie",
    "last_name": "Wiggall",
    "email": "rwiggall7@samsung.com",
    "cohort": "6/30/2024"
  }, {
    "first_name": "Kakalina",
    "last_name": "Ruddock",
    "email": "kruddock8@ucsd.edu",
    "cohort": "6/30/2024"
  }, {
    "first_name": "Filippo",
    "last_name": "Hellikes",
    "email": "fhellikes9@bigcartel.com",
    "cohort": "6/29/2024"
  }]
  
  return (
    <div>
      <header className="App-header">
        <StudentInformationList listOfStudentNames={listOfStudentNames}/>
      </header>
    </div>
  );
}

export default App;
