import Capybara from "../svgs/Capybara";

const CapybaraLogo = () => {
  return (
    <div className="logos">
      <div className="logo-grid">
        <Capybara />
        <div className="logo-details">
          <ul style={{ padding: "0", listStyle: "none", textAlign: "left" }}>
            <li>Letter: C</li>
            <li>Animal: Capybara</li>
            <li>Description: N/A</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CapybaraLogo;
