function DailyForecast({ daily }) {

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

  const formatDate = (dateString) => {
    const date = new Date(dateString)

    return date.toLocaleDateString("en-US", {
      weekday: "long"
    })
  }

  return (
    <section className="mt-8">

      <h2 className="text-xl font-semibold text-white mb-4">
        7-Day Forecast
      </h2>

      <div className="bg-slate-800 rounded-2xl p-5">

        {daily.map((day) => (

          <div
            key={day.date}
            className="grid grid-cols-4 items-center py-4 border-b border-slate-700 last:border-0"
          >

            <p className="text-white font-medium">
              {formatDate(day.date)}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-2xl">
                {getWeatherIcon(day.condition)}
              </span>

              <span className="text-slate-300 text-sm hidden sm:block">
                {day.condition}
              </span>
            </div>

            <p className="text-blue-400 text-sm text-center">
              {day.precipitation}%
            </p>

            <div className="flex justify-end gap-3">
              <span className="text-white font-semibold">
                {day.high}°
              </span>

              <span className="text-slate-400">
                {day.low}°
              </span>
            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default DailyForecast