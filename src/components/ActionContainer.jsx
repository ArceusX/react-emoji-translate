import useStore from '../lib/useStore';

import "./ActionContainer.css";

const ActionContainer = ({ setDummy }) => {
  const { setInput, setSaved } = useStore();

  return (
    <div className="action-container">
      <img
        src="/rerun.png"
        alt="Rerun"
        className="icon"
        title="Rerun"
        onClick={() => setDummy(prev => !prev)}
      />
      <img
        src="/cross.png"
        alt="Clear"
        className="icon"
        title="Clear Input"
        onClick={() => setInput("")}
      />
      <img
        src="/save.png"
        alt="Save"
        className="icon"
        title="Save"
        onClick={() => setSaved() }
      />
    </div>
  );
};

export default ActionContainer;