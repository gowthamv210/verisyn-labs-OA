import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import SortOptions from "./components/SortOptions";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "username") {
        return a.username.localeCompare(b.username);
      }
      return 0;
    });

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography color="error">Failed to load users: {error}</Typography>
      </Box>
    );
  }

  return (
    <div className="App">
      <div className="main-container">
        <Navbar>
          <h2> USERS DASHBOARD</h2>
          <span>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SortOptions
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </span>
        </Navbar>
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

function Navbar({ children }) {
  return <nav>{children}</nav>;
}
