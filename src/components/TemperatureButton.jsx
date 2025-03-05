import useStore from "../lib/useStore";
import "./TemperatureButton.css";

// Clickable. Controls degree of randomness of LLM's
// replies; low --> deterministic, high --> more creative
const TemperatureButton = ({img}) => {
  const { temperature, raiseTemperature } = useStore();

  return (
    <div
    className="temperature-button"
    title="Higher --> More Creative"
    onClick={raiseTemperature}>
      <img
        src= {img}
        alt="Temperature"
        className="icon"
      />
      <span className="temperature-label">{temperature}</span>
    </div>
  );
};

export default TemperatureButton;
