import './App.css';
import Clock from "./Components/Clock/Clock";
import React from "react";
import Facts from "./Components/Facts/Facts";

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
                <Facts dataFacts={dataFacts}/>
            </div>
            <div>
                <Clock/>
            </div>
        </div>
    );
}

export default App;
