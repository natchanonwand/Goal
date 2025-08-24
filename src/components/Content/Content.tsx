import GoalReminder from "./GoalReminder"
import Schedule from "./Schedule"
import ProgressBar from "./ProgressBar"

function Content() {
  return (
    <section id="content">
      <div id="content-goal" className="flex flex-col items-center justify-center">
        <div id="content-goal-card" className="w-full h-full border-solid">
          <GoalReminder/>
        </div>
      </div>
      <div id="content-schedule" className="flex flex-col items-start justify-center">
        <div className="w-full h-full border-solid">
          <Schedule/>
        </div>
      </div>
      <div id="content-progress" className="flex flex-col items-center justify-center">
        <div className="w-full h-full border-solid">
          <ProgressBar/>
        </div>
      </div>
    </section>
  )
}

export default Content