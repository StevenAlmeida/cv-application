import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from './Button';

export default function ListItem({ text, deleteItem }) {
  return (
    <div className="list-item">
      <p>{text}</p>
      <button type='button' className='delete' onClick={deleteItem}><FontAwesomeIcon icon={faXmark} /></button>
      {/* <Button className='red' press={deleteItem}>
        <FontAwesomeIcon icon={faXmark} />
      </Button> */}
    </div>
  );
}