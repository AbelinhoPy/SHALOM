"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, Plus, CheckCircle } from "lucide-react";
import useUserGlobalStore from "@/app/store/user-global-store";

export default function UserDashboard() {
  const { user } = useUserGlobalStore();

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase bg-emerald-800/80 px-3 py-1 rounded-full text-amber-300">
            Panel de Jugador
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2">
            ¡Hola, {user?.name || "Jugador"}!
          </h1>
          <p className="text-emerald-100 text-sm mt-1 max-w-md">
            Gestioná tus partidos, revisá el estado de tus señas y encontrá canchas disponibles en Ciudad del Este y alrededores.
          </p>
        </div>
        <Link
          href="/"
          className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold px-5 py-3 rounded-xl transition flex items-center gap-2 shadow-sm text-sm"
        >
          <Plus size={16} /> Reservar Cancha
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="text-xs text-gray-500 font-medium">Próximos Partidos</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">1 turno</div>
          <div className="text-xs text-emerald-600 mt-2 font-semibold">✓ Confirmado con seña</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="text-xs text-gray-500 font-medium">Partidos Jugados</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">8 turnos</div>
          <div className="text-xs text-gray-400 mt-2">En los últimos 3 meses</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="text-xs text-gray-500 font-medium">Complejo Favorito</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">Shalom · Km 4</div>
          <div className="text-xs text-emerald-600 mt-2 font-semibold">Césped sintético F5</div>
        </div>
      </div>

      {/* Próximo Turno Destacado */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Tu Próximo Turno</h2>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
            <CheckCircle size={13} /> Seña Abonada
          </span>
        </div>

        <div className="border border-emerald-100 bg-emerald-50/50 rounded-xl p-4 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 text-base">Complejo Deportivo Shalom · Cancha 2</h3>
            <div className="flex flex-wrap gap-4 text-xs text-gray-600 pt-1">
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-emerald-700" /> Km 4, Ciudad del Este
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-emerald-700" /> Viernes 04 de Septiembre
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-emerald-700" /> 19:30 - 20:30 hs
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between md:flex-col md:items-end gap-1 border-t md:border-t-0 pt-3 md:pt-0 border-gray-200">
            <div className="text-xs text-gray-500">Seña: <strong className="text-gray-800">Gs. 30.000</strong> (25%)</div>
            <div className="text-xs text-emerald-800 font-semibold">Saldo en cancha: Gs. 90.000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
