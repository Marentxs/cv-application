import { useState } from "react";

//Logic for buttons

function Experience(props) {
  const [draftInfo, setDraftInfo] = useState(props.data);
  const [isEditing, setIsEditing] = useState(true);

  //Logic for input places

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDraftInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Once edit is clicked

  function handleEditClick() {
    setIsEditing(true);
    setDraftInfo(props.data);
  }

  //Once submit is clicked

  function handleSubmitClick() {
    props.onSave(draftInfo);
    setIsEditing(false);
  }

  //Content itself

  let content;

  if (isEditing === true) {
    content = (
      <div>
        <p>Company Name</p>
        <input
          name="companyName"
          value={draftInfo.companyName}
          onChange={handleChange}
        />

        <p>Position</p>
        <input
          name="position"
          value={draftInfo.position}
          onChange={handleChange}
        />

        <p>Responsabilities</p>
        <input
          name="responsabilities"
          value={draftInfo.responsabilities}
          onChange={handleChange}
        />

        <p>Date when you started</p>
        <input
          name="startWork"
          value={draftInfo.startWork}
          onChange={handleChange}
        />

        <p>Date when you stopped</p>
        <input
          name="stopWork"
          value={draftInfo.stopWork}
          onChange={handleChange}
        />

        <button onClick={handleSubmitClick}>Submit</button>
      </div>
    );
  } else {
    content = (
      <div className="info-view">
        <p>Company name: {props.data.companyName}</p>
        <p>Position: {props.data.position}</p>
        <p>Responsabilities: {props.data.responsabilities}</p>
        <p>Date when you started working: {props.data.startWork}</p>
        <p>Date when you stopped working: {props.data.stopWork}</p>

        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Experience;
