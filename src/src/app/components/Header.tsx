import React from "react";
export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      {" "}
      <div className="text-2xl font-bold">💀</div>{" "}
      <nav className="space-x-6">
        {" "}
        {[
          "Início",
          "Sobre",
          "Fale conosco",
          "Soluções",
          "Galeria",
        ].map((item) => (
          <a key={item} href="#" className="text-black hover:underline">
            {item}
          </a>
        ))}{" "}
      </nav>{" "}
      <button className="bg-white text-blue-500 px-4 py-2 rounded-lg">
        Agendamento?
      </button>{" "}
    </header>
  );
};
