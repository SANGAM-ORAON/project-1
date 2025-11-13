import { motion as Motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-black text-white px-6 sm:px-10 md:px-16 py-20 flex flex-col items-center justify-center"
    >
      {children}
    </Motion.div>
  );
}
