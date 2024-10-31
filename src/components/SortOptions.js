import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./SortOptions.module.css";

export default function SortOptions({ sortOption, setSortOption }) {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className={styles.container}>
      <FlyoutLink
        href="#"
        FlyoutContent={() => (
          <MenuContent
            sortOption={sortOption}
            handleSortChange={handleSortChange}
          />
        )}
      >
        Filter
      </FlyoutLink>
    </div>
  );
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={styles.flyoutLink}
    >
      <a href={href} className={styles.content}>
        {children}
        <span
          className={styles.flyoutEffect}
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.flyoutContent}
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function MenuContent({ sortOption, handleSortChange }) {
  return (
    <div className={styles.menuContent}>
      <select
        id="sort-select"
        value={sortOption}
        onChange={handleSortChange}
        className={styles.select}
      >
        <option value="name">Name</option>
        <option value="username">Username</option>
      </select>
    </div>
  );
}
