import { useState } from "react";
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [educationList, setEducationList] = useState({
    schoolName: "",
    title: "",
    date: "",
  });

  const [experienceList, setExperienceList] = useState({
    companyName: "",
    position: "",
    responsabilities: "",
    startWork: "",
    stopWork: "",
  });

  const handleSaveGeneral = (newData) => {
    setGeneralInfo(newData);
  };
  const handleEducationGeneral = (newData) => {
    setEducationList(newData);
  };

  return (
    <div>
      <div>
        <General data={generalInfo} onSave={handleSaveGeneral} />
      </div>
      <div>
        <Education data={educationList} onSave={handleEducationGeneral} />
      </div>
      <div>
        <Experience data={educationList} onSave={handleEducationGeneral} />
      </div>
    </div>
  );
}

export default App;
