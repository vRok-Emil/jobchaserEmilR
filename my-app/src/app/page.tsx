"use client";
import { useState, useEffect } from "react";
import "./App.css";
import { Avjobs } from "./comp/jobcard";
import { Searchbar } from "./comp/Searchbar";
import { Displayjobs } from "./comp/DisplayJobs";
import  SignUpForm from "./signup/page";
import JobsHome from "./jobs/page";
import DarkModeToggle from "react-dark-mode-toggle"


export default function Home() {
  return (
    <>
      <main>
        
        <div className="HeadDiv">
          <div className="imgforHeadDiv">
            <img src="/images/jobchaseroffice.png" alt="The Office" />
          </div>
          <div className="textForLandingPage">
            <p>Hi and welcome to</p>
            <h1>JobChaser</h1>
          </div>
        </div>
      </main>
    </>
  );
}
