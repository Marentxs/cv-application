import { useState } from "react";
import General from "./components/general";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [educationList, setEducationList] = useState(null);
  const [experienceList, setExperienceList] = useState(null);

  const handleSaveGeneral = (newData) => {
    setGeneralInfo(newData);
  };

  return (
    <div>
      <General data={generalInfo} onSave={handleSaveGeneral} />
    </div>
  );
}

export default App;
