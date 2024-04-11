import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import ListItem from "./ListItem";
import Button from "./Button";

function emptyJobData() {
  return {
    name: '',
    position: '',
    start: '',
    end: '',
    location: '',
    description: '',
    id: ''
  };
}

export default function EditExperience({ data, updateAppData }) {
  const [addMode, setAddMode] = useState(false);
  const [newExperience, updateNewExperience] = useState(emptyJobData());
  
  function deleteListItem(item) {
    updateAppData(item, true);
  }
  
  function handleTyping(key, value) {
    updateNewExperience({ ...newExperience, [key]: value });
  }
  
  function toggleAddMode() {
    const newMode = !addMode;
    if (!addMode) resetForm();
    setAddMode(newMode);
  }
  
  function validateJob() {
    if (newExperience.name !== '' && newExperience.position !== '' 
      && newExperience.start !== '' && newExperience.end !== '') return true;
    return false;
  }
  
  function addJob() {
    if (!validateJob) return;
    const job = structuredClone(newExperience);
    job.id = crypto.randomUUID();
    updateAppData(job);
    toggleAddMode();
  }
  
  function resetForm() {
    updateNewExperience(emptyJobData());
  }
  
  if (!addMode) {
    return (
      <div className="wrapper">
        {data.map(item => <ListItem key={item.id} text={item.name} deleteItem={() => deleteListItem(item)} />)}
        <Button className='center' press={toggleAddMode}><FontAwesomeIcon icon={faPlus} /></Button>
      </div>
    );
  }
  
  return (
    <div className="wrapper input">
      <Input title='Company Name' name='company-name' className='large' dataKey='name' value={newExperience.name} onType={handleTyping} />
      <Input title='Position' name='position' className='large' dataKey='position' value={newExperience.position} onType={handleTyping} />
      <Input title='Start Year' name='job-start-year' dataKey='start' value={newExperience.start} onType={handleTyping} />
      <Input title='End Year' name='jon-end-year' dataKey='end' value={newExperience.end} onType={handleTyping} />
      <Input title='Location' name='job-location' className='large' optional={true} dataKey='location' value={newExperience.location} onType={handleTyping} />
      <Input title='Description' name='job-description' className='large' optional={true} dataKey='description' value={newExperience.description} onType={handleTyping} textArea={true} />
      <div className="buttons">
        <Button press={addJob}>Add</Button>
        <Button press={toggleAddMode}>Cancel</Button>
      </div>
    </div>
  );
}