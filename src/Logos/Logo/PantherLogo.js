import Panther from "../svgs/Panther";

const PantherLogo = () => {
  return (
    <div className="logos">
      <div className="logo-grid">
        <Panther />
        <div className="logo-details">
          <ul style={{ padding: "0", listStyle: "none", textAlign: "left" }}>
            <li>Letter: P</li>
            <li>Animal: Panther</li>
            <li>Description: N/A</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PantherLogo;
