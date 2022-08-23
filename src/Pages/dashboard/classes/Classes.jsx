/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import ChildClass from "./ChildClass";
import MainClass from "./MainClass";

export default function Classes({}) {
  const subpage = useParams().subpage;
  console.log(subpage);
  console.log(subpage === undefined);

  return subpage === undefined ? <MainClass /> : <ChildClass />;
}
