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
    event.preventDefault();
    props.onSave(draftInfo);
    setIsEditing(false);
  }

  //Content itself

  let content;

  if (isEditing === true) {
    content = (
      <div>
        <form onSubmit={handleSubmitClick}>
          <p>Name</p>
          <input
            name="name"
            value={draftInfo.name}
            onChange={handleChange}
            type="text"
            required
          />

          <p>Email</p>
          <input
            name="email"
            value={draftInfo.email}
            onChange={handleChange}
            type="email"
            required
          />

          <p>Phone number</p>
          <input
            name="phoneNumber"
            value={draftInfo.phoneNumber}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    content = (
      <div className="info-view">
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
