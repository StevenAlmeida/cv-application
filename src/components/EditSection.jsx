import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import EditPersonalDetails from "./EditPersonalDetails";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";
import Button from "./Button";
import { TwitterPicker } from 'react-color';

export default function EditSection({ personalDetails, updatePersonalDetails, education, updateEducation, experience, updateExperience, updateAppColor, reset }) {
  const [activePanel, setActivePanel] = useState('personal-details');
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  function handlePanelChange(panelId) {
    if (panelId === activePanel) return setActivePanel('');
    setActivePanel(panelId);
  }
  
  function toggleColorPicker() {
    setShowColorPicker(!showColorPicker);
  }
  
  return (
    <div className="edit-section">
      <EditPanel name='Personal Details' id='personal-details' active={activePanel === 'personal-details'} openPanel={handlePanelChange}>
        <EditPersonalDetails data={personalDetails} updateAppData={updatePersonalDetails} />
      </EditPanel>
      <EditPanel name='Education' id='education' active={activePanel === 'education'} openPanel={handlePanelChange}>
        <EditEducation data={education} updateAppData={updateEducation} />
      </EditPanel>
      <EditPanel name='Experience' id='experience' active={activePanel === 'experience'} openPanel={handlePanelChange}>
        <EditExperience data={experience} updateAppData={updateExperience} />
      </EditPanel>
      <div className="buttons">
        <Button press={reset}>Reset</Button>
        <div className="color-div">
          <div className={'color-picker' + (showColorPicker ? '' : ' hidden')}>
            <TwitterPicker triangle='hidden' onChange={updateAppColor} />
          </div>
          <Button press={toggleColorPicker}>Color</Button>
        </div>
      </div>
    </div>
  );
}

function EditPanel({ name, id, active, openPanel, children }) {
  const icon = active ? faAngleDown : faAngleUp;
  
  return (
    <div className="edit-panel">
      <div className="panel-header">
        <button className="wrapper" onClick={() => openPanel(id)}>
          <h2>{name}</h2><i><FontAwesomeIcon icon={icon} /></i>
        </button>
      </div>
      <div className={'accordion-item' + (active ? ' active' : '')}>
        { children }
      </div>
    </div>
  );
}