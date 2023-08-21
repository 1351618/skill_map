// TODO skill_map.tsx

import React, { useState } from "react";
import "./skill_map.css";

function SkillMap() {
    // const [isUserWindow, setUserWindow] = useState(0);
    return (
        <div className="skill-map">
            <div className="skill-map__start">
                <button>
                    <p>дата начала</p>
                    <p>10.08.23</p>
                </button>
            </div>
            <div className="skill-map__sektion">
                <button>
                    <p>python</p>
                    <p>10.08.23</p>
                </button>
                <span className="skill-map__sektion_progres">{`${100}%`}</span>
            </div>
            <div className="skill-map__add">
                <button>
                    <p>+</p>
                </button>
            </div>
        </div>
    );
}

export default SkillMap;
