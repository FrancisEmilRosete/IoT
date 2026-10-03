"use client";
import React, { useState } from "react";
import {
  Info, BookOpen, Thermometer, ZapOff, Snowflake, Fan, X,
  AlertTriangle, CheckCircle, Wrench, Activity, Users, Power, PowerOff,
  FileText, Search, TrendingUp, Stethoscope, ChevronLeft,
  ShieldCheck, Cpu, Wifi, Database, LineChart, Zap, Plus, Minus,
  AlertOctagon, ShieldAlert, PhoneCall, Check
} from "lucide-react";

export default function Home() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [temperature, setTemperature] = useState(24);
  const [activeSidePanel, setActiveSidePanel] = useState<string | null>(null);
  const [selectedAnalyticsLevel, setSelectedAnalyticsLevel] = useState<string | null>(null);

  const [isFault, setIsFault] = useState(false);
  const [isWiringModalOpen, setIsWiringModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const displayTemp = isFault ? 200 : temperature;

  // AC Unit State
  const [acPower, setAcPower] = useState(true);
  const [acMode, setAcMode] = useState<'auto' | 'manual'>('auto');
  const [acTemp, setAcTemp] = useState(22);

  React.useEffect(() => {
    if (acMode === 'auto') {
      if (displayTemp <= 20) {
        setAcTemp(24);
      } else if (displayTemp >= 21 && displayTemp <= 26) {
        setAcTemp(22);
      } else if (displayTemp >= 27) {
        setAcTemp(18);
      }
    }
  }, [displayTemp, acMode]);

  const isHigh = displayTemp >= 28 && !isFault;

  const openSidePanel = (panelName: string) => {
    setActiveSidePanel(panelName);
    setSelectedAnalyticsLevel(null);
  };
  const closeSidePanel = () => {
    setActiveSidePanel(null);
    setSelectedAnalyticsLevel(null);
  };

  if (!isDashboardOpen) {
    return (
      <main className="min-h-screen w-full bg-black overflow-hidden flex items-center justify-center relative font-sans text-slate-800">
        {/* Scaled Background to crop out baked-in blank space at the bottom of the PNG */}
        <div
          className="absolute inset-x-0 top-0 bottom-[-25%] z-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "url('/classroom_bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Text Layer mapped over the background image's chalkboard */}
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-start pt-[20vh] md:pt-[25vh]">
          <div className="text-center max-w-5xl px-8 flex flex-col items-center">
            <span className="inline-block border border-white/30 text-white/70 text-[10px] md:text-xs font-bold px-4 py-1.5 mb-6 md:mb-8 tracking-[0.2em] uppercase rounded-sm font-sans drop-shadow-md">
              Group 4
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-10 tracking-wide drop-shadow-lg">
              Analytics Question
            </h1>

            <p className="text-[#f1f5f9] font-medium text-lg md:text-2xl leading-loose md:leading-loose text-center italic px-4 drop-shadow-md max-w-4xl">
              "How can classroom temperature and environmental telemetry detect overheating conditions early enough to trigger automated cooling or alert facility staff before student safety and learning are compromised?"
            </p>
          </div>
        </div>

        {/* Desktop App Icon */}
        <div
          className="absolute top-6 left-6 flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-300 w-28 group z-10"
          onClick={() => setIsDashboardOpen(true)}
        >
          <div className="bg-white p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 relative border border-slate-200">
            <Activity className="w-10 h-10 text-[#0f6b49]" strokeWidth={1.5} />


          </div>
          <span className="mt-3 text-[11px] font-bold text-center text-slate-100 group-hover:text-white leading-tight">
            Temp. Alert<br />System
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-black overflow-hidden flex items-center justify-center relative font-sans text-slate-800">
      {/* Scaled Background to crop out baked-in blank space at the bottom of the PNG */}
      <div
        className="absolute inset-x-0 top-0 bottom-[-25%] z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "url('/classroom_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Text Layer mapped over the background image's chalkboard */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-start pt-[20vh] md:pt-[25vh]">
        <div className="text-center max-w-5xl px-8 flex flex-col items-center">
          <span className="inline-block border border-white/30 text-white/70 text-[10px] md:text-xs font-bold px-4 py-1.5 mb-6 md:mb-8 tracking-[0.2em] uppercase rounded-sm font-sans drop-shadow-md">
            Group 4
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-10 tracking-wide drop-shadow-lg">
            Analytics Question
          </h1>

          <p className="text-[#f1f5f9] font-medium text-lg md:text-2xl leading-loose md:leading-loose text-center italic px-4 drop-shadow-md max-w-4xl">
            "How can classroom temperature and environmental telemetry detect overheating conditions early enough to trigger automated cooling or alert facility staff before student safety and learning are compromised?"
          </p>
        </div>
      </div>

      {/* Blur Overlay for Dashboard Open State */}
      <div className="absolute inset-0 z-[5] bg-slate-900/40 backdrop-blur-md pointer-events-none transition-all duration-300"></div>

      {/* Parent Flex Container */}
      <div className="flex flex-row justify-center items-stretch gap-6 w-full max-w-[1600px] px-8 z-10 mx-auto">

        {/* Main Dashboard Container */}
        <div className={`h-[650px] bg-white rounded-2xl shadow-2xl flex overflow-hidden border border-slate-200 relative shrink-0 transition-all duration-300 ${activeSidePanel ? 'w-[60%]' : 'w-[1000px] max-w-[95vw]'}`}>

          {/* Left Section (1/6 Width) - Override Simulator */}
          <div className="w-1/6 border-r border-slate-100 flex flex-col items-center py-8 bg-slate-50/30">
            <h2 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-8 text-center px-2">
              OVERRIDE<br />SIMULATOR
            </h2>

            <div className="flex-1 flex flex-col items-center justify-between w-full py-4">
              <div className="font-bold text-red-600 text-xs">40°C</div>

              <div className="relative h-full w-12 my-4 flex justify-center">
                {/* Slider track background */}
                <div className="absolute inset-y-0 w-1.5 bg-slate-200 rounded-full overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full transition-all duration-300 ${isHigh ? 'bg-red-600' : 'bg-[#0f6b49]'}`}
                    style={{ height: `${((temperature - 15) / 25) * 100}%` }}
                  ></div>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={temperature}
                  onChange={(e) => setTemperature(parseInt(e.target.value))}
                  className="absolute inset-y-0 w-full h-full appearance-none bg-transparent cursor-pointer opacity-0"
                  style={{ WebkitAppearance: 'slider-vertical', writingMode: 'bt-lr' as any }}
                />
              </div>

              <div className="font-bold text-[#0f6b49] text-xs">15°C</div>
            </div>
            
            <button 
              onClick={() => setIsFault(!isFault)}
              className={`mt-6 w-11/12 mx-auto py-2 rounded-lg border-2 text-[10px] font-bold uppercase tracking-wider flex flex-col items-center justify-center gap-1 transition-all ${
                isFault 
                  ? 'bg-slate-800 border-slate-800 text-white shadow-inner' 
                  : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-800 hover:text-slate-800'
              }`}
            >
              <AlertOctagon className="w-5 h-5 mb-1" />
              <span className="text-center leading-tight">SIMULATE<br/>FAULT</span>
            </button>
          </div>

          {/* Right Section (5/6 Width) */}
          <div className="w-5/6 flex flex-col bg-white">

            {/* Top Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-sm">
                  <X className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                    Temp. Alert System
                  </h2>
                  {isFault ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800 text-[10px] font-bold text-white tracking-wider ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      DATA VALIDATION BLOCKED
                    </span>
                  ) : isHigh ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-200 bg-white text-[10px] font-bold text-red-600 tracking-wider ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      ACTION REQUIRED
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#0f6b49]/20 bg-white text-[10px] font-bold text-[#0f6b49] tracking-wider ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f6b49]"></span>
                      LIVE - NORMAL
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openSidePanel('Report')}
                  className={`px-4 py-2 font-bold rounded-lg text-xs transition-colors flex items-center gap-2 ${activeSidePanel === 'Report' ? 'bg-[#0f6b49] text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  <FileText className="w-4 h-4" /> Report
                </button>
                <button
                  onClick={() => openSidePanel('Information')}
                  className={`p-2 rounded-lg transition-colors ${activeSidePanel === 'Information' ? 'bg-[#0f6b49] text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  <Info className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openSidePanel('Rules')}
                  className={`p-2 rounded-lg transition-colors ${activeSidePanel === 'Rules' ? 'bg-[#0f6b49] text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                  <BookOpen className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsDashboardOpen(false)}
                  className="p-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-colors ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Main Content */}
            <div className="flex-1 p-8 flex flex-col justify-center">

              {/* Cards Grid */}
              <div className="grid grid-cols-3 gap-4">

                {/* Card 1: Room Sensor */}
                <div className={`rounded-xl border p-6 flex flex-col min-h-[220px] transition-colors ${
                  isFault ? 'bg-slate-50 border-slate-300' :
                  isHigh ? 'border-red-200 bg-red-50/50' : 'border-[#0f6b49]/20 bg-[#0f6b49]/5'
                }`}>
                  <div className="flex items-center w-full mb-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">ROOM SENSOR</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 my-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isFault ? 'bg-slate-200 text-slate-600' :
                      isHigh ? 'bg-red-100 text-red-500' : 'bg-emerald-100 text-[#0f6b49]'
                    }`}>
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div className={`text-6xl font-black tracking-tighter ${
                      isFault ? 'text-slate-800' :
                      isHigh ? 'text-red-600' : 'text-slate-800'
                    }`}>
                      {displayTemp}<span className="text-3xl ml-1 align-top">°C</span>
                    </div>
                  </div>

                  <div className={`text-center font-bold mt-auto uppercase tracking-wider ${
                    isFault ? 'text-[9px] text-slate-600' :
                    isHigh ? 'text-[11px] text-red-500' : 'text-[11px] text-slate-500'
                  }`}>
                    {isFault ? 'ERRATIC SENSOR READING / DAMAGED WIRE' : isHigh ? 'ABOVE SAFE OPERATING RANGE' : 'WITHIN TARGET RANGE'}
                  </div>
                </div>

                {/* Card 2: AC Unit */}
                <div className={`rounded-xl border p-6 flex flex-col min-h-[220px] transition-colors ${
                  !acPower ? 'border-slate-200 bg-slate-50/50 opacity-80' : 
                  isHigh ? 'border-red-200 bg-red-50/50' : 'border-slate-200 bg-white'
                }`}>
                  <div className="flex items-center w-full mb-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AIR CONDITIONER</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 my-4 h-[100px]">
                    {isFault ? (
                      <div className="flex flex-col items-center gap-4 mt-2">
                        <div className="text-xl font-black tracking-widest text-slate-500 text-center uppercase">
                          SYSTEM<br/>LOCKOUT
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center px-4">
                          Telemetry rejected.<br/>Maintaining safe state.
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-4">
                        {acMode === 'manual' && acPower && (
                          <button 
                            onClick={() => setAcTemp(prev => prev - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        )}
                        
                        <div className={`text-6xl font-black tracking-tighter transition-colors ${!acPower ? 'text-slate-400' : isHigh ? 'text-red-600' : 'text-slate-800'}`}>
                          {acPower ? acTemp : '--'}<span className="text-3xl ml-1 align-top">°C</span>
                        </div>

                        {acMode === 'manual' && acPower && (
                          <button 
                            onClick={() => setAcTemp(prev => prev + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-row justify-between items-center w-full mt-auto pt-4 border-t border-slate-100">
                    {/* Power Toggle */}
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setAcPower(!acPower)}
                        className={`w-10 h-6 rounded-full p-1 transition-colors relative flex items-center ${acPower ? 'bg-emerald-500' : 'bg-slate-300'}`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${acPower ? 'translate-x-4' : 'translate-x-0'}`} />
                      </button>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Power</span>
                    </div>
                    
                    {/* Mode Toggle */}
                    <button 
                      onClick={() => {
                        if (acPower) setAcMode(acMode === 'auto' ? 'manual' : 'auto')
                      }}
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors ${
                        !acPower ? 'bg-slate-100 text-slate-400 cursor-not-allowed' :
                        acMode === 'manual' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {acMode === 'auto' ? 'Auto' : 'Manual'}
                    </button>
                  </div>
                </div>

                {/* Card 3: Ventilation */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col min-h-[220px]">
                  <div className="flex items-center w-full mb-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">EMERGENCY VENTILATION</span>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 my-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-slate-50 ${isHigh && !isFault ? 'text-emerald-500' : 'text-slate-400'}`}>
                      <Fan className={`w-7 h-7 ${isHigh && !isFault ? 'animate-[spin_1s_linear_infinite]' : ''}`} />
                    </div>
                    <div className="text-lg font-bold uppercase tracking-wide text-center leading-tight text-slate-800">
                      {isHigh && !isFault ? (
                        <>EMERGENCY<br />EXHAUST</>
                      ) : (
                        <>STANDBY<br />MODE</>
                      )}
                    </div>
                  </div>

                  <div className={`text-center mt-auto font-medium uppercase tracking-wider ${isFault ? 'text-[9px] text-slate-500 leading-tight' : 'text-[11px] text-slate-500'}`}>
                    {isFault ? 'Action: Block invalid reading at the Fog Gateway; prevent false fire alarm.' : isHigh ? 'Extraction at full capacity' : 'Ready for activation'}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="px-8 pb-8 pt-0">
              {isFault ? (
                <div className="w-full rounded-xl bg-slate-900 text-white p-4 px-6 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold tracking-wide text-base text-red-400">THREAT BLOCKED: HARDWARE FAULT DETECTED</span>
                      <span className="text-white/80 text-[11px]">Invalid telemetry isolated at Edge Gateway. Automated climate responses suspended.</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsWiringModalOpen(true)}
                    className="bg-white text-slate-900 font-bold text-[10px] uppercase px-4 py-2.5 rounded flex items-center gap-2 hover:bg-slate-200 transition-colors shrink-0 tracking-wider"
                  >
                    <Wrench className="w-3 h-3" /> INSPECT WIRING
                  </button>
                </div>
              ) : isHigh ? (
                <div className="w-full rounded-xl bg-[#dc2626] text-white p-4 px-6 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold tracking-wide text-base">CALL EMERGENCY MAINTENANCE</span>
                      <span className="text-white/80 text-[11px]">Breaker fault detected - Exhaust engaged</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsMaintenanceModalOpen(true)}
                    className="bg-white text-[#dc2626] font-bold text-[10px] uppercase px-4 py-2.5 rounded flex items-center gap-2 hover:bg-slate-50 transition-colors shrink-0 tracking-wider"
                  >
                    <Wrench className="w-3 h-3" /> MAINTENANCE
                  </button>
                </div>
              ) : (
                <div className="w-full rounded-xl bg-[#0f6b49] text-white p-4 px-6 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold tracking-wide text-base">SYSTEM NORMAL</span>
                    <span className="text-white/80 text-[11px]">All monitored parameters are stable</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Right Side Panel */}
        {activeSidePanel && (
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 border-t-4 border-t-slate-800 w-[40%] flex flex-col overflow-hidden animate-in slide-in-from-right-8 fade-in duration-300 shrink-0 relative z-10 h-[650px]">
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-slate-100 bg-white">
              <div className="flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                  {activeSidePanel === 'Report' && 'System Report'}
                  {activeSidePanel === 'Information' && 'System Info'}
                  {activeSidePanel === 'Rules' && 'Threshold Rules'}
                  {!['Report', 'Information', 'Rules'].includes(activeSidePanel) && activeSidePanel}
                </h3>
                {activeSidePanel === 'Report' && (
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                    4 Levels of Analytics
                  </span>
                )}
              </div>
              <button
                onClick={closeSidePanel}
                className="p-2 bg-white hover:bg-slate-200 rounded-lg transition-colors text-slate-500 shadow-sm border border-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 overflow-y-auto">
              {activeSidePanel === 'Rules' ? (
                <div className="flex flex-col gap-4">
                  {/* LOW Card */}
                  <div className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-l-blue-400 border-t border-r border-b border-blue-100 flex flex-col gap-2 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-blue-700">LOW (&lt;20°C)</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-100 px-2 py-0.5 rounded-full">Overcooled / Energy Waste</span>
                    </div>
                    <p className="text-sm text-blue-900 mt-1">
                      <span className="font-semibold text-blue-800">Action:</span> Automatically lower AC fan speed or raise thermostat setting to 23°C.
                    </p>
                  </div>

                  {/* NORMAL Card */}
                  <div className="p-4 bg-emerald-50/50 rounded-xl border-l-4 border-l-emerald-400 border-t border-r border-b border-emerald-100 flex flex-col gap-2 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-emerald-700">NORMAL (20°C - 26°C)</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Optimal Comfort</span>
                    </div>
                    <p className="text-sm text-emerald-900 mt-1">
                      <span className="font-semibold text-emerald-800">Action:</span> Log data every 5-15 minutes; display green status on classroom dashboard.
                    </p>
                  </div>

                  {/* HIGH Card */}
                  <div className="p-4 bg-red-50/50 rounded-xl border-l-4 border-l-red-500 border-t border-r border-b border-red-100 flex flex-col gap-2 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-red-700">HIGH (&gt;28°C)</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded-full">Alert / Unsafe</span>
                    </div>
                    <p className="text-sm text-red-900 mt-1">
                      <span className="font-semibold text-red-800">Action:</span> Automatically turn on ventilation fans; send priority notification to facilities maintenance.
                    </p>
                  </div>

                  {/* ERROR Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default flex flex-col gap-2 w-full border border-slate-100 border-l-4 border-l-slate-800">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-slate-800">ERROR (e.g., 200°C)</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">Erratic Sensor Reading / Damaged Wire</span>
                    </div>
                    <p className="text-sm text-slate-800 mt-1">
                      <span className="font-semibold text-slate-900">Action:</span> Block invalid reading at the Fog Gateway via Validation Filter; prevent false fire alarm.
                    </p>
                  </div>
                </div>
              ) : activeSidePanel === 'Report' ? (
                <div className="flex flex-col gap-4 w-full">

                  {/* Descriptive Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default flex flex-col gap-1 w-full border border-slate-100 border-l-4 border-l-blue-500">
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">
                      Descriptive - What Happened?
                    </span>
                    <p className="text-sm text-slate-800 leading-snug">
                      Room 304 reached 31.5°C at 1:15 PM.
                    </p>
                  </div>

                  {/* Diagnostic Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default flex flex-col gap-1 w-full border border-slate-100 border-l-4 border-l-amber-500">
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                      Diagnostic - Why Did It Happen?
                    </span>
                    <p className="text-sm text-slate-800 leading-snug">
                      The air conditioning unit tripped due to a blown breaker under peak afternoon heat.
                    </p>
                  </div>

                  {/* Predictive Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default flex flex-col gap-1 w-full border border-slate-100 border-l-4 border-l-purple-500">
                    <span className="text-[10px] font-bold text-purple-500 uppercase tracking-wider">
                      Predictive - What Will Happen?
                    </span>
                    <p className="text-sm text-slate-800 leading-snug">
                      Indoor temperature will climb to 36°C within 35 minutes, violating occupational comfort and safety standards.
                    </p>
                  </div>

                  {/* Prescriptive Card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default flex flex-col gap-1 w-full border border-slate-100 border-l-4 border-l-emerald-500">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                      Prescriptive - What Should We Do?
                    </span>
                    <p className="text-sm text-slate-800 leading-snug">
                      Automatically switch on backup exhaust fans, send an urgent dispatch alert to the facility technician with breaker panel details, and prompt the instructor to open windows.
                    </p>
                  </div>

                </div>
              ) : activeSidePanel === 'Information' ? (
                <div className="flex flex-col w-full">
                  <div className="pb-4 pt-2">
                    <h4 className="font-bold text-slate-800 text-base mb-1">The Trusted Data Pipeline</h4>
                    <p className="text-sm text-slate-500">Every step must maintain data integrity so no bad readings trigger an incorrect response:</p>
                  </div>

                  <div className="flex flex-col relative mt-2 pl-2">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="flex flex-row gap-4 relative z-10 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <Thermometer className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Sensor</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">DHT22 or digital temperature sensor records temperature and humidity every 10 seconds.</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-row gap-4 relative z-10 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Validate (Edge)</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">Check for impossible readings (e.g., 200°C) and missing timestamps before accepting the packet.</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-row gap-4 relative z-10 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <Cpu className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Process (Edge/Fog Gateway)</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">Compute 1-minute rolling averages and remove electronic noise.</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-row gap-4 relative z-10 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <Wifi className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Transfer</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">Transmit encrypted MQTT packets over the secure campus IoT Wi-Fi/LoRaWAN network.</p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-row gap-4 relative z-10 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <Database className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Store (Cloud/Server)</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">Save clean data in a campus time-series database with room metadata.</p>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="flex flex-row gap-4 relative z-10 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <LineChart className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Analyze</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">Compare values against safety thresholds and run predictive trend models.</p>
                      </div>
                    </div>

                    {/* Step 7 */}
                    <div className="flex flex-row gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-sm font-bold text-slate-800">Authorized Action</span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">Low-risk actions execute automatically; critical alerts prompt human facility staff for confirmation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 gap-4 mt-12">
                  <Info className="w-12 h-12 text-slate-300" />
                  <p className="text-lg font-bold text-slate-700">Select a panel</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Wiring Inspection Modal */}
      {isWiringModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-slate-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-2">WIRING DIAGNOSTICS</h3>
            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 font-mono text-xs text-slate-600 flex flex-col gap-2">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>SENSOR: TMP-04</span>
                <span className="text-red-500 font-bold">FAULT DETECTED</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>VOLTAGE:</span>
                <span>0.02V (ERR)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>RESISTANCE:</span>
                <span>Infinite (OPEN)</span>
              </div>
              <div className="flex justify-between">
                <span>DIAGNOSIS:</span>
                <span className="font-bold">Wire severed at junction box</span>
              </div>
            </div>
            <div className="flex w-full gap-3 mt-4">
              <button 
                onClick={() => setIsWiringModalOpen(false)}
                className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setIsFault(false);
                  setTemperature(24);
                  setIsWiringModalOpen(false);
                }}
                className="flex-1 py-3 px-4 bg-[#0f6b49] hover:bg-[#0c593c] text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" /> Resolve Issue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Maintenance Call Modal */}
      {isMaintenanceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-slate-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-2 uppercase text-center">Dispatch Emergency<br/>HVAC Technician?</h3>
            <p className="text-slate-500 text-center text-sm mb-6 mt-2">
              The temperature has exceeded critical thresholds. Approving this will immediately dispatch a technician to inspect AHU-02.
            </p>
            <div className="flex w-full gap-3 mt-2">
              <button 
                onClick={() => setIsMaintenanceModalOpen(false)}
                className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setIsMaintenanceModalOpen(false);
                }}
                className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Dispatch Now
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
