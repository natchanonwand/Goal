import GoalReminder from "./GoalReminder"
import Schedule from "./Schedule"
import ProgressBar from "./ProgressBar"

function Content() {
  return (
    <section id="content">
      <div id="content-goal" className="flex flex-col items-center justify-center">
        <GoalReminder/>
      </div>
      <div id="content-schedule" className="flex flex-col items-start justify-center">
        <Schedule/>
      </div>
      <div id="content-progress" className="flex flex-col items-center justify-center">
        <ProgressBar/>
      </div>
    </section>
  )
}

export default Content