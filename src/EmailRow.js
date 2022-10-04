import { IconButton, Checkbox } from "@material-ui/core";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import React from "react";
import "./styles/EmailRow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({
  id,
  title,
  subject,
  description,
  time,
  displayName,
  email,
  photoURL,
}) {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
        displayName,
        email,
        photoURL,
      })
    );

    navigation("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox
          style={{
            transform: "scale(0.75)",
            color: "black",
          }}
        />
        <IconButton>
          <StarBorderOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <LabelImportantTwoToneIcon fontSize="small" />
        </IconButton>
      </div>

      <div className="emailRow__title">
        <h3>{displayName || email}</h3>
      </div>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
