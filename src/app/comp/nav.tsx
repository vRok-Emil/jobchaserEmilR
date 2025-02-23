"use client";
import Link from "next/link";
import { JSX } from "react";
import { DarkModeToggleButton } from "./darkmode";



export default function Nav(): JSX.Element {


  
  return (
    <nav>
      <Link href="/jobs">Jobs</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/login">Log in </Link>
      <DarkModeToggleButton/>
    </nav>
  );
}
