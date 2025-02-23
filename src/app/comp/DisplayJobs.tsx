"use client";
import { Avjobs } from "./jobcard";
import AllJobs from "./jobcard";
import { useSelector, useDispatch } from "react-redux";
import { setName, setJobs, selectJobs } from "@/app/Redux/counter";
import { useEffect } from "react";
import { Searchbar } from "./Searchbar";

interface DisplayJobProps {
  searchWord: string;
  jobs: Avjobs[];
}
//display jobs funktionen tar in två props från displayjobs
//const filter filtrar jobben baserat på vad sök ordet är

export function Displayjobs({ }: DisplayJobProps) {
  const dispatch = useDispatch();
  const newFilterJobs = useSelector(selectJobs);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setJobs(data));
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  const handleFilterRole = () => {
    dispatch(setName("Frontend"));
  };
  const handleFilterLevel = () => {
    dispatch(setName("junior"));
  };
  const handleFilterPosition = () => {
    dispatch(setName("Worldwide"));
  };
  const functionForSearchFunction = (e: React.ChangeEvent<HTMLInputElement>) =>{
    dispatch(setName(e.target.value))
  }
  const handleFilterClear = () => {
    dispatch(setName(""));
  }
  return (
    <>
      <button onClick={handleFilterRole}>Role</button>
      <button onClick={handleFilterLevel}>Level</button>
      <button onClick={handleFilterPosition}>Position</button>
      <button onClick={handleFilterClear}>Clear</button>
      <Searchbar searchFunction={functionForSearchFunction}  />
      <ul>
        {newFilterJobs.map((item: any) => (
          <AllJobs key={item.id} {...item} />
          
        ))}
        
         
        
      </ul>
    </>
  );
}

// const filterArray = jobs.filter((job) =>
//   [
//     job.company,
//     job.position,
//     job.role,
//     job.level,
//     job.contract,
//     job.location,
//     ...job.languages,
//     ...job.tools,
//   ].some((field) => field.toLowerCase().includes(searchWord.toLowerCase()))
// );
