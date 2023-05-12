import "./chart.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Chart() {
  const percentage = 77;
  return (
    <div className="chart">
      <div className="chart-top">
        <div className="chart-title">Total</div>
        <MoreVertIcon className="kebab" />
      </div>
      <div className="chart-bottom">
        <div className="pro-bar">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
            styles={{
              root: {},
              path: {
                stroke: `rgba(34, 197, 34, ${percentage / 100})`,

                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },

              trail: {
                stroke: "#d6d6d6",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#3EC33E",
                fontSize: "14px",
              },
              background: {
                fill: "#3e98c7",
              },
            }}
          />
        </div>
        <p className="title">Today's Total Sales</p>
        <p className="amount">$420</p>
        <p className="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, id.</p>
      </div>
    </div>
  );
}
