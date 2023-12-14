"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Login from "./login/page";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
