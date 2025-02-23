"use client";
import { useState, useEffect } from "react";
import { Avjobs } from "../comp/jobcard";
import { Searchbar } from "../comp/Searchbar";
import { Displayjobs } from "../comp/DisplayJobs";

export default function JobsHome() {
  const [jobsData, setJobsData] = useState<Avjobs[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("data.json"); // Ändra till din faktiska sökväg
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const jobs = await response.json();
        console.log("Fetched jobs:", jobs);
        setJobsData(jobs);
        return jobs;
      } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
      }
    }

    fetchJobs();
  }, []);

  return (
    <div>
      
      <Displayjobs searchWord={searchWord} jobs={jobsData} />
    </div>
  );
}
