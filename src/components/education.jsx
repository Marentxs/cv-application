import { useState } from "react";

//Logic for buttons

function Education(props) {
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
        <form onSubmit={handleSubmitClick}>
          <p>School Name</p>
          <input
            name="schoolName"
            type="text"
            value={draftInfo.schoolName}
            onChange={handleChange}
            type="text"
            required
          />

          <p>Title</p>
          <input
            name="title"
            type="text"
            value={draftInfo.title}
            onChange={handleChange}
            type="text"
            required
          />

          <p>Date</p>
          <input
            name="date"
            type="text"
            value={draftInfo.date}
            onChange={handleChange}
            type="date"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    content = (
      <div className="info-view">
        <p>School Name:{props.data.schoolName}</p>
        <p>Title: {props.data.title}</p>
        <p>Date of Study: {props.data.date}</p>

        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Education;
