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
    { observed: "Jul 18, 2026 · 09:14", severity: "Watch", code: "DEMO_12V_LOW", system: "12V battery", message: "Synthetic resting-voltage threshold crossed; cleared on next drive.", mileage: 41702.1 },
    { observed: "Jun 02, 2026 · 16:51", severity: "Watch", code: "DEMO_TIRE_SPREAD", system: "Tires", message: "Synthetic pressure spread exceeded the screening threshold.", mileage: 40884.7 }
  ]
});
