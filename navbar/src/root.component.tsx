import './navbar.css'
export default function Root(props) {
  return (
      <div className="component--navbar">
          <div className="navbar">
              <div className="title-navbar">Trains Ticket</div>
              <a href="/dc" className="link">Panier</a>
          </div>
      </div>
  )
}
