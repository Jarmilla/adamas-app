import * as wi from "weather-icons-react";

export default function WeatherIcon({code, ...props}) {
	switch (code) {
		case "01d": return <wi.WiDaySunny {...props}/>;
		case "01n": return <wi.WiNightClear {...props}/>;
		//clear sky
		case "02d": return <wi.WiDaySunnyOvercast {...props}/>;
		case "02n": return <wi.WiNightAltPartlyCloudy {...props}/>;
		//few clouds
		case "03d": return <wi.WiDayCloudy {...props}/>;
		case "03n": return <wi.WiNightAltCloudy {...props}/>;
		//scattered clouds
		case "04d": return <wi.WiCloudy {...props}/>;
		case "04n": return <wi.WiCloudy {...props}/>;
		//broken clouds
		case "09d": return <wi.WiDayShowers {...props}/>;
		case "09n": return <wi.WiNightAltShowers {...props}/>;
		//shower rain
		case "10d": return <wi.WiRain {...props}/>;
		case "10n": return <wi.WiRain {...props}/>;
		//rain
		case "11d": return <wi.WiThunderstorm {...props}/>;
		case "11n": return <wi.WiThunderstorm {...props}/>;
		//thunderstorm
		case "13d": return <wi.WiDaySnow {...props}/>;
		case "13n": return <wi.WiNightAltSnow {...props}/>;
		//snow
		case "50d": return <wi.WiDayFog {...props}/>;
		case "50n": return <wi.WiFog {...props}/>;
		//mist
		default: return <wi.WiNA {...props}/>;
	};
}