import EditSection from './EditSection'
import CVApplication from './CVApplication';
import { useState } from 'react';

const defaultPersonalDetails = {
  name: 'Sadaou Maou',
  email: 'xxdemonking21xx@gmail.com',
  phoneNum: '+81 48-845-6878',
  location: 'Tokyo, Japan'
};

const defaultSchool = {
  name: 'Demon Army',
  degree: 'Cadet',
  start: '1689',
  end: '1709',
  location: 'Ente Isla',
  id: crypto.randomUUID()
};

const defaultJob1 = {
  name: 'Demon Army',
  position: 'Ruler',
  start: '1709',
  end: '2022',
  location: 'Ente Isla',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum, ipsum cum expedita ratione quae maxime dolore officiis debitis optio doloremque voluptas deserunt? Asperiores officia nam dignissimos corporis iure nulla! Voluptatem officiis cumque vero. Optio',
  id: crypto.randomUUID()
};

const defaultJob2 = {
  name: 'MgRonalds',
  position: 'Crew Member',
  start: '2022',
  end: '2023',
  location: 'Tokyo, Japan',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, ullam facere expedita suscipit laboriosam veritatis, saepe repellat maiores qui sequi unde soluta sint facilis, velit quaerat libero corporis earum nemo?',
  id: crypto.randomUUID()
};


const defaultJob3 = {
  name: 'MgRonalds',
  position: 'Shift Manager',
  start: '2023',
  end: 'Current',
  location: 'Tokyo, Japan',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nisi facilis eos vel repellendus maxime deleniti consequuntur quod neque illum iste dolores obcaecati, cumque aliquam labore culpa eius in? Accusantium, fugiat numquam',
  id: crypto.randomUUID()
};

function App() {
  const [applicationColor, setApplicationColor] = useState('#0693E3');
  const [education, setEducation] = useState([defaultSchool]);
  const [experience, setExperience] = useState([defaultJob1, defaultJob2, defaultJob3]);
  const [personalDetails, setPersonalDetails] = useState(defaultPersonalDetails);
  
  function updateEducation(item, deleteItem) {
    if (deleteItem) {
      const newArr = education.filter(i => i !== item);
      setEducation(newArr);
      return;
    }
    setEducation([...education, item]);
  }
  
  function updateExperience(item, deleteItem) {
    if (deleteItem) {
      const newArr = experience.filter(i => i !== item);
      setExperience(newArr);
      return;
    }
    setExperience([...experience, item]);
  }
  
  function updatePersonalDetails(key, value) {
    setPersonalDetails({ ...personalDetails, [key]: value });
  }
  
  function updateAppColor(color) {
    setApplicationColor(color.hex);
  }
  
  function resetApplication() {
    setEducation([]);
    setExperience([]);
    setPersonalDetails({
      name: '',
      email: '',
      phoneNum: '',
      location: ''
    });
  }
  
  return (
    <>
      <EditSection
        personalDetails = {personalDetails}
        updatePersonalDetails={updatePersonalDetails}
        education={education}
        updateEducation={updateEducation}
        experience={experience}
        updateExperience={updateExperience}
        reset={resetApplication}
        updateAppColor={updateAppColor}
      />
      <CVApplication
        personalDetails={personalDetails}
        education={education}
        experience={experience}
        color={applicationColor}
      />
    </>
  );
}

export default App
