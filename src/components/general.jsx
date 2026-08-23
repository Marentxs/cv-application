import { useState } from "react";

//Logic for buttons

function General(props) {
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
        <p>Name</p>
        <input name="name" value={draftInfo.name} onChange={handleChange} />

        <p>Email</p>
        <input name="email" value={draftInfo.email} onChange={handleChange} />

        <p>Phone number</p>
        <input
          name="phoneNumber"
          value={draftInfo.phoneNumber}
          onChange={handleChange}
        />

        <button onClick={handleSubmitClick}>Submit</button>
      </div>
    );
  } else {
    content = (
      <div>
        <p>Name: {props.data.name}</p>
        <p>Email: {props.data.email}</p>
        <p>Phone Number: {props.data.phoneNumber}</p>

        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default General;
