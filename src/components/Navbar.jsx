import { useState } from "react";
import { FaBars, FaBell, FaTimes, FaUserCircle } from "react-icons/fa";
import NotificationPanel from "./NotificationPanel";

const navigation = [
  ["Home", "#home"],
  ["Explore Courses", "#courses"],
  ["My Learning", "#learning"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="home" className="sticky top-0 z-40 bg-white/95 shadow-md backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Primary navigation">
        <a href="#home" className="text-2xl font-bold text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">LearnSphere</a>
        <ul className="hidden items-center gap-7 font-medium text-slate-700 md:flex">
          {navigation.map(([label, href]) => <li key={label}><a href={href} className="transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{label}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button type="button" onClick={() => setNotificationsOpen((open) => !open)} aria-expanded={notificationsOpen} aria-controls="notification-panel" className="relative grid size-10 place-items-center rounded-full text-xl text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95">
              <FaBell aria-hidden="true" />
              <span className="absolute right-0 top-0 grid min-w-5 place-items-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">3</span>
              <span className="sr-only">Open notifications, 3 unread</span>
            </button>
            <NotificationPanel open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
          </div>
          <button type="button" aria-label="Open profile" className="hidden rounded-full text-3xl text-blue-600 transition hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:block"><FaUserCircle /></button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" className="grid size-10 place-items-center rounded-full text-xl text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95 md:hidden">
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
        {menuOpen && <ul id="mobile-menu" className="absolute left-4 right-4 top-full rounded-b-xl bg-white p-4 shadow-xl md:hidden">{navigation.map(([label, href]) => <li key={label}><a href={href} onClick={closeMenu} className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600">{label}</a></li>)}</ul>}
      </nav>
    </header>
  );
}

export default Navbar;
