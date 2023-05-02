import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BlenderIcon from '@mui/icons-material/Blender';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TheatersIcon from '@mui/icons-material/Theaters';
import BiotechIcon from '@mui/icons-material/Biotech';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <HistoryEduIcon/>
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <BusinessIcon/>
        <p>Business</p>
      </div>

      <div className="sidebarOption">
        <PsychologyIcon/>
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <BlenderIcon/>
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <AudiotrackIcon/>
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <ScienceIcon/>
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <HealthAndSafetyIcon/>
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <TheatersIcon/>
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <BiotechIcon/>
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <SchoolIcon/>
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;