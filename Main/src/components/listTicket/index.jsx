import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { actionKM } from "../../app/KMOpen";
import Ticket from "../Ticket";
import "./styles.scss";
import data from"../../data"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <i className="fas fa-times"></i>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
const List_Ticket =data.Tickets;
function ListTicket(props) {

  const {open} = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actionKM(open))
  };

  return (
    <div style={{width:'400px'}}>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" className="d-flex justify-content-center" onClose={handleClose}>
         <b className="font_km">Khuyến mãi</b>
        </BootstrapDialogTitle>
          <p className="ss_use">Sẵn sàng sử dụng</p>
        <div className="ListTicket">
          {List_Ticket.map((item, index) => (
            <Ticket item={item} key={index} />
          ))}
        </div>
      </BootstrapDialog>
    </div>
  );
}

export default ListTicket;
