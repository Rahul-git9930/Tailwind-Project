import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function CourseDetailsModal({ course, onClose, onContinue }) {
  useEffect(() => {
    if (!course) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-details-title"
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white text-left shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/95 text-slate-700 shadow transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95"
        >
          <FaTimes aria-hidden="true" />
          <span className="sr-only">Close course details</span>
        </button>
        <img src={course.image} alt="" className="h-52 w-full object-cover sm:h-64" />
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">{course.category}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{course.status}</span>
          </div>
          <h2 id="course-details-title" className="mt-4 text-3xl font-bold text-slate-900">{course.title}</h2>
          <p className="mt-3 leading-7 text-slate-600">{course.description} Build confidence with guided lessons, practical exercises, and progress you can track at every step.</p>
          <div className="mt-6">
            <div className="mb-2 flex justify-between font-medium text-slate-700"><span>Course progress</span><span>{course.progress}%</span></div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" style={{ width: `${course.progress}%` }} /></div>
          </div>
          <button type="button" onClick={onContinue} className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98]">Continue Learning</button>
        </div>
      </section>
    </div>
  );
}

export default CourseDetailsModal;
