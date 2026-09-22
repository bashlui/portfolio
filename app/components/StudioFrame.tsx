export default function StudioFrame() {
  return (
    <figure className="studio">
      <div className="studio-bar">
        <span>Opsight · this week</span>
        <span>on-device</span>
      </div>

      <div className="studio-panes">
        <section className="studio-copy">
          <p>
            Cursor is open on the detector. Claude drafts the crop. I keep the
            confirmation human, because a catering cart cannot afford a false
            yes.
          </p>
          <p>
            That is the job twice: sitting with the model while I build, then
            putting a model where a person has to trust it.
          </p>
        </section>

        <div className="studio-device" aria-hidden="true">
          <div className="studio-viewfinder">
            <span className="studio-scan" />
            <span className="studio-chip studio-chip-a">cart 14</span>
            <span className="studio-chip studio-chip-b">3 missing</span>
            <span className="studio-chip studio-chip-c">hold</span>
          </div>
        </div>
      </div>
    </figure>
  )
}
