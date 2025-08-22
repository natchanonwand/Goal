function Sidebar() {
  return (
    <section id="side">
      <div id="sidebar-recommend-content" className="flex flex-col items-center justify-start p-4 space-y-4">
        <div>Home</div>
        <div>Discover</div>
      </div>
      <div id="sidebar-user-content" className="flex flex-col items-center justify-start p-4 space-y-4">
        <div>My Goals</div>
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