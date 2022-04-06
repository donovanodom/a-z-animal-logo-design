import KingCobra from "../svgs/KingCobra";

const KingCobraLogo = () => {
  return (
    <div className="logos">
      <div className="orca">
        <div className="logo-grid">
          <KingCobra />
          <div className="logo-details">
            <ul style={{ padding: "0", listStyle: "none", textAlign: "left" }}>
              <li>Letter: K</li>
              <li>Animal: KingCobra </li>
              <li>Description: N/A</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingCobraLogo;
