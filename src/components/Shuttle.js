const Shuttle = (shuttle) => {

    return (
        <div className={'shuttle'}>
            {shuttle.shuttle.flight_number}) {shuttle.shuttle.mission_name} {shuttle.shuttle.launch_year}
            <img src={shuttle.shuttle.links.mission_patch_small} alt={shuttle.shuttle.mission_name}/>
        </div>
    );
};

export default Shuttle;