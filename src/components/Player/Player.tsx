function Player() {
  return (
    <section id="player" className="flex justify-between items-center">
        <div id="music-display">Song Name</div>
        <div id="music-player-button">
            <button>Previous</button>
            <button>Play/Pause</button>
            <button>Next</button>
        </div>
        <div id="music-edit">Volumn and ... button</div>
    </section>
  )
}

export default Player