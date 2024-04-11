import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import ListItem from "./ListItem";
import Button from "./Button";

function emptySchoolData() {
  return {
    name: '',
    degree: '',
    start: '',
    end: '',
    location: '',
    id: ''
  };
}

export default function EditEducation({ data, updateAppData }) {
  const [addMode, setAddMode] = useState(false);
  const [newEducation, updateNewEducation] = useState(emptySchoolData());
  
  function deleteListItem(item) {
    updateAppData(item, true);
  }
  
  function handleTyping(key, value) {
    updateNewEducation({ ...newEducation, [key]: value });
  }
  
  function toggleAddMode() {
    const newMode = !addMode;
    if (!addMode) resetForm();
    setAddMode(newMode);
  }
  
  function resetForm() {
    updateNewEducation(emptySchoolData());
  }
  
  function validateSchool() {
    if (newEducation.name !== '' && newEducation.degree !== '' 
      && newEducation.start !== '' && newEducation.end !== '') return true;
    return false;
  }
  
  function addSchool() {
    if (!validateSchool()) return;
    const school = structuredClone(newEducation);
    school.id = crypto.randomUUID();
    updateAppData(school);
    toggleAddMode();
  }
  
  if (!addMode) {
    return (
      <div className="wrapper">
        {data.map(item => <ListItem key={item.id} text={item.name} deleteItem={() => deleteListItem(item)} />)}
        <Button className='center' press={toggleAddMode}> <FontAwesomeIcon icon={faPlus} /></Button>
      </div>
    );
  }
  
  return (
    <div className="wrapper input">
      <Input title='School' name='school-name' className='large' dataKey='name' value={newEducation.name} onType={handleTyping} />
      <Input title='Degree' name='degree' className='large' dataKey='degree' value={newEducation.degree} onType={handleTyping} />
      <Input title='Start Year' name='school-start-year' dataKey='start' value={newEducation.start} onType={handleTyping} />
      <Input title='End Year' name='school-end-year' dataKey='end' value={newEducation.end} onType={handleTyping} />
      <Input title='Location' name='school-location' className='large' optional={true} dataKey='location' value={newEducation.location} onType={handleTyping} />
      <div className="buttons">
        <Button press={addSchool}>Add</Button>
        <Button press={toggleAddMode}>Cancel</Button>
      </div>
    </div>
  );
}