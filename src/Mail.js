import React from "react";
import "./Mail.css";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail() {
  const navigation = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__header">
        <div className="icone__voltar">
          <IconButton onClick={() => navigation("/")}>
            <ArrowBackOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <IconButton>
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ReportGmailerrorredOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <DeleteTwoToneIcon fontSize="small" />
        </IconButton>
        <p>|</p>
        <IconButton>
          <EmailOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <QueryBuilderOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <AddTaskOutlinedIcon fontSize="small" />
        </IconButton>
        <p>|</p>
        <IconButton>
          <DriveFileMoveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="mail__title">
        <div className="mail__titleLeft">
          <h2>{selectedMail?.subject}</h2>
          <IconButton>
            <LabelOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="mail__titleRight">
          <IconButton>
            <PrintOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <OpenInNewOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyLeftInfos">
          <Avatar src={selectedMail?.photoURL} />
          <h3>{selectedMail?.displayName}</h3>
          <p> {selectedMail?.email}</p>
        </div>

        <div className="mail__bodyRightInfos">
          <p>{selectedMail?.time}</p>
          <IconButton>
            <StarOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ShortcutOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="mail__message">
        <p>{selectedMail?.description}</p>
      </div>
    </div>
  );
}

export default Mail;
