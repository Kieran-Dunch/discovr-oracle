import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand text-light" href="">Celestial Journeys</Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="btn btn-outline-primary" aria-current="page" href="#">Login</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>    </>
  )
}
