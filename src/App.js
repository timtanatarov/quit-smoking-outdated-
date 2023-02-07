import './App.css';
import Clock from "./Components/Clock/Clock";
import React from "react";
import Facts from "./Components/Facts/Facts";
import Profile from "./Components/Profile/Profile";

const dataFacts = [
    'Вы проживете дольше.',
    'Здоровье будет лучше.',
    'Существенно снизится риск тяжелых хронических заболеваний, вызванных потреблением табака.',
    'Вам гораздо легче дышать, легкие сильнее и чище.',
];

const App = () => {
    return (
        <div className="App">
            <div>
                <Profile />
            </div>
            <div>
                <Facts dataFacts={dataFacts}/>
            </div>
            <div>
                <Clock/>
            </div>
        </div>
    );
}

export default App;
