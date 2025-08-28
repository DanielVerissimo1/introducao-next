'use client'
import ToggleDark from "@/components/ToggleDark";

import { useState } from "react";

export default function DarkTheme() {

  const [isDark, setIsDark] = useState(false)

  const handleToggleTheme = () => {
    setIsDark( isDark => !isDark)
}

  return (
    <div className={`flex flex-col items-center justify-center h-screen transition-all duration-700 

      ${isDark ? 'bg-gray-900 text-white' : 'bg-amber-50 text-black'}`
      }>
      <h1 className="text-4xl font-bold mb-4">Página {isDark ? 'Dark Theme' : 'Light Theme'}</h1>

      <ToggleDark onToggle={handleToggleTheme} isDark={isDark}/>
    </div>
  );
}