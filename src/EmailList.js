import React, { useEffect, useState } from "react";
import "./EmailList.css";

import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleIcon from "@mui/icons-material/People";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList_settingsLeft">
          <div className="emailList_checkbox">
            <Checkbox />
            <IconButton>
              <ArrowDropDownOutlinedIcon fontSize="small" />
            </IconButton>
          </div>
          <IconButton>
            <ReplayOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton className="emailList_email__count">
            <p className="email__count">1-20 de 9000</p>
          </IconButton>
          <IconButton>
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section
          Icon={InboxRoundedIcon}
          title="Principal"
          color="#0c57d0"
          selected
        />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title="Promoções"
          color="#0c57d0"
        />
        <Section Icon={PeopleIcon} title="Social" color="#0c57d0" />
      </div>

      <div className="emailList__list">
        {emails.map(
          ({
            id,
            data: {
              para,
              subject,
              message,
              timestamp,
              displayName,
              email,
              photoURL,
            },
          }) => (
            <EmailRow
              id={id}
              key={id}
              email={email}
              subject={subject}
              description={message}
              displayName={displayName}
              photoURL={photoURL}
              time={new Date(timestamp?.seconds * 1000).toLocaleString(
                "pt-br",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                }
              )}
            />
          )
        )}
      </div>
    </div>
  );
}
export default EmailList;
