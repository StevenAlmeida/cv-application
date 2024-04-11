export default function ApplicationItem({ data }) {
  return (
    <div className="app-item">
      <div className="date">
        <p>{data.start + ' - ' + data.end}</p>
        <p>{data.location}</p>
      </div>
      <div className="info">
        <h3>{data.name}</h3>
        <p>{data.degree || data.position}</p>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
}