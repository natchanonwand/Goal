import { TypeAnimation } from 'react-type-animation';

function GoalReminder() {
  return (
    <section className="w-full h-full flex flex-col">
      <TypeAnimation
        sequence={[
          "Ready?", 1200,
          "Ready, Set Goals!", 1000,
          "", 1000
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: '1.5em', display: 'block' }}
        repeat={Infinity}  
      />
      <input className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type="text" 
      placeholder='Tell us about your goal'/>
      
    </section>

  )
}

export default GoalReminder