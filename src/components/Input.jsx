export default function Input({ title, name, className, optional, dataKey, value, onType, textArea }) {
  const inputObj = textArea ? 
    <textarea id={name} value={value} onChange={e => onType(dataKey, e.target.value)} /> : 
    <input id={name} type="text" value={value} onChange={e => onType(dataKey, e.target.value)} />
  
  return (
    <div className={'edit-input' + ' ' + className}>
      <label className={optional && 'optional'} htmlFor={name}>{title}</label>
      {/* <input id={name} type="text" value={value} onChange={e => onType(dataKey, e.target.value)} /> */}
      {inputObj}
    </div>
  );
}