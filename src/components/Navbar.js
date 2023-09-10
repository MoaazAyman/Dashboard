// imports
import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

// the Navbar component.. it consists of 2 parts, one for the title and the other for the search box
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Moaaz,</h4>
        <h1>
          Welcome to <span>YOUR DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        {/* this logo imported from react-icons */}
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

// this styled component imported from styled-components

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;