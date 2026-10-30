function WeatherStats({ current }) {

  const stats = [
    {
      label: "Humidity",
      value: `${current.humidity}%`,
      icon: "💧"
    },
    {
      label: "Wind Speed",
      value: `${current.windSpeed} km/h`,
      icon: "💨"
    },
    {
      label: "Precipitation",
      value: `${current.precipitation}%`,
      icon: "🌧️"
    },
    {
      label: "UV Index",
      value: current.uvIndex,
      icon: "☀️"
    },
    {
      label: "Visibility",
      value: `${current.visibility} km`,
      icon: "👁️"
    },
    {
      label: "Pressure",
      value: `${current.pressure} hPa`,
      icon: "🌡️"
    },
    {
      label: "Cloud Cover",
      value: `${current.cloudCover}%`,
      icon: "☁️"
    }
  ]

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Weather Details
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-800 rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>

              <span className="text-xl">
                {stat.icon}
              </span>
            </div>

            <p className="text-2xl font-semibold text-white mt-3">
              {stat.value}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default WeatherStats