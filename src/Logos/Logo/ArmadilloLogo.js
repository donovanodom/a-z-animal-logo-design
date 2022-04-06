import Armadillo from "../svgs/Armadillo";

const ArmadilloLogo = () => {
  return (
    <div className="logos">
      <div className="logo-grid">
        <Armadillo />
        <div className="logo-details">
          <ul style={{ padding: "0", listStyle: "none", textAlign: "left" }}>
            <li>Letter: A</li>
            <li>Animal: Armadillo</li>
            <li>Description: N/A</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArmadilloLogo;
