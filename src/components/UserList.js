import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import styles from "./UserList.module.css";
import UserCard from "./UserCard";

export default function UserList({ users }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleModal(user = null) {
    setModalOpen((currentModal) => !currentModal);
    setSelectedUser(user);
  }

  return (
    <>
      <Box className={styles.userList}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} handleModal={handleModal} />
        ))}
      </Box>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.backdrop}
            onClick={() => handleModal(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className={styles.closeButton}
                onClick={() => handleModal(null)}
              >
                &times;
              </button>

              {selectedUser && (
                <div className={styles.userDetails}>
                  <h2>User Details</h2>

                  <div className={styles.detailRow}>
                    <strong>Name:</strong>
                    <span>{selectedUser.name}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <strong>username: </strong>
                    <span>{selectedUser.username.toLowerCase()}</span>
                  </div>

                  <div className={styles.detailRow}>
                    <strong> Email:</strong>
                    <span>
                      {" "}
                      <a
                        aria-label="mail"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${selectedUser.email}`}
                        className={styles.emailLink}
                      >
                        {selectedUser.email}
                      </a>
                    </span>
                  </div>

                  <div className={styles.detailRow}>
                    <strong>Phone:</strong>
                    <span>{selectedUser.phone.replace(/\./g, "-")}</span>
                  </div>

                  <div className={styles.detailRow}>
                    <strong> Website:</strong>
                    <span>
                      {" "}
                      <a
                        href={`https://${selectedUser.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.websiteLink}
                      >
                        {selectedUser.website}
                      </a>
                    </span>
                  </div>

                  <div className={styles.Details}>
                    <strong>Address: </strong>
                    <div className={styles.detailsCol}>
                      <p>
                        <strong>Street:</strong> {selectedUser.address.street}{" "}
                      </p>
                      <p>
                        <strong>Suit:</strong> {selectedUser.address.suite}{" "}
                      </p>
                      <p>
                        <strong>City:</strong> {selectedUser.address.city}{" "}
                      </p>
                      <p>
                        <strong>Zipcode:</strong> {selectedUser.address.zipcode}{" "}
                      </p>
                      <p>
                        <strong>Geo:</strong>

                        <span style={{ marginLeft: "14px" }}>
                          <strong>Lat: </strong>
                          {selectedUser.address.geo.lat}

                          {" , "}

                          <strong>Lng: </strong>
                          {selectedUser.address.geo.lng}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className={styles.Details}>
                    <strong>Company</strong>
                    <div className={styles.detailsCol}>
                      <p>
                        <strong>Name:</strong> {selectedUser.company.name}{" "}
                      </p>
                      <p>
                        <strong>catchPhrase:</strong>{" "}
                        {selectedUser.company.catchPhrase}{" "}
                      </p>
                      <p>
                        <strong>bs:</strong> {selectedUser.company.bs}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
