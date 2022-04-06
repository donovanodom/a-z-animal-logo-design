import Orca from "./svgs/Orca";

const Logos = () => {
  return (
    <div className="logos">
      <div className="orca">
        <div className="orca-filter">
          <img
            alt="orca"
            src="https://images.unsplash.com/photo-1598202604734-f6fcd12b2384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
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
