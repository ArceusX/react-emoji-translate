import "./css/SavedContainer.css";

// Contains icon that onClick, calls passed handleIcon
// on saved data. Flanked by input, output textareas
const SavedContainer = ({ placeholder, icon, data, handleIcon = (() => {}) }) => {
  return (
    <div className="saved-container">
      <div className="label">{placeholder}</div>

      {/* First text-container */}
      <div className="text-container">
        <div className="input-container">
          <textarea value={data.input[0]} readOnly placeholder="Input" />
        </div>
        <img
          src={icon}
          alt="Save"
          className="icon"
          onClick={() => handleIcon(data, 0)}  // Updated to use `data`
        />
        <div className="output-container">
          <textarea value={data.output[0]} readOnly placeholder="Output" />
        </div>
      </div>

      {/* Second text-container */}
      <div className="text-container">
        <div className="input-container">
          <textarea value={data.input[1]} readOnly placeholder="Input" />
        </div>
        <img
          src={icon}
          alt="Save"
          className="icon"
          onClick={() => handleIcon(data, 1)}  // Updated to use `data`
        />
        <div className="output-container">
          <textarea value={data.output[1]} readOnly placeholder="Output" />
        </div>
      </div>
    </div>
  );
};

export default SavedContainer;