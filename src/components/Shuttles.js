import {useEffect, useState} from "react";

import Shuttle from "./Shuttle";

const Shuttles = () => {

    const [shuttles, setShuttles] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(shuttles => {
                setShuttles(shuttles.filter(shuttle => shuttle.launch_year !== '2020'));

            })

    }, [])

    return (
        <div className={'shuttles'}>
            {
                shuttles.map(value => <Shuttle key={value.flight_number}
                                               shuttle = {value}
                    />
                )
            }
        </div>
    );
};

export default Shuttles;