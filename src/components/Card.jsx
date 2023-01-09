import MicIcon from "../icons/MicIcon.jsx";
import MoreIcon from "../icons/MoreIcon.jsx";
import { viewsFormatter } from "../lib/formatter.js";

export default function Card({ card: { photo, title, views, episode, paid } }) {
    return (
        <div className="card" style={{ backgroundImage: `url(${photo})` }}>
            <div className="card-header">
                <div className="stats">
                    <MicIcon />
                    {viewsFormatter.format(views)}
                </div>
                <button className="button icon-button">
                    <MoreIcon />
                </button>
            </div>
            <div className="card-footer">
                <h3>{title}</h3>
            </div>
            <span className="episode">
                {episode}
            </span>
            {
                paid
                    ? (
                        <div className="card-ribbon">Paid</div>
                    )
                    : null
            }
        </div>
    )
}