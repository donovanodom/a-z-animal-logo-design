import Orca from "./svgs/Orca";

const Logos = () => {
  return (
    <div className="logos">
      <div className="orca">
        <div className="logo-grid">
          <Orca />
          <div className="logo-details">
            <ul style={{ padding: "0", listStyle: "none", textAlign: "left" }}>
              <li>Letter: O</li>
              <li>Animal: Orca Whale</li>
              <li>Description: N/A</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
