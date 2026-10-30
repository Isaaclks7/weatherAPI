const mockWeather = {
  location: {
    city: "Singapore",
    country: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
    timezone: "Asia/Singapore"
  },

  current: {
    temperature: 28,
    feelsLike: 32,
    condition: "Partly Cloudy",
    humidity: 78,
    windSpeed: 12,
    windDirection: "NE",
    precipitation: 20,
    uvIndex: 6,
    visibility: 10,
    pressure: 1012,
    cloudCover: 45
  },

  hourly: [
    { time: "12:00", temperature: 28, precipitation: 10, condition: "Sunny" },
    { time: "13:00", temperature: 30, precipitation: 15, condition: "Partly Cloudy" },
    { time: "14:00", temperature: 27, precipitation: 60, condition: "Rain" },
    { time: "15:00", temperature: 26, precipitation: 80, condition: "Rain" },
    { time: "16:00", temperature: 27, precipitation: 20, condition: "Cloudy" },
    { time: "17:00", temperature: 28, precipitation: 10, condition: "Sunny" }
  ],

  daily: [
    { date: "2026-10-31", condition: "Partly Cloudy", high: 31, low: 25, precipitation: 20 },
    { date: "2026-11-01", condition: "Rain", high: 29, low: 24, precipitation: 80 },
    { date: "2026-11-02", condition: "Sunny", high: 32, low: 25, precipitation: 5 },
    { date: "2026-11-03", condition: "Cloudy", high: 30, low: 24, precipitation: 30 },
    { date: "2026-11-04", condition: "Rain", high: 28, low: 23, precipitation: 90 },
    { date: "2026-11-05", condition: "Partly Cloudy", high: 31, low: 25, precipitation: 15 },
    { date: "2026-11-06", condition: "Sunny", high: 32, low: 26, precipitation: 0 }
  ],

  alerts: [
    {
      id: 1,
      title: "Heavy Rain Warning",
      description: "Heavy rainfall expected in parts of Singapore.",
      severity: "Moderate",
      startTime: "14:00",
      endTime: "17:00"
    }
  ],

  historical: [
    { date: "2026-10-28", temperature: 29, high: 31, low: 25, precipitation: 5 },
    { date: "2026-10-29", temperature: 27, high: 30, low: 24, precipitation: 40 },
    { date: "2026-10-30", temperature: 28, high: 32, low: 25, precipitation: 15 }
  ]
};

export function getWeatherByCity(city) {
  const cities = {
    singapore: mockWeather,

    tokyo: {
      ...mockWeather,
      location: {
        ...mockWeather.location,
        city: 'Tokyo',
        country: 'Japan'
      },
      current: {
        ...mockWeather.current,
        temperature: 19,
        feelsLike: 18,
        condition: 'Cloudy',
        humidity: 65
      }
    },

    london: {
      ...mockWeather,
      location: {
        ...mockWeather.location,
        city: 'London',
        country: 'United Kingdom'
      },
      current: {
        ...mockWeather.current,
        temperature: 12,
        feelsLike: 10,
        condition: 'Rain',
        humidity: 85
      }
    }
  }

  return cities[city.trim().toLowerCase()] || null
}

export default mockWeather;