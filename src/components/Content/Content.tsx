function Content() {
  return (
    <section id="content">
      <div id="content-goal" className="flex flex-col items-center justify-center">
        <div id="content-goal-card" className="w-[80%] h-[80%] border-solid">
          <h1>Goal Name</h1>
        </div>
      </div>
      <div id="content-schedule" className="flex flex-col items-center justify-center">
        <div className="w-[80%] h-[80%] border-solid">
          <h1>scheduele</h1>
        </div>
      </div>
      <div id="content-progress" className="flex flex-col items-center justify-center">
        <div className="w-[80%] h-[80%] border-solid">
          <h1>Progress</h1>
        </div>
      </div>
    </section>
  )
}

export default Content