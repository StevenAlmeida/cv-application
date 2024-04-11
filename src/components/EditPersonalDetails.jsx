import Input from "./Input";

export default function EditPersonalDetails({ data, updateAppData }) {
    function handleTyping(key, value) {
      updateAppData(key, value);
    }
  
  return (
    <div className="wrapper input">
      <Input title='Name' name='full-name' className='large' dataKey='name' value={data.name} onType={handleTyping} />
      <Input title='Email' name='email' className='large' dataKey='email' value={data.email} onType={handleTyping} />
      <Input title='Phone Number' name='phone-number' className='large' dataKey='phoneNum' value={data.phoneNum} onType={handleTyping} />
      <Input title='Location' name='location' className='large' dataKey='location' value={data.location} onType={handleTyping} />
    </div>
  );
}