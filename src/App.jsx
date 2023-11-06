import { useState } from "react";
import imageHero from './image/one.jpg'

function App() {
  return (
    <>
      <section>
        <div class="container fixed-top">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                class="d-inline-flex link-body-emphasis text-decoration-none"
              >
                <svg
                  class="bi"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 link-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-danger">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-danger">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-danger">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-danger">
                  About
                </a>
              </li>
            </ul>

            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-success">
                Follow Me
              </button>
            </div>
          </header>
        </div>
      </section>

      <section id="hero" className="d-flex flex-row justify-content-center align-items-center vw-100">
        <img src={imageHero} className="object-fit-cover h-100 w-100 position-absolute" alt="" />
        <div className="flex d-flex flex-column justify-content-center vh-100 m-0 position-relative z-1 ">
          <h2 className="text-danger text-center">M<span className="text-light">eylani</span> E<span>ka</span></h2>
          <p className="text-light text-center">Halo saya dari jogja salam kenal </p>
        </div>
      </section>
    </>
  );
}

export default App;
