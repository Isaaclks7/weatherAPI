import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function HistoricalWeather({ historical }) {

  const chartData = historical.map((day) => ({
    date: day.date,
    temperature: day.temperature
  }))

  return (
    <section className="mt-8">

      <h2 className="text-xl font-semibold text-white mb-4">
        Historical Weather
      </h2>

      <div className="bg-slate-800 rounded-2xl p-5">

        <h3 className="text-slate-300 mb-6">
          Average Temperature
        </h3>

        <div className="w-full h-64">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={chartData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#475569"
              />

              <XAxis
                dataKey="date"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#38bdf8"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  )
}

export default HistoricalWeather