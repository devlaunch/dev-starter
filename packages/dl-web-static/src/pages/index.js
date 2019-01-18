import React from "react";
import { withSiteData } from "react-static";
import VideoBackground from "../components/VideoBackground";

export default withSiteData(() => (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to Urban Runners</h1>
    <VideoBackground />
  </div>
));
