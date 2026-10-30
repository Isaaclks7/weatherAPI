function HourlyForecast({ hourly }) {

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Sunny":
        return "☀️"
      case "Partly Cloudy":
        return "🌤️"
      case "Rain":
        return "🌧️"
      case "Cloudy":
        return "☁️"
      default:
        return "🌡️"
    }
  }

  return (
    <section className="mt-8">

      <h2 className="text-xl font-semibold text-white mb-4">
        Hourly Forecast
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">

        {hourly.map((hour) => (

          <div
            key={hour.time}
            className="bg-slate-800 rounded-xl p-4 flex flex-col items-center gap-3"
          >

            <p className="text-slate-400 text-sm">
              {hour.time}
            </p>

            <span className="text-3xl">
              {getWeatherIcon(hour.condition)}
            </span>

            <p className="text-white text-xl font-semibold">
              {hour.temperature}°
            </p>

            <p className="text-blue-400 text-xs">
              {hour.precipitation}% rain
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default HourlyForecast