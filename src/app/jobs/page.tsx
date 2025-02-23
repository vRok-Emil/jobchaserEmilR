"use client";
import { useState, useEffect } from "react";
import { Avjobs } from "../comp/jobcard";

import { Displayjobs } from "../comp/DisplayJobs";

export default function JobsHome() {
  const [jobsData, setJobsData] = useState<Avjobs[]>([]);
 

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

    if (typeof window !== "undefined") {
      fetchJobs();
    }
  }, []);

  return (
    <div>
      
      <Displayjobs searchWord={""} jobs={jobsData} />
    </div>
  );
}
