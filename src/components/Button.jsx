export default function Button({ children, press, className }) {
  return (
    <button className={'btn' + (className ? ' ' + className : '')} type="button" onClick={press}>{children}</button>
  );
}