"use client";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <h1>NewJeans</h1>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Biography</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
<div className="container" style={{width: "25em"}}>
    <h5 className="card-title">NewJeans</h5>
    <p className="card-text">NewJeans is a South Korean Girl Group formed by ADOR, a sub-label of Hybe.</p>
</div>
<img className="NewJeans Img1 ml-50"
          src="newjeans-how-sweet-promo-image-landscape-1.jpg"
          width={500}
          height={281}
          alt="NewJeans"
        />

</>
  
  );
}

