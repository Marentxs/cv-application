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

  const handleExperienceGeneral = (newData) => {
    setExperienceList(newData);
  };

  return (
    <div id="app">
      <div id="form-container">
        <h1 id="title">CV-Application</h1>

        <div id="general-info" className="component">
          <h2>General Info</h2>
          <General data={generalInfo} onSave={handleSaveGeneral} />
        </div>

        <div id="education" className="component">
          <h2>Education</h2>
          <Education data={educationList} onSave={handleEducationGeneral} />
        </div>

        <div id="job-experience" className="component">
          <h2>Job Experience</h2>
          <Experience data={experienceList} onSave={handleExperienceGeneral} />
        </div>
      </div>

      <div id="cv-container">
        <h1 id="title">CV-Preview</h1>

        {(generalInfo.name ||
          educationList.title ||
          experienceList.position) && (
          <div className="preview-component">
            {generalInfo.name && (
              <div>
                <h2>General</h2>
                <p>{generalInfo.name}</p>
                <p>{generalInfo.email}</p>
                <p>{generalInfo.phoneNumber}</p>
              </div>
            )}

            {educationList.title && (
              <div>
                <h2>Education</h2>
                <p>{educationList.schoolName}</p>
                <p>{educationList.title}</p>
                <p>{educationList.date}</p>
              </div>
            )}

            {experienceList.position && (
              <div>
                <h2>Experience</h2>
                <p>{experienceList.companyName}</p>
                <p>{experienceList.position}</p>
                <p>{experienceList.responsabilities}</p>
                <p>{experienceList.startWork}</p>
                <p>{experienceList.stopWork}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
