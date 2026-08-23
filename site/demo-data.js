window.RAMBO_DEMO_DATA = Object.freeze({
  synthetic: true,
  overall: "Good",
  summary: "All monitored systems are within the demonstration baseline. No active warnings are present.",
  odometerMiles: 42184.6,
  freshnessMinutes: 4,
  samples: 384,
  alerts: [],
  hybrid: "NORMAL",
  primaryBattery: { soc: 73, voltage: 12.54 },
  maintenance: { oilLife: 81, coolantC: 91, outsideC: 24.5, fuelLevel: 62 },
  tires: [
    { wheel: "Front left", kpa: 241, placardKpa: 240 },
    { wheel: "Front right", kpa: 243, placardKpa: 240 },
    { wheel: "Rear left", kpa: 240, placardKpa: 240 },
    { wheel: "Rear right", kpa: 242, placardKpa: 240 }
  ],
  repair: { component: "Front suspension service", mileage: 40000, note: "Synthetic post-service trend baseline." },
  engine: { state: "RUNNING", rpm: 1380 },
  transmission: { gear: "DRIVE", torqueNm: 86 },
  trends: {
    batterySoc: [78,77,76,76,75,74,74,73,73,73,72,73],
    batteryVoltage: [12.61,12.58,12.56,12.59,12.55,12.53,12.52,12.55,12.51,12.54,12.52,12.54],
    coolantC: [28,39,52,67,79,86,90,92,91,91,90,91],
    transmissionTorqueNm: [0,18,42,76,104,88,61,94,72,47,102,86]
  },
  events: [
    { time: "14:42:18", kind: "SYNC", tone: "info", message: "Synthetic snapshot received · 46 metric families" },
    { time: "14:42:18", kind: "HEALTH", tone: "good", message: "Hybrid NORMAL · no active rules" },
    { time: "14:42:16", kind: "POWER", tone: "info", message: "Engine 1,380 rpm · coolant 91°C · transmission DRIVE" },
    { time: "14:42:16", kind: "BATTERY", tone: "good", message: "12V system 73% · 12.54 V" },
    { time: "14:42:15", kind: "TIRES", tone: "good", message: "241 · 243 · 240 · 242 kPa · 3 kPa spread" },
    { time: "14:27:03", kind: "BASELINE", tone: "note", message: "2,184.6 mi accumulated since synthetic service baseline" }
  ],
  diagnostics: [
    { observed: "Jul 18, 2026 · 09:14", resolved: "Jul 18 · 09:51", severity: "Watch", code: "DEMO_12V_LOW", system: "12V battery", message: "Synthetic resting-voltage threshold crossed; cleared on next drive.", action: "Monitor the next resting readings; test the battery if this repeats.", recurrences: 2, mileage: 41702.1 },
    { observed: "Jun 02, 2026 · 16:51", resolved: "Jun 03 · 08:20", severity: "Watch", code: "DEMO_TIRE_SPREAD", system: "Tires", message: "Synthetic pressure spread exceeded the screening threshold.", action: "Recheck all four tires cold and correct them to the door placard.", recurrences: 1, mileage: 40884.7 }
  ],
  trips: [
    { when: "Aug 21 · Evening", miles: 28.4, mpg: 41.2, electricPercent: 18, regenerated: 9.4, maxCoolantC: 93, status: "Strong", insight: "Best efficiency this week; temperature remained stable." },
    { when: "Aug 20 · Morning", miles: 4.1, mpg: 27.8, electricPercent: 9, regenerated: 1.1, maxCoolantC: 72, status: "Review", insight: "Short cold-start trip lowered efficiency and added little 12V recovery time." },
    { when: "Aug 19 · Afternoon", miles: 17.6, mpg: 38.9, electricPercent: 15, regenerated: 5.8, maxCoolantC: 91, status: "Normal", insight: "Typical mixed-driving baseline with no anomalies." },
    { when: "Aug 18 · Evening", miles: 11.3, mpg: 35.4, electricPercent: 21, regenerated: 4.7, maxCoolantC: 90, status: "Normal", insight: "Highest electric contribution in the current sample." }
  ],
  tripSummary: { weeklyMpg: 37.6, priorWeeklyMpg: 35.4, shortTripCount: 5, totalMiles: 126.8 }
});
