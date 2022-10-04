import React from "react";
import "./styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logOut());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Pesquisar no e-mail" />
        <IconButton>
          <TuneIcon className="tuneIcon" />
        </IconButton>
      </div>

      <div className="header__empty"></div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <MiscellaneousServicesIcon />
        </IconButton>
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <Avatar src={user?.photoURL} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
