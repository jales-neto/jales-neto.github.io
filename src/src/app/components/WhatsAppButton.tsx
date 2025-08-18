// TODO: get rid of this file in the future
"use client"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  message?: string;
  label: string;
}

export function WhatsAppButton({ message, label }: WhatsAppButtonProps) {
  const url = `https://wa.me/+5599982687036${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex flex-row items-center justify-center p-2 gap-2
      rounded-lg
      bg-green-500 text-white hover:bg-green-600"
    >
      <FaWhatsapp size={20} />
      {label}
    </Link>
  );
}
