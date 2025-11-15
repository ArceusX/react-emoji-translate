import useStore from "../lib/useStore";
import "./css/LanguageSelector.css";

const LanguageSelector = ({ languages, emoji, icon }) => {
  const { language, setLanguage, toEmoji, toggleToEmoji } = useStore();

  return (
    <div className="language-selector">
      <div className="placeholder"></div>
      <div className="main-container">
        {toEmoji ? (
          <>
            <select
              className="dropdown"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <span className="label">To</span>
            <div className="emoji">
              <div>{emoji}</div>
            </div>
          </>
        ) : (
          <>
            <span className="emoji">
              <div>{emoji}</div>
            </span>
            <span className="label">To</span>
            <select
              className="dropdown"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <div className="refresh-container" onClick={ () => toggleToEmoji() }>
        <img src={icon} alt="Refresh" className = "icon" title="Flip" />
        <div>Flip</div>
      </div>
    </div>
  );
};

export default LanguageSelector;
