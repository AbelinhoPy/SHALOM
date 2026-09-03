"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Trophy, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  CreditCard 
} from "lucide-react";
import toast from "react-hot-toast";

export default function Homepage() {
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [selectedDay, setSelectedDay] = useState<number>(4);
  const [selectedSlot, setSelectedSlot] = useState<string>("19:30");

  const courts = [
    {
      id: "shalom",
      name: "Complejo Deportivo Shalom",
      courtName: "Cancha 2 (F5 Techado)",
      sport: "football",
      sportTag: "Fútbol 5 · Fútbol 7",
      location: "Ciudad del Este, Km 4",
      price: 120000,
      depositPercent: 25,
      rating: "4.9 ★ (84)",
      features: ["Césped sintético", "Iluminación LED", "Vestuarios", "Estacionamiento"],
      gradient: "from-emerald-800 to-emerald-950",
    },
    {
      id: "universo",
      name: "Complejo Universo",
      courtName: "Cancha de Pádel Cristal",
      sport: "padel",
      sportTag: "Pádel · Blindex",
      location: "Ciudad del Este, Zona Norte",
      price: 90000,
      depositPercent: 30,
      rating: "4.8 ★ (52)",
      features: ["Cancha panorámica", "Alquiler de paletas", "Cantina", "Aire acondicionado en vestuarios"],
      gradient: "from-sky-800 to-slate-900",
    },
    {
      id: "che",
      name: "La Cancha del Che",
      courtName: "Cancha Principal F5",
      sport: "football",
      sportTag: "Fútbol 5",
      location: "Ciudad del Este, Centro",
      price: 100000,
      depositPercent: 20,
      rating: "4.7 ★ (41)",
      features: ["Parrillas para tercer tiempo", "Pasto sintético Pro", "Bebidas frías"],
      gradient: "from-amber-900 to-stone-900",
    },
    {
      id: "voley-park",
      name: "Vóley Park CDE",
      courtName: "Cancha de Arena 1",
      sport: "voley",
      sportTag: "Piki Vóley · Arena",
      location: "Área 1, Ciudad del Este",
      price: 80000,
      depositPercent: 25,
      rating: "4.9 ★ (39)",
      features: ["Arena lavada", "Red profesional", "Duchas al aire libre"],
      gradient: "from-yellow-700 to-amber-950",
    },
    {
      id: "beauty-spa",
      name: "Shalom Beauty & Nails Spa",
      courtName: "Servicio Manicura & Spa",
      sport: "beauty",
      sportTag: "Salón de Belleza · Uñas",
      location: "Ciudad del Este, Área 4",
      price: 70000,
      depositPercent: 30,
      rating: "5.0 ★ (110)",
      features: ["Esmaltado semipermanente", "Diseño personalizado", "Atención con turno exclusivo"],
      gradient: "from-rose-800 to-pink-950",
    },
  ];

  const filteredCourts = selectedSport === "all" 
    ? courts 
    : courts.filter(c => c.sport === selectedSport);

  const timeSlots = [
    { time: "17:00", available: false },
    { time: "18:00", available: false },
    { time: "19:30", available: true },
    { time: "20:00", available: true },
    { time: "21:00", available: true },
    { time: "22:30", available: true },
  ];

  const days = [
    { num: 31, isDim: true },
    { num: 1, isDim: false },
    { num: 2, isDim: false },
    { num: 3, isDim: false },
    { num: 4, isDim: false, isToday: true },
    { num: 5, isDim: false },
    { num: 6, isDim: false },
    { num: 7, isDim: false },
    { num: 8, isDim: false },
    { num: 9, isDim: false },
    { num: 10, isDim: false },
    { num: 11, isDim: false },
    { num: 12, isDim: false },
    { num: 13, isDim: false },
  ];

  const handleBooking = () => {
    toast.success(
      `¡Horario seleccionado: Viernes ${selectedDay} Sep a las ${selectedSlot}! Iniciá sesión para pagar la seña de Gs. 30.000.`,
      { duration: 5000 }
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F7F0] text-[#16211C]">
      {/* NAVBAR */}
      <header className="border-b border-[#DCE3D8] bg-[#F5F7F0]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#163B2C] flex items-center justify-center text-white shadow-xs">
              <Trophy size={19} />
            </div>
            <span className="font-extrabold text-2xl tracking-wide uppercase text-[#163B2C]">
              Jahuga
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-[#566158]">
            <a href="#canchas" className="hover:text-[#163B2C] transition">Canchas</a>
            <a href="#como-funciona" className="hover:text-[#163B2C] transition">Cómo funciona</a>
            <a href="#duenos" className="hover:text-[#163B2C] transition">Para dueños</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-bold text-[#16211C] px-4 py-2 border border-[#16211C] rounded-lg hover:bg-[#16211C] hover:text-white transition"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/register"
              className="text-sm font-bold bg-[#163B2C] text-white px-4 py-2 rounded-lg hover:bg-[#0E2A1F] transition shadow-xs"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-[#163B2C]">
              <span className="w-2 h-2 rounded-full bg-[#F2A93B] animate-pulse"></span>
              Ciudad del Este y alrededores · Paraguay
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-[#16211C]">
              Reservá tu <span className="text-[#163B2C]">cancha</span> o turno en segundos
            </h1>

            <p className="text-base sm:text-lg text-[#566158] max-w-xl leading-relaxed">
              Elegí complejo, día y horario, asegurá tu turno pagando la seña desde el celular y recibí confirmación inmediata. Sin llamadas, sin esperar respuesta por WhatsApp.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#canchas"
                className="bg-[#163B2C] hover:bg-[#0E2A1F] text-white font-bold px-6 py-3.5 rounded-xl transition shadow-md flex items-center gap-2"
              >
                Ver canchas disponibles <ChevronRight size={18} />
              </a>
              <Link
                href="/register"
                className="border-2 border-[#163B2C] text-[#163B2C] hover:bg-[#163B2C] hover:text-white font-bold px-6 py-3.5 rounded-xl transition"
              >
                Sumar mi complejo o salón
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#DCE3D8]">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#163B2C]">18+</div>
                <div className="text-xs text-[#566158] font-medium">Complejos afiliados</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#163B2C]">6</div>
                <div className="text-xs text-[#566158] font-medium">Barrios cubiertos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#163B2C]">2 min</div>
                <div className="text-xs text-[#566158] font-medium">Promedio de reserva</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#163B2C] rounded-2xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden border border-emerald-800">
              <div className="flex justify-between items-center mb-5">
                <span className="bg-[#F2A93B] text-[#0E2A1F] text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Disponible Hoy
                </span>
                <span className="text-xs text-emerald-200 font-semibold">Vie 04 Sep</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Shalom · Cancha 2</h3>
                  <p className="text-xs text-emerald-200">Fútbol 5 Techado · Césped sintético</p>
                </div>

                <div>
                  <div className="text-xs text-white/70 mb-2 font-semibold">Horarios libres para hoy:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {["18:00", "19:30", "21:00", "22:30"].map((time, idx) => (
                      <button
                        key={time}
                        onClick={() => setSelectedSlot(time)}
                        className={`text-xs py-2 px-3 rounded-lg font-bold transition border ${
                          selectedSlot === time
                            ? "bg-[#F2A93B] text-[#0E2A1F] border-[#F2A93B]"
                            : "border-white/20 text-white/90 hover:bg-white/10"
                        }`}
                      >
                        {time} {idx === 1 && "★"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <span className="text-xs text-white/60 block">Precio por hora</span>
                    <strong className="text-xl font-black">Gs. 120.000</strong>
                  </div>
                  <button
                    onClick={handleBooking}
                    className="bg-[#F2A93B] hover:bg-amber-400 text-[#0E2A1F] font-black text-xs px-4 py-2.5 rounded-lg transition"
                  >
                    Abonar Seña (Gs. 30.000)
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-200">
                <ShieldCheck size={14} className="text-[#F2A93B]" /> Seña segura: reservás y el turno queda bloqueado en el acto.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section id="canchas" className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-[#16211C]">Complejos y Canchas Disponibles</h2>
              <p className="text-sm text-[#566158]">Disponibilidad y precios actualizados en tiempo real en Ciudad del Este</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "Todos", value: "all" },
                { label: "Fútbol 5 & 7", value: "football" },
                { label: "Pádel", value: "padel" },
                { label: "Piki Vóley", value: "voley" },
                { label: "Salones & Uñas", value: "beauty" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedSport(tab.value)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-lg transition ${
                    selectedSport === tab.value
                      ? "bg-[#163B2C] text-white shadow-xs"
                      : "bg-white text-[#566158] border border-[#DCE3D8] hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* COURTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourts.map((court) => (
              <div
                key={court.id}
                className="bg-white rounded-2xl border border-[#DCE3D8] overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className={`h-32 bg-gradient-to-br ${court.gradient} p-4 flex flex-col justify-between text-white`}>
                    <div className="flex justify-between items-start">
                      <span className="bg-white/20 backdrop-blur-xs text-xs font-bold px-2.5 py-1 rounded-md">
                        {court.sportTag}
                      </span>
                      <span className="text-xs font-semibold text-amber-300">
                        {court.rating}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{court.name}</h3>
                      <p className="text-xs text-white/80">{court.courtName}</p>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#566158]">
                      <MapPin size={14} className="text-[#163B2C]" />
                      <span>{court.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {court.features.map((feat, i) => (
                        <span
                          key={i}
                          className="bg-[#F5F7F0] text-[#566158] text-[11px] font-medium px-2 py-0.5 rounded-md border border-[#DCE3D8]"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#DCE3D8] mt-3">
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <span className="text-[11px] text-[#566158] block">Precio turno / hora</span>
                      <strong className="text-base font-extrabold text-[#16211C]">
                        Gs. {court.price.toLocaleString("es-PY")}
                      </strong>
                    </div>

                    <a
                      href="#reserva-rapida"
                      className="text-xs font-bold bg-[#163B2C] hover:bg-[#0E2A1F] text-white px-3.5 py-2 rounded-lg transition"
                    >
                      Ver Horarios
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOKING COMPONENT (SHALOM CANCHA 2) */}
      <section id="reserva-rapida" className="py-14 bg-white border-y border-[#DCE3D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#163B2C] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Experiencia de Reserva en Vivo
            </span>
            <h2 className="text-3xl font-extrabold text-[#16211C] mt-3">
              Complejo Shalom · Cancha 2
            </h2>
            <p className="text-sm text-[#566158] mt-1">
              Probá cómo tus clientes eligen día, hora y calculan la seña en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#16211C]">Fútbol 5 Techado</h3>
                <div className="flex items-center gap-2 text-sm text-[#566158]">
                  <MapPin size={16} className="text-[#163B2C]" />
                  <span>Km 4, Ciudad del Este · a 5 min del microcentro</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Césped Sintético Monofilamento", "Iluminación LED Nocturna", "Vestuarios con ducha", "Estacionamiento privado"].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-[#F5F7F0] border border-[#DCE3D8] text-[#566158] px-3 py-1.5 rounded-full"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="bg-[#163B2C] text-white rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <div>
                    <span className="text-xs text-emerald-200">Costo total del turno (1 hora)</span>
                    <div className="text-2xl font-black">Gs. 120.000</div>
                  </div>
                  <span className="bg-white/20 text-xs px-3 py-1 rounded-full font-bold">
                    4.9 ★ (84 reseñas)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-white/10 rounded-xl p-3">
                    <span className="text-amber-300 font-bold block mb-1">Seña Online (25%)</span>
                    <strong className="text-lg font-black text-white">Gs. 30.000</strong>
                    <span className="text-white/60 block text-[11px] mt-0.5">Pagás ahora para asegurar</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <span className="text-emerald-200 font-bold block mb-1">Saldo en Cancha</span>
                    <strong className="text-lg font-black text-white">Gs. 90.000</strong>
                    <span className="text-white/60 block text-[11px] mt-0.5">Abonás al llegar</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-100 pt-2">
                  <CreditCard size={15} className="text-[#F2A93B]" />
                  <span>Acepta transferencias SIPAP, QR de billeteras o tarjetas.</span>
                </div>
              </div>
            </div>

            {/* Calendar & Slots Column */}
            <div className="lg:col-span-6">
              <div className="bg-[#F5F7F0] border border-[#DCE3D8] rounded-2xl p-6 shadow-sm space-y-6">
                {/* Calendar Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={18} className="text-[#163B2C]" />
                    <span className="font-bold text-sm text-[#16211C]">Septiembre 2026</span>
                  </div>
                  <span className="text-xs text-[#566158] font-semibold">Día seleccionado: Viernes {selectedDay}</span>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1.5 text-center">
                  {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                    <div key={i} className="text-[11px] font-bold text-[#566158] pb-1">
                      {d}
                    </div>
                  ))}

                  {days.map((day, idx) => (
                    <button
                      key={idx}
                      onClick={() => !day.isDim && setSelectedDay(day.num)}
                      disabled={day.isDim}
                      className={`h-9 rounded-lg text-xs font-bold transition flex items-center justify-center ${
                        day.isDim
                          ? "opacity-30 cursor-not-allowed"
                          : selectedDay === day.num
                          ? "bg-[#163B2C] text-white shadow-xs"
                          : "bg-white border border-[#DCE3D8] text-[#16211C] hover:bg-emerald-50"
                      }`}
                    >
                      {day.num}
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-xs font-bold text-[#566158]">
                      Horarios disponibles para el Viernes {selectedDay} Sep
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      Turnos de 60 minutos
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedSlot === slot.time;
                      return (
                        <button
                          key={slot.time}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold transition border text-center ${
                            !slot.available
                              ? "bg-gray-100 text-gray-400 border-gray-200 line-through cursor-not-allowed"
                              : isSelected
                              ? "bg-[#F2A93B] text-[#0E2A1F] border-[#F2A93B] shadow-xs"
                              : "bg-white border-[#DCE3D8] text-[#16211C] hover:border-[#163B2C]"
                          }`}
                        >
                          {slot.time}
                          {!slot.available && <span className="block text-[10px] no-underline font-normal text-gray-400">Ocupado</span>}
                          {isSelected && <span className="block text-[10px] font-extrabold text-[#0E2A1F]">Elegido</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={handleBooking}
                  className="w-full bg-[#163B2C] hover:bg-[#0E2A1F] text-white font-bold py-3.5 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <CheckCircle size={16} className="text-amber-400" /> Confirmar y Abonar Seña (Gs. 30.000)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#16211C]">Cómo Funciona Jahuga</h2>
            <p className="text-sm text-[#566158] mt-1">Una sola cuenta para reservar en todos los complejos de Ciudad del Este</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-[#DCE3D8] space-y-3">
              <div className="text-4xl font-black text-[#F2A93B]">01</div>
              <h3 className="font-bold text-lg text-[#16211C]">Elegí tu cancha o local</h3>
              <p className="text-sm text-[#566158]">
                Buscá por deporte (Fútbol, Pádel, Vóley) o por servicio de salón y compará fotos, ubicación y precios en Guaraníes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DCE3D8] space-y-3">
              <div className="text-4xl font-black text-[#F2A93B]">02</div>
              <h3 className="font-bold text-lg text-[#16211C]">Seleccioná día y hora</h3>
              <p className="text-sm text-[#566158]">
                El calendario sincronizado en tiempo real te muestra exactamente qué turnos están libres, sin riesgo de turnos dobles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DCE3D8] space-y-3">
              <div className="text-4xl font-black text-[#F2A93B]">03</div>
              <h3 className="font-bold text-lg text-[#16211C]">Aboná la seña y listo</h3>
              <p className="text-sm text-[#566158]">
                Pagás el porcentaje de reserva desde tu celular. El dueño recibe la notificación en su panel y el turno queda cerrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR OWNERS SECTION */}
      <section id="duenos" className="py-16 bg-[#0E2A1F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Para Dueños de Canchas y Salones de Belleza
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              ¿Tenés un complejo deportivo o salón de uñas en Paraguay?
            </h2>
            <p className="text-sm text-emerald-200">
              Dejá de perder horas respondiendo mensajes en WhatsApp y terminá con los turnos cancelados a último minuto. Con Jahuga, cada reserva entra con seña asegurada.
            </p>
          </div>

          <Link
            href="/register"
            className="bg-[#F2A93B] hover:bg-amber-400 text-[#0E2A1F] font-black px-7 py-4 rounded-xl transition shadow-lg text-sm shrink-0"
          >
            Registrar mi Complejo / Salón
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#16211C] text-white/70 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-extrabold text-xl text-white tracking-wide uppercase">
              Jahuga
            </span>
            <p className="text-xs text-white/50 mt-1">
              Plataforma de reservas de canchas y servicios en Paraguay.
            </p>
          </div>

          <div className="flex gap-6 text-xs font-semibold text-white/80">
            <a href="#canchas" className="hover:text-white transition">Canchas</a>
            <a href="#como-funciona" className="hover:text-white transition">Cómo funciona</a>
            <Link href="/login" className="hover:text-white transition">Ingreso Socios</Link>
            <Link href="/register" className="hover:text-white transition">Registro</Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 mt-6 border-t border-white/5 text-center text-xs text-white/40">
          © 2026 Jahuga.com — Todos los derechos reservados · Ciudad del Este, Paraguay.
        </div>
      </footer>
    </div>
  );
}