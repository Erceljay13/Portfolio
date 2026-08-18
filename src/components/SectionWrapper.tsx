import { motion, type HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"section"> {}

function SectionWrapper({ children, className, ...props }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
