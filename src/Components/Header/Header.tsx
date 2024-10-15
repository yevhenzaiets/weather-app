import "./header.css"

function Header() {
    return (
      <nav className="nav-top">
        <div className="toggle-switch">
          <input type="checkbox" id="toggle" className="toggle-checkbox" />
          <label htmlFor="toggle" className="toggle-label"></label>
          <p className="toggle-mode">Dark Mode</p>
        </div>
        <div>
          <input type="text" className="text-input" placeholder="Search for your preffered city..."/>
          <label htmlFor="text" className="text-label"></label>
        </div>
        <div>
          <input type="text" className="location-input" placeholder="Current location"/>
          <label htmlFor="location" className="location-label"></label>
        </div>
      </nav>
    )
}
  
export default Header;