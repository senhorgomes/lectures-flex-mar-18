const Header = () => {
  return(
    <header>
      <h1>Rock Paper Scissors</h1>
      <h2>
        <span role="img" aria-label="rock">⛰️</span>
        <span>-</span>
        <span role="img" aria-label="scissors">✂️</span>
        <span>-</span>
        <span role="img" aria-label="paper">📄</span>
      </h2>
    </header>
  )
};

export default Header;