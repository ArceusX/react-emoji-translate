import { useState } from "react";

import "./InfoBox.css";

const MESSAGE = 
`1. Top lightgreen box: Set language in scrolldown, translate direction by clicking [Flip]
2. Center blue box: type your input in left side box to translate
3. Center blue box: click 💾 to save text to local storage

4. Lower white box: Click ▶️ to rerun with that input
5. Center column icons: ▶️ rerun, ❌ clear text, 💾 save
6. 🌡️ to change temperature (higher --> more creative output)`;
 
const InfoBox = ({value = MESSAGE}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="info-box">
      <button onClick={() => setIsOpen(!isOpen) } className="info-box-btn">
        {`👉 ${isOpen ? "Hide" : "Show"} Info`}
      </button>
      
      {isOpen && (
        <div className="info-box-message">
          <textarea
            readOnly
            value={value}
            rows={6}
          />
        </div>
      )}
    </div>
  );
};

export default InfoBox;
