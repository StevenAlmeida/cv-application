import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ApplicationItem from './ApplicationItem';

function getHeaderTextColor(bgColor) {
    var color = (bgColor.charAt(0) === '#') ? 
        bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186);
}

function CVApplication({ personalDetails, education, experience, color }) {
  const textColor = getHeaderTextColor(color);
  return (
    <div className="application">
      <div className="wrapper">
        <div className="app-header" style={{ backgroundColor: color }}>
          <h1 className={textColor ? 'black' : ''}>{personalDetails.name === '' ? <>&nbsp;</> : personalDetails.name}</h1>
          <div className="header-details">
            {personalDetails.email && <p className={textColor ? 'black' : ''}><i><FontAwesomeIcon icon={faEnvelope} /></i> {personalDetails.email}</p>}
            {personalDetails.phoneNum && <p className={textColor ? 'black' : ''}><i><FontAwesomeIcon icon={faPhone} /></i> {personalDetails.phoneNum}</p>}
            {personalDetails.location && <p className={textColor ? 'black' : ''}><i><FontAwesomeIcon icon={faLocationDot} /></i> {personalDetails.location}</p>}
          </div>
        </div>
        <div className="app-content">
          {education.length > 0 && (
            <>
              <h2>Education</h2>
              <div className="line" />
              <div className="education-items">
                {education.map(item => <ApplicationItem key={item.id} data={item} />)}
              </div>
            </>
          )}
          {experience.length > 0 && (
            <>
              <h2>Experience</h2>
              <div className="line" />
              <div className="experience-items">
                {experience.map(item => <ApplicationItem key={item.id} data={item} />)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CVApplication;