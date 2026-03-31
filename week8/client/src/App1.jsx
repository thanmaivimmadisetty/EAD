import StudentCard from "./Components/StudentCard.jsx"; 
function App1() { 
  return ( 
    <div style={{ textAlign: "center" }}> 
      <h1>Student Profiles</h1> 
      <div style={{ display: "flex", justifyContent: "center" }}> 
        <StudentCard 
          name="Goutham" 
          branch="IT" 
          year="2nd Year" 
          image="student1.jpg" 
        /> 
        <StudentCard 
          name="kavya" 
          branch="CSE" 
          year="3rd Year" 
          image="student2.jpg" 
        /> 
        <StudentCard 
          name="srujan" 
          branch="ECE" 
          year="1st Year" 
          image="student3.jpg" 
        /> 
      </div> 
    </div> 
  ); 
} 
export default App1;