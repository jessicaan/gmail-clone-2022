import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./styles/Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import SidebarOption from "./SidebarOption";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import ReportGmailerrorredSharpIcon from "@mui/icons-material/ReportGmailerrorredSharp";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import LabelIcon from "@mui/icons-material/Label";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<EditOutlinedIcon className="pencil__icon" />}
        className="write__button"
        onClick={() => dispatch(openSendMessage())}
      >
        Escrever
      </Button>

      <div onClick={() => navigation("/")}>
        <SidebarOption
          Icon={InboxRoundedIcon}
          title="Caixa de entrada"
          number={14}
          selected={true}
        />
        <SidebarOption
          Icon={StarBorderRoundedIcon}
          title="Com estrela"
          number={14}
        />
        <SidebarOption
          Icon={QueryBuilderRoundedIcon}
          title="Adiados"
          number={14}
        />
        <SidebarOption
          Icon={LabelImportantTwoToneIcon}
          title="Importante"
          number={14}
        />
        <SidebarOption Icon={MessageOutlinedIcon} title="Chats" number={14} />
        <SidebarOption Icon={SendOutlinedIcon} title="Enviados" number={14} />
        <SidebarOption Icon={NoteOutlinedIcon} title="Rascunhos" number={14} />
        <SidebarOption
          Icon={EmailOutlinedIcon}
          title="Todos os e-mails"
          number={14}
        />
        <SidebarOption
          Icon={ReportGmailerrorredSharpIcon}
          title="Spam"
          number={14}
        />
        <SidebarOption Icon={DeleteTwoToneIcon} title="Lixeira" number={14} />
        <SidebarOption Icon={LabelIcon} title="Categorias" number={14} />
        <SidebarOption
          Icon={KeyboardArrowDownOutlinedIcon}
          title="Mais"
          number={""}
        />
      </div>
      <div className="sidebar__footer">
        <div className="sidebar_footerTitle">
          <h3>Marcadores</h3>
          <IconButton>
            <AddOutlinedIcon />
          </IconButton>
        </div>
        <SidebarOption Icon={LabelIcon} title="Label 1" />
        <SidebarOption Icon={LabelIcon} title="Importantes" />
        <SidebarOption Icon={LabelIcon} title="Pessoais" />
        <SidebarOption Icon={LabelIcon} title="Trabalho" />
      </div>
    </div>
  );
}

export default Sidebar;
