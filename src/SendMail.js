import React from "react";
import "./SendMail.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { selectUser } from "./features/userSlice";

function SendMail() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit1 = (formData) => {
    console.log(formData);

    db.collection("emails").add({
      para: formData.para,
      subject: formData.subject,
      message: formData.message,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>Nova Mensagem </h3>

        <CloseOutlinedIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__icon"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit1)}>
        <input
          name="para"
          placeholder="Para"
          type="email"
          {...register("para", {
            required: true,
          })}
        />
        {errors.para && (
          <p className="errors__message">
            *É necessário informar um destinatário
          </p>
        )}
        <input
          name="subject"
          placeholder="Assunto"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="errors__message">*Informe o assunto do e-mail</p>
        )}
        <input
          name="message"
          type="text"
          className="editMailMessage"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="errors__message">*Escreva uma mensagem</p>
        )}
        <div className="sendMail__options">
          <Button type="submit">Enviar </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
