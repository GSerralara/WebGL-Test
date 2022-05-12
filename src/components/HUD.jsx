import './../styles/HUD.css'
function HUD({initTravel}) {
    return (
        <div id="HUD">
            <button onClick={initTravel}>Go to Planet 2</button>
        </div>
    );
}
export default HUD;