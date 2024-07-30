const Computer = (props) => {
  const { state, setState } = props;

  const handleClick = () => {
    setState((prev)=> ({...prev, cheating: !prev.cheating}))
  }

  return (
    <section className="computer">
      <span
        role="img"
        aria-label="robot"
        // not an actual html attribute
        data-testid="robot-icon"
        // 
        className={state.cheating ? "cheating" : ""}
        // on click, modify the state of cheating to true
        onClick={handleClick}
      >
        🤖
      </span>
      <div>
        <h1>Good game to you</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="rock">
              {state.compSelection === "Rock" ? "⛰️" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="scissors">
              {state.compSelection === "Scissors" ? "✂️" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="paper">
              {state.compSelection === "Paper" ? "📄" : " ? "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Computer;
