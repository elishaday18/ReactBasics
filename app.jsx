function Application(props) {
    return (
        < div className = "scoreboard" >
            
            <div className="header">
                <h1>{props.title}</h1></div>
        </div >
    );
}
ReactDOM.render(<Application />, document.getElementById('container'));