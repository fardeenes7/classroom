import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
export default function Classes({ colorTheme }) {
  return (
    <div>
      <div className={`${colorTheme.card}`}>
        <h1 className={`text-2xl font-bold lg:text-3xl xl:text-4xl`}>
          Your Classes
        </h1>
      </div>
    </div>
  );
}
