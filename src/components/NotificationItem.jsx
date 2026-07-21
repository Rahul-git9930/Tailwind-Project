function NotificationItem({ notification }) {
  return (
    <article className={`border-b border-slate-100 px-5 py-4 last:border-0 ${notification.unread ? "bg-blue-50/70" : "bg-white"}`}>
      <div className="flex gap-3"><span className={`mt-2 size-2 shrink-0 rounded-full ${notification.unread ? "bg-blue-600" : "bg-slate-300"}`} aria-hidden="true" /><div className="min-w-0"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-slate-900">{notification.title}</h3><time className="shrink-0 text-xs text-slate-500">{notification.time}</time></div><p className="mt-1 text-sm leading-5 text-slate-600">{notification.message}</p></div></div>
    </article>
  );
}

export default NotificationItem;
