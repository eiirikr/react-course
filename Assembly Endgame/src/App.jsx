import { languages } from "./data/languages";

const languageElements = languages.map((language) => {
  const styles = {
    backgroundColor: language.backgroundColor,
    color: language.color,
  };
  return (
    <span key={language.name} style={styles} className="chip">
      {language.name}
    </span>
  );
});

export default function AssemblyEndgame() {
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
    </main>
  );
}
