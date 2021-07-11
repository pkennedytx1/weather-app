export default function OpenWeatherIcon(props) {
    const { iconCode } = props;
    return(
        <div id="openWeatherIcon">
            <img id="wicon" src={iconCode ? "http://openweathermap.org/img/w/" + iconCode + ".png" : null} alt="Weather icon" />
        </div>
    )
}