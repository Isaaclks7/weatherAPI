function WeatherAlerts({ alerts }) {

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-500/10 border-red-500 text-red-400"

      case "Moderate":
        return "bg-yellow-500/10 border-yellow-500 text-yellow-400"

      case "Low":
        return "bg-blue-500/10 border-blue-500 text-blue-400"

      default:
        return "bg-slate-700 border-slate-500 text-slate-300"
    }
  }

  return (
    <section className="mt-8">

      <h2 className="text-xl font-semibold text-white mb-4">
        Weather Alerts
      </h2>

      {alerts.length === 0 ? (

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">
            No active weather alerts.
          </p>
        </div>

      ) : (

        <div className="flex flex-col gap-4">

          {alerts.map((alert) => (

            <div
              key={alert.id}
              className={`border-l-4 rounded-xl p-5 ${getSeverityStyle(alert.severity)}`}
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-lg">
                  {alert.title}
                </h3>

                <span className="text-sm font-medium">
                  {alert.severity}
                </span>

              </div>

              <p className="text-slate-300 mt-2 text-sm">
                {alert.description}
              </p>

              <p className="text-slate-400 mt-3 text-xs">
                {alert.startTime} - {alert.endTime}
              </p>

            </div>

          ))}

        </div>

      )}

    </section>
  )
}

export default WeatherAlerts