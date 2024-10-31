import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as CompanyIcon,
} from "@mui/icons-material";

import styles from "./UserCard.module.css";

export default function UserCard({ user, handleModal }) {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFBF33",
    "#33FFF8",
    "#F833FF",
    "#FFD133",
    "#33FF57",
    "#FF3333",
  ];

  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    const firstInitial = names[names.length - 2].charAt(0).toUpperCase();
    const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <Card className={styles.userCard}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "3px" }}
      >
        <Typography
          gutterBottom
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            color: "text.secondary",
            margin: "0px 0px 10px 0px",
            fontSize: 14,
          }}
        >
          <Avatar sx={{ bgcolor: colors[user.id], color: "#fff" }}>
            <p
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {getInitials(user.name)}
            </p>
          </Avatar>
          {user.name.toUpperCase()}
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <AlternateEmailRoundedIcon /> {user.username.toLowerCase()}
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <EmailIcon />
          <a
            aria-label="mail"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${user.email}`}
            className={styles.emailLink}
          >
            {user.email}
          </a>
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <PhoneIcon /> {user.phone.replace(/\./g, "-")}
        </Typography>

        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <CompanyIcon /> {user.company.name}
        </Typography>

        {/* <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <OpenInNewRoundedIcon />
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            {user.website}
          </a>
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleModal(user)}>
          VIEW DETAILS
        </Button>
      </CardActions>
    </Card>
  );
}
