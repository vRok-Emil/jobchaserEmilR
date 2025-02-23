"use client"
export interface Avjobs {
  id: number;
  company: string;
  position: string;
  role: string;
  level: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  postedAt: string;
  logo:string;
}

const AllJobs: React.FC<Avjobs> = (props) => {
  return (
    <li>
    <div className="cardHolder">
    <div className="titleAndLogo">
    <h2>{props.company}</h2>
    <img className="imgForCardHolder" src={props.logo} alt="logo"/> 

    </div>

    <div className="roleAndLevel">
        <p>Role: {props.role}</p>
        <p>Level: {props.level}</p>
        <p>Position: {props.position}</p>
    </div>
    <div className="other">
    <p>{props.postedAt}</p>
    <p>{props.contract}</p>
    <p>{props.location}</p>
    <p>{props.languages.join(" ")}</p>
    <p>{props.tools.join(" ")}</p>
    </div>
</div>
</li>
  );
};

export default AllJobs;