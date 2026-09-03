"use client";

import React from "react";
import Link from "next/link";
import { Calendar, DollarSign, Users, PlusCircle, CheckCircle2, Clock } from "lucide-react";
import useUserGlobalStore from "@/app/store/user-global-store";

export default function OwnerDashboard() {
  const { user } = useUserGlobalStore();

  const todaySlots = [
    { time: "18:00 - 19:00", court: "Cancha 1 (F5 Sintético)", client: "Carlos Benítez", status: "Confirmado (Seña Gs. 30.000)", paid: true },
    { time: "19:00 - 20:00", court: "Cancha 2 (F5 Techado)", client: "Grupo Shalom F.C.", status: "Confirmado (Seña Gs. 30.000)", paid: true },
    { time: "20:00 - 21:00", court: "Cancha 1 (F5 Sintético)", client: "Libre para reservar", status: "Disponible", paid: false },
    { time: "21:00 - 22:00", court: "Cancha 2 (F5 Techado)", client: "Marcos Alcaraz", status: "Confirmado (Seña Gs. 30.000)", paid: true },
    { time: "22:00 - 23:00", court: "Cancha 1 (F5 Sintético)", client: "Mantenimiento / Libre", status: "Disponible", paid: false },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase bg-amber-500 text-slate-950 px-3 py-1 rounded-full">
            Panel de Administrador / Complejo
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2">
            Complejo Shalom · {user?.name || "Administrador"}
          </h1>
          <p className="text-slate-300 text-sm mt-1 max-w-lg">
            Control de turnos en tiempo real, validación de señas y gestión de canchas deportivas o salones.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl transition text-sm flex items-center gap-2 shadow-xs">
            <PlusCircle size={16} /> Bloquear Turno Manual
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex justify-between items-center text-gray-500 text-xs font-medium">
            <span>Turnos Hoy</span>
            <Calendar size={16} className="text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mt-2">6 turnos</div>
          <div className="text-xs text-emerald-600 mt-1 font-semibold">4 con seña acreditada</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex justify-between items-center text-gray-500 text-xs font-medium">
            <span>Señas Cobradas Hoy</span>
            <DollarSign size={16} className="text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mt-2">Gs. 120.000</div>
          <div className="text-xs text-gray-500 mt-1">Estimado total: Gs. 480.000</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex justify-between items-center text-gray-500 text-xs font-medium">
            <span>Canchas Activas</span>
            <CheckCircle2 size={16} className="text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mt-2">2 canchas</div>
          <div className="text-xs text-gray-500 mt-1">F5 Sintético y F5 Techado</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex justify-between items-center text-gray-500 text-xs font-medium">
            <span>Jugadores Registrados</span>
            <Users size={16} className="text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mt-2">142</div>
          <div className="text-xs text-emerald-600 mt-1">+12 esta semana</div>
        </div>
      </div>

      {/* Turnos de la jornada */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Cronograma de Turnos de Hoy</h2>
            <p className="text-xs text-gray-500">Viernes, Ciudad del Este</p>
          </div>
          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-md">
            Actualizado en vivo
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {todaySlots.map((slot, index) => (
            <div key={index} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 text-gray-700 font-bold px-2.5 py-1 rounded-md text-xs flex items-center gap-1 min-w-[120px] justify-center">
                  <Clock size={12} /> {slot.time}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{slot.court}</div>
                  <div className="text-xs text-gray-500">{slot.client}</div>
                </div>
              </div>

              <div>
                {slot.paid ? (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <CheckCircle2 size={12} /> {slot.status}
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                    {slot.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
