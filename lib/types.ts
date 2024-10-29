import React from "react";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Skill = {
  name: string;
  icon: React.ReactNode;
};
