import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Notification = () => {
  return (
    <StyledWrapper>
      <Link to={"/App"}>
        <button>
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Back</span>
        </button>
      </Link>

      <div className="main">
        <div className="up">
          <div className="loaders">
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
          </div>
          <div className="loadersB">
            <div className="loaderA">
              <div className="ball0" />
            </div>
            <div className="loaderA">
              <div className="ball1" />
            </div>
            <div className="loaderA">
              <div className="ball2" />
            </div>
            <div className="loaderA">
              <div className="ball3" />
            </div>
            <div className="loaderA">
              <div className="ball4" />
            </div>
            <div className="loaderA">
              <div className="ball5" />
            </div>
            <div className="loaderA">
              <div className="ball6" />
            </div>
            <div className="loaderA">
              <div className="ball7" />
            </div>
            <div className="loaderA">
              <div className="ball8" />
            </div>
          </div>
        </div>
      </div>
      <div className="error">
        <h1>
          Page is Not found <span>404</span>
        </h1>
      </div>

      <div className="card">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
          </svg>
        </div>
        <strong> Instagram </strong>
        <div className="card__body">abdukakhoorov_</div>
        <a target="_blank" href="https://www.instagram.com/abdukakhoorov_/">
          Follow us
        </a>
      </div>
      <div className="div">
        <h1>Спуститься невозможно!</h1>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .div {
    width: 100%;
    text-align: center;
    margin-bottom: 10000%;
  }

  .div h1 {
    font-family: sans-serif;
    font-size: 72px;
    color: red;
  }

  .card {
    margin: 50px auto 100px auto;
    --bg: #f7f7f8;
    --hover-bg: #ffe5f4;
    --hover-text: #e50087;
    max-width: 100%;
    text-align: center;
    background: var(--bg);
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: black;
  }

  .card__body {
    color: #464853;
    line-height: 1.5em;
    font-size: 1em;
  }

  .card > :not(a) {
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card > strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -0.035em;
  }

  .card a {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--hover-text);
    border-radius: 5px;
    font-weight: bold;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card:hover a {
    top: 0;
    font-size: 1.2em;
  }

  .card:hover {
    background: var(--hover-bg);
    border: none;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 12px;
  }

  .card:hover > div,
  .card:hover > strong {
    opacity: 0;
  }

  .error {
    width: 100%;
    margin: 130px 0px;
  }
  .error h1 {
    text-align: center;
    font-family: sans-serif;
    color: #344334;
  }
  .error h1 span {
    color: red;
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  }

  .loaders,
  .loadersB {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    position: absolute;
    width: 1.15em;
    height: 13em;
    border-radius: 50px;
    background: #e0e0e0;
  }
  .loader:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.15em;
    height: 5em;
    background: #e0e0e0;
    border-radius: 50px;
    border: 1px solid #e2e2e2;
    box-shadow: inset 5px 5px 15px #d3d2d2ab, inset -5px -5px 15px #e9e9e9ab;
    mask-image: linear-gradient(
      to bottom,
      black calc(100% - 48px),
      transparent 100%
    );
  }
  .loader::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.15em;
    height: 4.5em;
    background: #e0e0e0;
    border-radius: 50px;
    border: 1px solid #e2e2e2;
    box-shadow: inset 5px 5px 15px #d3d2d2ab, inset -5px -5px 15px #e9e9e9ab;
    mask-image: linear-gradient(
      to top,
      black calc(100% - 48px),
      transparent 100%
    );
  }
  .loaderA {
    position: absolute;
    width: 1.15em;
    height: 13em;
    border-radius: 50px;
    background: transparent;
  }
  .ball0,
  .ball1,
  .ball2,
  .ball3,
  .ball4,
  .ball5,
  .ball6,
  .ball7,
  .ball8,
  .ball9 {
    width: 1.15em;
    height: 1.15em;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px, 0px -1px 15px -8px rgba(0, 0, 0, 0.09);
    border-radius: 50%;
    transition: transform 800ms cubic-bezier(1, -0.4, 0, 1.4);
    background-color: rgb(232, 232, 232, 1);
    animation: 3.63s move ease-in-out infinite;
  }
  .loader:nth-child(2) {
    transform: rotate(20deg);
  }
  .loader:nth-child(3) {
    transform: rotate(40deg);
  }
  .loader:nth-child(4) {
    transform: rotate(60deg);
  }
  .loader:nth-child(5) {
    transform: rotate(80deg);
  }
  .loader:nth-child(6) {
    transform: rotate(100deg);
  }
  .loader:nth-child(7) {
    transform: rotate(120deg);
  }
  .loader:nth-child(8) {
    transform: rotate(140deg);
  }
  .loader:nth-child(9) {
    transform: rotate(160deg);
  }

  .loaderA:nth-child(2) {
    transform: rotate(20deg);
  }
  .loaderA:nth-child(3) {
    transform: rotate(40deg);
  }
  .loaderA:nth-child(4) {
    transform: rotate(60deg);
  }
  .loaderA:nth-child(5) {
    transform: rotate(80deg);
  }
  .loaderA:nth-child(6) {
    transform: rotate(100deg);
  }
  .loaderA:nth-child(7) {
    transform: rotate(120deg);
  }
  .loaderA:nth-child(8) {
    transform: rotate(140deg);
  }
  .loaderA:nth-child(9) {
    transform: rotate(160deg);
  }

  .ball1 {
    animation-delay: 0.2s;
  }
  .ball2 {
    animation-delay: 0.4s;
  }
  .ball3 {
    animation-delay: 0.6s;
  }
  .ball4 {
    animation-delay: 0.8s;
  }
  .ball5 {
    animation-delay: 1s;
  }
  .ball6 {
    animation-delay: 1.2s;
  }
  .ball7 {
    animation-delay: 1.4s;
  }
  .ball8 {
    animation-delay: 1.6s;
  }
  .ball9 {
    animation-delay: 1.8s;
  }

  @keyframes move {
    0% {
      transform: translateY(0em);
    }
    50% {
      transform: translateY(12em);
    }
    100% {
      transform: translateY(0em);
    }
  }

  button {
    display: flex;
    height: 3em;
    width: 100px;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee4b;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
    background: #fff;
  }

  button > svg {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.4s ease-in;
  }

  button:hover > svg {
    font-size: 1.2em;
    transform: translateX(-5px);
  }

  button:hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
  }
`;

export default Notification;
