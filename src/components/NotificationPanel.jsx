import { FaCheckCircle, FaTimes } from "react-icons/fa";
import NotificationItem from "./NotificationItem";

const notifications = [
  { title: "New Course Available", message: "AWS Advanced Networking has been added.", time: "New", unread: true },
  { title: "Course Completed", message: "You completed React Fundamentals.", time: "Yesterday", unread: true },
  { title: "Learning Reminder", message: "Continue your Tailwind CSS course.", time: "2 days ago", unread: true },
  { title: "Weekly progress", message: "You learned for 4 hours this week.", time: "Last week", unread: false },
];

function NotificationPanel({ open, onClose }) {
  if (!open) return null;
  return (
    <section id="notification-panel" role="dialog" aria-modal="false" aria-labelledby="notification-title" className="absolute right-0 top-12 z-50 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-2xl bg-white text-left shadow-2xl ring-1 ring-slate-200">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h2 id="notification-title" className="text-lg font-bold text-slate-900">Notifications</h2>
        <button type="button" onClick={onClose} className="grid size-8 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95"><FaTimes aria-hidden="true" /><span className="sr-only">Close notifications</span></button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notification) => <NotificationItem key={notification.title} notification={notification} />)}
      </div>
      <button type="button" onClick={onClose} className="flex w-full items-center justify-center gap-2 border-t border-slate-100 px-5 py-4 font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-600 active:scale-[0.99]"><FaCheckCircle aria-hidden="true" />View All Notifications</button>
    </section>
  );
}

export default NotificationPanel;
