import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

import PizzaBackend from "../../assets/pizza.png";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div 
        className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between"
        style={{
          backgroundImage: `url(${PizzaBackend})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
        }}  
      >
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5">
            <span className="font-semibold">pizza.ship</span>
          </Pizza>
        </div>
        <footer className="text-sm text-white">
          Partner Dashboard &copy; pizza.shop - { new Date().getFullYear() }
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  )
}