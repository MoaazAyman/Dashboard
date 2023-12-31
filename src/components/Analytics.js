/// imports

import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";

// Analytics Component
export default function Analytics() {
  return (
    //this srction is devided into 4 divs.. Each div is for an analytic
    <Section>
      {/* first analytic*/}
      <div className="analytic ">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>$682.5</h2>
        </div>
        <div className="logo">
          {/*this logo imported from react-icons */}
          <BsFillCalendar2WeekFill />
        </div>
      </div>

      {/* second analytic*/}
      <div className="analytic">
        <div className="logo">
          {/*this logo imported from react-icons */}
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h2>$350.40</h2>
        </div>
      </div>

      {/* third analytic*/}
      <div className="analytic">
        <div className="logo">
          {/*this logo imported from react-icons */}
          <BiGroup />
        </div>
        <div className="content">
          <h5>New clients</h5>
          <h2>321</h2>
        </div>
      </div>

      {/* fourth analytic*/}
      <div className="analytic ">
        <div className="content">
          <h5>Activity</h5>
          <h2>$540.50</h2>
        </div>
        <div className="logo">
          {/*this logo imported from react-icons */}
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}

//this styled component imported from styled-components

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
