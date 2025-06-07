import React from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  return (
    <motion.span
      className="absolute animate-pulse inline-block w-2 h-5 bg-skin-accent2 rounded-sm ml-1"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  );
};

export default AnimatedCursor;