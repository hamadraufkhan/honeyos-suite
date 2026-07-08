import { createFileRoute } from "@tanstack/react-router";
import wallpaper from "@/assets/wallpaper.jpg";
import architecture from "@/assets/architecture.jpg";
import {
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Volume2,
  Sun,
  BatteryFull,
  Search,
  Folder,
  FileText,
  Image as ImageIcon,
  Download,
  Settings,
  Bell,
  Palette,
  Shield,
  Globe,
  ChevronRight,
  Circle,
  Activity,
  MemoryStick,
  Network,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <div className={`${className} bg-honey-500 rounded-full flex items-center justify-center shadow-sm`}>
      <div className="size-1/2 bg-honey-900 rounded-sm rotate-45" />
    </div>
  );
}

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="size-3 rounded-full bg-red-400/70" />
      <div className="size-3 rounded-full bg-amber-400/70" />
      <div className="size-3 rounded-full bg-green-400/70" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-honey-50 font-sans text-honey-900">
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-honey-50/70 border-b border-honey-900/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-serif italic font-bold text-xl tracking-tight">HoneyOS</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
            <a href="#desktop" className="hover:opacity-100 transition">Desktop</a>
            <a href="#hive" className="hover:opacity-100 transition">The Hive</a>
            <a href="#dashboard" className="hover:opacity-100 transition">System</a>
            <a href="#docs" className="hover:opacity-100 transition">Docs</a>
          </div>
          <button className="px-5 py-2 bg-honey-900 text-honey-50 rounded-full text-sm font-medium hover:bg-honey-900/90 transition inline-flex items-center gap-2">
            <Download className="size-4" /> Download Beta
          </button>
        </div>
      </nav>

      {/* HERO + INSTALLER */}
      <section id="top" className="max-w-7xl mx-auto pt-20 pb-24 px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honey-100 text-xs font-medium tracking-wide mb-8">
          <span className="size-1.5 rounded-full bg-honey-500 animate-pulse" />
          HoneyOS 1.0 — Public Beta
        </div>
        <h1 className="font-serif italic text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.95]">
          The fluid feel<br />of gold.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-70 leading-relaxed">
          HoneyOS is a desktop environment reimagined for organic workflows and tactile interactions.
          Built on a foundation of warmth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button className="px-6 py-3 bg-honey-900 text-honey-50 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:translate-y-[-1px] transition">
            <Download className="size-4" /> Install HoneyOS
          </button>
          <button className="px-6 py-3 rounded-full text-sm font-medium border border-honey-900/15 hover:bg-honey-900/5 transition">
            View release notes
          </button>
        </div>

        {/* DESKTOP UI CONCEPT — browser chrome */}
        <div id="desktop" className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-honey-900/10 bg-white text-left">
          {/* Browser chrome */}
          <div className="flex items-center gap-4 px-4 py-3 bg-honey-50/80 backdrop-blur border-b border-honey-900/5">
            <TrafficLights />
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-white/70 border border-honey-900/5 text-[11px] font-mono text-honey-900/50">
                honeyos.cloud/desktop
              </div>
            </div>
            <div className="size-3" />
          </div>

          {/* Desktop */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={wallpaper}
              alt="HoneyOS wallpaper"
              width={1920}
              height={1200}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-honey-900/10 via-transparent to-honey-900/40" />

            {/* Menubar */}
            <div className="absolute top-0 inset-x-0 h-8 px-4 flex items-center justify-between text-[11px] font-medium text-white/95 bg-black/10 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="size-3.5 bg-honey-500 rounded-sm rotate-45" />
                <span className="font-semibold">Finder</span>
                <span className="opacity-70">File</span>
                <span className="opacity-70">Edit</span>
                <span className="opacity-70">View</span>
                <span className="opacity-70">Window</span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <Wifi className="size-3.5" />
                <BatteryFull className="size-3.5" />
                <span>Fri Oct 24  ·  10:24</span>
              </div>
            </div>

            {/* File manager window */}
            <div className="absolute top-16 left-8 md:left-16 w-[62%] max-w-md bg-white/75 backdrop-blur-xl rounded-xl shadow-2xl border border-white/60 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-honey-900/5">
                <TrafficLights />
                <span className="text-[11px] font-medium opacity-60">Nectar</span>
                <div className="size-3" />
              </div>
              <div className="flex h-48">
                <aside className="w-28 border-r border-honey-900/5 p-3 space-y-1 text-[11px]">
                  <div className="px-2 py-1 rounded bg-honey-500/15 font-semibold">Recents</div>
                  <div className="px-2 py-1 opacity-60">Documents</div>
                  <div className="px-2 py-1 opacity-60">Projects</div>
                  <div className="px-2 py-1 opacity-60">Media</div>
                </aside>
                <div className="flex-1 p-3 space-y-1">
                  {[
                    { name: "Nectar_Project_v2", active: true, icon: Folder },
                    { name: "Hive_Assets", active: false, icon: Folder },
                    { name: "Spring_Collection.pdf", active: false, icon: FileText },
                    { name: "wallpaper_amber.png", active: false, icon: ImageIcon },
                  ].map((f) => (
                    <div
                      key={f.name}
                      className={`p-1.5 rounded-md flex items-center gap-2 text-xs ${
                        f.active ? "bg-honey-500/15" : "opacity-70"
                      }`}
                    >
                      <f.icon className="size-3.5 text-honey-600" />
                      <span className="truncate">{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System status widget */}
            <div className="absolute top-20 right-8 md:right-16 w-72 bg-honey-900/85 backdrop-blur-xl rounded-xl shadow-2xl p-5 text-honey-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                  System Status
                </span>
                <div className="size-2 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] opacity-50 mb-1">CPU</p>
                  <p className="text-2xl font-serif italic">12.4%</p>
                </div>
                <div>
                  <p className="text-[10px] opacity-50 mb-1">TEMP</p>
                  <p className="text-2xl font-serif italic">38°C</p>
                </div>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-honey-500" />
              </div>
              <p className="text-[10px] mt-3 opacity-40 font-mono">nectar.flow · balanced</p>
            </div>

            {/* Control center card */}
            <div className="absolute bottom-24 right-8 md:right-20 w-56 bg-white/70 backdrop-blur-xl rounded-xl shadow-xl border border-white/50 p-4 grid grid-cols-2 gap-2">
              {[
                { icon: Wifi, label: "Honey_5G" },
                { icon: Bluetooth, label: "On" },
                { icon: Volume2, label: "85%" },
                { icon: Sun, label: "72%" },
              ].map((c) => (
                <div key={c.label} className="p-2 rounded-lg bg-white/60 flex items-center gap-2">
                  <c.icon className="size-3.5 text-honey-700" />
                  <span className="text-[10px] font-medium truncate">{c.label}</span>
                </div>
              ))}
            </div>

            {/* Dock */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-2.5 bg-white/40 backdrop-blur-2xl rounded-2xl flex gap-2.5 shadow-xl border border-white/50">
              {[
                { bg: "bg-honey-500" },
                { bg: "bg-white/70" },
                { bg: "bg-honey-900/80" },
                { bg: "bg-white/70" },
                { bg: "bg-amber-400/80" },
                { bg: "bg-white/70" },
              ].map((d, i) => (
                <div
                  key={i}
                  className={`size-10 ${d.bg} rounded-xl border border-white/30 shadow-sm hover:-translate-y-1 transition`}
                />
              ))}
              <div className="w-px bg-white/40 mx-1" />
              <div className="size-10 bg-honey-900/10 rounded-xl flex items-center justify-center">
                <div className="size-1.5 bg-honey-900 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs font-mono opacity-50 uppercase tracking-widest">
          Running live in your browser · No install required
        </p>
      </section>

      {/* SETTINGS + CONTROL PANELS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-honey-600 font-semibold uppercase text-xs tracking-widest">
              02 · Preferences
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl mt-2">Settings, softened.</h2>
          </div>
          <p className="max-w-xs text-sm opacity-60 hidden md:block">
            Every toggle is a small decision. HoneyOS makes them feel considered.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Settings window */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-honey-900/5 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-honey-900/5">
              <TrafficLights />
              <span className="text-xs font-medium opacity-60">System Preferences</span>
            </div>
            <div className="flex h-[440px]">
              <aside className="w-56 bg-honey-50/60 border-r border-honey-900/5 p-4 space-y-6">
                <div>
                  <h3 className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-3">
                    System
                  </h3>
                  <nav className="space-y-0.5 text-sm">
                    {[
                      { label: "General", icon: Settings, active: true },
                      { label: "Appearance", icon: Palette },
                      { label: "Notifications", icon: Bell },
                      { label: "Privacy", icon: Shield },
                      { label: "Network", icon: Globe },
                    ].map((i) => (
                      <div
                        key={i.label}
                        className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md ${
                          i.active
                            ? "bg-honey-500/15 text-honey-900 font-semibold"
                            : "text-honey-900/60"
                        }`}
                      >
                        <i.icon className="size-3.5" />
                        {i.label}
                      </div>
                    ))}
                  </nav>
                </div>
              </aside>
              <main className="flex-1 p-8 overflow-hidden">
                <h2 className="text-xl font-serif italic mb-1">General</h2>
                <p className="text-xs opacity-50 mb-8">Behavior and updates for your hive.</p>
                <div className="space-y-1 max-w-lg">
                  {[
                    { label: "Automatically update modules", desc: "Nightly at 3:00 AM", on: true },
                    { label: "Dynamic hive mesh networking", desc: "Peer discovery over LAN", on: false },
                    { label: "Warm color adaptation", desc: "Shift toward amber after sunset", on: true },
                    { label: "Haptic wax feedback", desc: "Subtle response on trackpad", on: true },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between py-3.5 border-b border-honey-900/5"
                    >
                      <div>
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs opacity-50">{s.desc}</p>
                      </div>
                      <div
                        className={`w-9 h-5 rounded-full relative transition ${
                          s.on ? "bg-honey-500" : "bg-honey-900/15"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 size-4 bg-white rounded-full shadow transition ${
                            s.on ? "right-0.5" : "left-0.5"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>

          {/* Control panel tiles */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-3 content-start">
            {[
              { icon: Wifi, label: "Wi-Fi", val: "Honey_5G", tone: "bg-honey-500" },
              { icon: Bluetooth, label: "Bluetooth", val: "3 devices" },
              { icon: Volume2, label: "Sound", val: "85%" },
              { icon: Sun, label: "Brightness", val: "72%" },
              { icon: BatteryFull, label: "Battery", val: "94%" },
              { icon: Bell, label: "Focus", val: "Deep" },
            ].map((c) => (
              <div
                key={c.label}
                className="p-4 bg-white rounded-2xl border border-honey-900/5 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div
                  className={`size-8 rounded-lg mb-3 grid place-items-center ${
                    c.tone ?? "bg-honey-100"
                  }`}
                >
                  <c.icon className={`size-4 ${c.tone ? "text-white" : "text-honey-700"}`} />
                </div>
                <p className="text-xs opacity-50 mb-0.5">{c.label}</p>
                <p className="text-sm font-semibold">{c.val}</p>
              </div>
            ))}
            <div className="col-span-2 p-4 bg-honey-900 text-honey-50 rounded-2xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
                  Luminance
                </span>
                <span className="text-xs font-mono text-honey-500">82%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-honey-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP STORE — THE HIVE */}
      <section id="hive" className="bg-honey-100/60 py-24 border-y border-honey-900/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-honey-600 font-semibold uppercase text-xs tracking-widest">
                03 · The Hive
              </span>
              <h2 className="font-serif italic text-4xl md:text-5xl mt-2 mb-2">
                An ecosystem, curated.
              </h2>
              <p className="opacity-60 max-w-md">
                Applications built by makers who care about the small moments.
              </p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <span className="text-honey-900 border-b-2 border-honey-900 pb-1">Featured</span>
              <span className="opacity-40">Productivity</span>
              <span className="opacity-40">Design</span>
              <span className="opacity-40">Developer</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Featured hero card */}
            <div className="col-span-12 md:col-span-7 relative rounded-3xl overflow-hidden bg-honey-900 text-honey-50 p-10 min-h-[380px] flex flex-col justify-end">
              <div className="absolute inset-0 opacity-40">
                <img
                  src={wallpaper}
                  alt=""
                  loading="lazy"
                  width={1920}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-honey-900 via-honey-900/60 to-transparent" />
              <div className="relative">
                <span className="inline-block bg-honey-500 text-honey-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest mb-4">
                  App of the Month
                </span>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-3">Resonance Pro</h3>
                <p className="text-honey-50/70 max-w-md mb-6">
                  A spatial audio engine for HoneyOS. Compose in three dimensions with wax-warm
                  fidelity.
                </p>
                <div className="flex items-center gap-3">
                  <button className="bg-honey-50 text-honey-900 px-4 py-2 rounded-full text-sm font-semibold">
                    Get — $29
                  </button>
                  <span className="text-xs opacity-60">4.9 ★ · 12k installs</span>
                </div>
              </div>
            </div>

            {/* App grid */}
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
              {[
                { name: "Sticker Pad", cat: "Utility", tone: "bg-amber-200" },
                { name: "Beehive Connect", cat: "Social", tone: "bg-orange-200" },
                { name: "Wick Editor", cat: "Dev", tone: "bg-yellow-200" },
                { name: "Prism", cat: "Design", tone: "bg-honey-200" },
                { name: "Worker", cat: "Utility", tone: "bg-amber-100" },
                { name: "Stitch API", cat: "Dev", tone: "bg-honey-100" },
              ].map((a) => (
                <div
                  key={a.name}
                  className="bg-white p-4 rounded-2xl border border-honey-900/5 hover:shadow-md transition"
                >
                  <div
                    className={`size-10 rounded-xl mb-3 ${a.tone} grid place-items-center`}
                  >
                    <div className="size-4 bg-honey-900/70 rounded-sm rotate-45" />
                  </div>
                  <h4 className="text-sm font-bold mb-0.5 truncate">{a.name}</h4>
                  <p className="text-[11px] opacity-50">{a.cat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM DASHBOARD */}
      <section id="dashboard" className="bg-honey-900 text-honey-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-honey-500 font-semibold uppercase text-xs tracking-widest">
                04 · Telemetry
              </span>
              <h2 className="font-serif italic text-4xl md:text-5xl mt-2">
                Every cell, accounted for.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono opacity-60">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              LIVE · nectar.flow
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Cpu, label: "CPU Cluster", val: "14", unit: "%", detail: "8 cores active" },
              { icon: MemoryStick, label: "Memory Vault", val: "4.2", unit: "GB", detail: "of 16.0" },
              { icon: Network, label: "Network IO", val: "240", unit: "kb/s", detail: "encrypted" },
              { icon: HardDrive, label: "Storage", val: "62", unit: "%", detail: "312 GB free" },
            ].map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                    {m.label}
                  </span>
                  <m.icon className="size-4 text-honey-500" />
                </div>
                <div className="text-4xl font-serif italic text-honey-500 mb-1">
                  {m.val}
                  <span className="text-sm text-white/40 ml-1">{m.unit}</span>
                </div>
                <div className="text-[11px] font-mono opacity-40">{m.detail}</div>
              </div>
            ))}
          </div>

          {/* Bottom row: bars + processes */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  Nectar Flow · 24h
                </span>
                <Activity className="size-4 text-honey-500" />
              </div>
              <div className="flex items-end gap-1 h-32">
                {Array.from({ length: 32 }).map((_, i) => {
                  const h = 20 + Math.abs(Math.sin(i / 3)) * 70 + (i % 4) * 3;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-honey-500/30 to-honey-500"
                      style={{ height: `${h}%` }}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between text-[10px] font-mono opacity-40 mt-3">
                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  Active Processes
                </span>
                <span className="text-[10px] font-mono opacity-40">17 running</span>
              </div>
              <div className="text-xs font-mono divide-y divide-white/5">
                {[
                  { name: "honey.kernel", cpu: "4.1%", mem: "412 MB", state: "core" },
                  { name: "hive.mesh", cpu: "2.8%", mem: "128 MB", state: "system" },
                  { name: "resonance.pro", cpu: "3.6%", mem: "894 MB", state: "user" },
                  { name: "wick.editor", cpu: "1.2%", mem: "312 MB", state: "user" },
                  { name: "nectar.indexer", cpu: "0.9%", mem: "56 MB", state: "background" },
                ].map((p) => (
                  <div key={p.name} className="grid grid-cols-12 py-2.5 items-center">
                    <div className="col-span-5 flex items-center gap-2">
                      <Circle className="size-1.5 fill-honey-500 text-honey-500" />
                      {p.name}
                    </div>
                    <div className="col-span-2 opacity-60">{p.cpu}</div>
                    <div className="col-span-3 opacity-60">{p.mem}</div>
                    <div className="col-span-2 text-right">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 uppercase tracking-widest opacity-70">
                        {p.state}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILE MANAGER */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-honey-600 font-semibold uppercase text-xs tracking-widest">
              05 · Nectar
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl mt-2">
              A place for everything.
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-honey-900/5 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-honey-900/5">
            <TrafficLights />
            <div className="flex items-center gap-1.5 text-xs opacity-60 ml-4">
              <span>Home</span>
              <ChevronRight className="size-3" />
              <span>Projects</span>
              <ChevronRight className="size-3" />
              <span className="font-semibold text-honey-900">Nectar_v2</span>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-honey-50 border border-honey-900/5">
              <Search className="size-3 opacity-50" />
              <span className="text-[11px] opacity-40">Search files</span>
            </div>
          </div>
          <div className="flex min-h-[440px]">
            <aside className="w-56 bg-honey-50/50 border-r border-honey-900/5 p-4 text-sm space-y-6">
              <div>
                <h4 className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-2">
                  Favorites
                </h4>
                <div className="space-y-0.5">
                  {["Recents", "Projects", "Downloads", "Screenshots"].map((f, i) => (
                    <div
                      key={f}
                      className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                        i === 1 ? "bg-honey-500/15 font-semibold" : "opacity-60"
                      }`}
                    >
                      <Folder className="size-3.5" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-2">
                  Tags
                </h4>
                <div className="space-y-0.5">
                  {[
                    { c: "bg-honey-500", n: "Amber" },
                    { c: "bg-red-400", n: "Priority" },
                    { c: "bg-green-500", n: "Shipped" },
                  ].map((t) => (
                    <div key={t.n} className="flex items-center gap-2 px-2 py-1 opacity-70">
                      <div className={`size-2 rounded-full ${t.c}`} /> {t.n}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <main className="flex-1 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                {[
                  "Assets", "Drafts", "Renders", "Meetings", "Archive", "Shared",
                ].map((f, i) => (
                  <div key={f} className="text-center">
                    <div className={`aspect-square rounded-xl mb-2 grid place-items-center border border-honey-900/5 ${i % 2 === 0 ? "bg-honey-50" : "bg-honey-100/60"}`}>
                      <Folder className="size-6 text-honey-600" />
                    </div>
                    <p className="text-xs font-medium truncate">{f}</p>
                    <p className="text-[10px] opacity-40">{4 + i * 3} items</p>
                  </div>
                ))}
              </div>

              <h4 className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-3">
                Files
              </h4>
              <div className="text-xs divide-y divide-honey-900/5">
                <div className="grid grid-cols-12 py-2 opacity-40 font-medium">
                  <div className="col-span-6">Name</div>
                  <div className="col-span-3">Modified</div>
                  <div className="col-span-2">Size</div>
                  <div className="col-span-1">Tag</div>
                </div>
                {[
                  { n: "spring_brief.md", m: "Today, 09:12", s: "4 KB", t: "bg-honey-500" },
                  { n: "resonance_cover.png", m: "Yesterday", s: "2.1 MB", t: "bg-red-400" },
                  { n: "kernel_notes.txt", m: "Oct 20", s: "12 KB", t: "bg-green-500" },
                  { n: "hive_diagram.svg", m: "Oct 18", s: "88 KB", t: "bg-honey-500" },
                  { n: "release_v1.pkg", m: "Oct 12", s: "412 MB", t: "" },
                ].map((f) => (
                  <div key={f.n} className="grid grid-cols-12 py-2.5 items-center hover:bg-honey-50/60 rounded">
                    <div className="col-span-6 flex items-center gap-2">
                      <FileText className="size-3.5 text-honey-600" />
                      {f.n}
                    </div>
                    <div className="col-span-3 opacity-60">{f.m}</div>
                    <div className="col-span-2 opacity-60 font-mono">{f.s}</div>
                    <div className="col-span-1">
                      {f.t && <div className={`size-2 rounded-full ${f.t}`} />}
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section id="docs" className="max-w-7xl mx-auto py-24 px-8 border-t border-honey-900/5">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 self-start">
            <span className="text-honey-600 font-semibold uppercase text-xs tracking-widest">
              06 · Docs
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl mt-2 mb-8 leading-tight">
              Designed for focus.
            </h2>
            <nav className="space-y-3 text-sm">
              {[
                { t: "Getting Started", active: true },
                { t: "System Architecture", active: false },
                { t: "The Honey Kernel", active: false },
                { t: "Visual Guidelines", active: false },
                { t: "Hive API Reference", active: false },
                { t: "Building your first cell", active: false },
              ].map((i) => (
                <div
                  key={i.t}
                  className={`flex items-center gap-3 group cursor-pointer ${
                    i.active ? "" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`size-1.5 rounded-full transition ${
                      i.active ? "bg-honey-500 scale-150" : "bg-honey-900"
                    }`}
                  />
                  <span className="font-semibold">{i.t}</span>
                </div>
              ))}
            </nav>
          </div>

          <article className="col-span-12 lg:col-span-8">
            <div className="bg-honey-900/[0.04] rounded-3xl p-8 md:p-12">
              <span className="text-honey-600 font-bold uppercase text-xs tracking-widest">
                Installation Guide
              </span>
              <h3 className="text-3xl md:text-4xl font-serif italic mt-4 mb-6">
                Getting Started
              </h3>
              <p className="text-honey-900/70 mb-8 leading-relaxed">
                HoneyOS installers are designed to be therapeutic. Before partition management,
                we offer a moment of calibrated digital silence. The process usually takes less
                than eight minutes on standard NVMe hardware.
              </p>

              <div className="p-5 bg-honey-900 text-honey-50 rounded-xl font-mono text-sm mb-8 overflow-x-auto">
                <div className="flex gap-1.5 mb-3 opacity-50">
                  <div className="size-2 rounded-full bg-white/40" />
                  <div className="size-2 rounded-full bg-white/40" />
                  <div className="size-2 rounded-full bg-white/40" />
                </div>
                <div className="opacity-40">$ </div>
                <div>curl -sSL get.honeyos.org | sh</div>
                <div className="mt-2 text-honey-500">
                  ✓ Fetched honey-cli 1.0.0
                </div>
                <div className="text-honey-500">✓ Partitioned /dev/nectar0</div>
                <div className="text-honey-500">✓ Cells online — welcome home.</div>
              </div>

              <img
                src={architecture}
                alt="Honeycomb architecture diagram"
                loading="lazy"
                width={1200}
                height={600}
                className="w-full rounded-xl border border-honey-900/5 mb-8"
              />

              <p className="text-honey-900/70 leading-relaxed mb-6">
                The system management dashboard provides high-level control over resource
                allocation through a visual representation of{" "}
                <span className="font-semibold text-honey-900">Nectar Flow</span> — our
                proprietary load balancing engine that distributes work across cells the way a
                colony distributes labor.
              </p>

              <h4 className="text-xl font-serif italic mt-10 mb-4">Your first cell</h4>
              <p className="text-honey-900/70 leading-relaxed mb-4">
                Every process in HoneyOS lives inside an isolated cell. Create one with a single
                command:
              </p>
              <div className="p-5 bg-white border border-honey-900/10 rounded-xl font-mono text-sm">
                <span className="text-honey-600">honey</span> cell new{" "}
                <span className="text-honey-900/50">my-first-cell</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-honey-900/10 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Logo />
                <span className="font-serif italic font-bold text-xl">HoneyOS</span>
              </div>
              <p className="text-sm opacity-60 max-w-xs leading-relaxed">
                A desktop environment built for the sweet life. Designed and engineered by the
                Wax Collective.
              </p>
            </div>
            {[
              { h: "Platform", l: ["Download", "Release notes", "Hardware", "Source"] },
              { h: "Ecosystem", l: ["The Hive", "Developers", "Registry", "Community"] },
              { h: "Company", l: ["About", "Manifesto", "Careers", "Press"] },
            ].map((c) => (
              <div key={c.h}>
                <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-4">
                  {c.h}
                </h5>
                <ul className="space-y-2 text-sm">
                  {c.l.map((li) => (
                    <li key={li} className="opacity-70 hover:opacity-100 cursor-pointer">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-center pt-8 border-t border-honey-900/5 text-xs opacity-50">
            <p>© 2026 Nectar Systems Corp. Built for the sweet life.</p>
            <p className="font-mono">v1.0.0 — amber_kernel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
