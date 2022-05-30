import React from "react";
import { Link } from "react-router-dom";

export default function HomeCard({ title, text, page, pageLink }) {
  return (
    <div className="home-card">
      <p className="home-card-title">{title}</p>
      <p className="home-card-text">{text}</p>
      <Link to={page}>{pageLink}</Link>
    </div>
  );
}
