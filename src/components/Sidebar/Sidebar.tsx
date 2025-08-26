import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <section id="side">
      <div id="sidebar-logo-content" className="flex items-center h-full bg-transparent">
        <button id="hamburger" className="flex w-[40px] h-[40px] 
        rounded-full border-none bg-transparent border-solid border-[1px] border-[#ccc]">
        </button>
      </div>
      <div id="sidebar-recommend-content" className="flex flex-col items-center justify-start p-4 space-y-4">
        <Link to="/">Home</Link>
        {/* <div>Discover</div> */}
      </div>
      <div id="sidebar-user-content" className="flex flex-col items-center justify-start p-4 space-y-4">
        <Link to="/user">My Goals</Link>
        <div>Progress</div>
        <div>Schedule</div>
      </div>
      <div id="create-goal" className="flex flex-col items-center justify-center">
        <div>Setting</div>
        <div>Login</div>
      </div>
    </section>
  )
}

export default Sidebar