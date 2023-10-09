import { LogoSVG } from "../svgs"
import { DarkMode } from "./DarkMode"

export const Navbar = () => {
  return (
    <div className="navbar">
      <LogoSVG />
      <DarkMode />
    </div>
  )
}