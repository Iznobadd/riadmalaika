import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";

function ChambresForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const errors = validateData(data);
    if (Object.keys(errors).length) {
      console.log(errors);

      Object.keys(errors).forEach((field) => {
        setError(field, {
          type: "manual",
          message: errors[field],
        });
      });
      toast.error("Veuillez remplir les champs obligatoires");
      return;
    } else {
      const formatDateArrivee = new Date(data.arrivee).toLocaleDateString(
        "fr-FR",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      const formatDateDepart = new Date(data.depart).toLocaleDateString(
        "fr-FR",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      const allData = {
        ...data,
        formatDateArrivee,
        formatDateDepart,
      };
      sendEmail(allData);
    }
  };

  const sendEmail = (data) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_HEBERGEMENT_RIAD_ID,
        data,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        toast.success(
          "Votre demande a bien été prise en compte et vous allez recevoir un e-mail avec tous les détails, tarifs et conditions."
        );
        reset();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Erreur lors de l'envoi du formulaire");
      });
  };

  const validateData = (data) => {
    const error = {};

    const requiredFields = [
      "nom",
      "email",
      "tel",
      "chambre",
      "personnes",
      "connuMalaika",
      "arrivee",
      "depart",
    ];

    requiredFields.forEach((field) => {
      if (!data[field]) {
        error[field] = "Ce champ est requis";
      }
    });
    return error;
  };

  return (
    <>
      <ToastContainer />
      <form
        method="post"
        action="forms/reservation-chambres.php"
        id="form_chambres"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="over-gray">
          <div className="name-input">
            <input
              type="text"
              placeholder="NOM*"
              name="nom"
              className={`${errors.nom ? "error_form" : ""}`}
              {...register("nom")}
            />
          </div>

          <div className="email-input">
            <input
              type="text"
              placeholder="EMAIL*"
              name="email"
              className={`${errors.email ? "error_form" : ""}`}
              {...register("email")}
            />
          </div>

          <div className="tel-input">
            <input
              type="text"
              placeholder="TÉLÉPHONE*"
              name="tel"
              id="phone"
              className={`${errors.tel ? "error_form" : ""}`}
              {...register("tel")}
            />
          </div>
          <div className="arrivee-input">
            <Controller
              control={control}
              name="arrivee"
              render={({ field }) => (
                <DatePicker
                  id="dateArriveeId"
                  placeholderText="DATE D'ARRIVÉE*"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className={`${errors.arrivee ? "error_form" : ""}`}
                  dateFormat={"dd/MM/yyyy"}
                />
              )}
            />
          </div>

          <div className="depart-input">
            <Controller
              control={control}
              name="depart"
              render={({ field }) => (
                <DatePicker
                  id="dateDepartId"
                  placeholderText="DATE DE DÉPART*"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className={`${errors.depart ? "error_form" : ""}`}
                  dateFormat={"dd/MM/yyyy"}
                />
              )}
            />
          </div>
          <div className="chambres-input">
            <select
              name="chambre"
              id="choix_chambre"
              className={`${errors.chambre ? "error_form" : ""}`}
              {...register("chambre")}
            >
              <option value="">CHOIX DE LA CHAMBRE*</option>
              <option value="double-standard">Chambre double standard</option>
              <option value="double-confort">Chambre double confort</option>
              <option value="double-superieur">Chambre double supérieur</option>
              <option value="junior-suite">Junior Suite</option>
              <option value="twin-standard">Chambre Twin standard</option>
              <option value="twin-superieur">Chambre twin superieur</option>
            </select>
          </div>

          <div className="personnes-input">
            <select
              name="personnes"
              id="personnes"
              className={`${errors.personnes ? "error_form" : ""}`}
              {...register("personnes")}
            >
              <option value="">NOMBRE DE PERSONNES*</option>
              {Array.from({ length: 6 }, (_, index) => (
                <option value={index + 1} key={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="connu-input">
            <select
              name="connu-malaika"
              id="connu-malaika"
              className={`${errors.connuMalaika ? "error_form" : ""}`}
              {...register("connuMalaika")}
            >
              <option value="">COMMENT AVEZ-VOUS CONNU MALAIKA ?*</option>
              <option value="internet">Sur internet</option>
              <option value="bouche">Bouche à oreille</option>
              <option value="pub">Publicité</option>
              <option value="enseigne">Enseigne spécialisée</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div className="message-input">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="VOTRE MESSAGE"
              className={`${errors.message ? "error_form" : ""}`}
              {...register("message")}
            ></textarea>
          </div>
        </div>
        <div
          className="submit"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <input type="submit" name="submit" value="ENVOYER" id="submit" />
        </div>
      </form>
    </>
  );
}

export default ChambresForm;
