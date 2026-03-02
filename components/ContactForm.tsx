"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Por favor completo todos los campos requeridos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("Por favor ingreso un correo válido.");
      return;
    }

    const subject = encodeURIComponent(`Contacto landing PP - ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\n\nMensaje:\n${form.message}`
    );

    window.location.href = `mailto:contacto@pppromotora.com?subject=${subject}&body=${body}`;
    setStatus("Redirigí el envío al cliente de correo. Mensaje preparado correctamente.");
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/90">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/90">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          placeholder="tucorreo@dominio.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/90">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          placeholder="Contame cómo te puedo ayudar"
          required
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-pp-primary px-5 py-3 text-sm font-semibold transition hover:bg-pp-hover"
      >
        Enviar mensaje
      </button>

      {status && <p className="text-sm text-white/80">{status}</p>}
    </form>
  );
}
