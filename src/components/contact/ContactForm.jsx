import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
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
    }
    toast.success("Votre message a bien été envoyé");
  };

  const validateData = (data) => {
    const error = {};

    const requiredFields = [
      "nom",
      "email",
      "tel",
      "sujet",
      "connuMalaika",
      "message",
      "cgu", // Ajout de la case à cocher (checkbox)
    ];

    requiredFields.forEach((field) => {
      if (!data[field]) {
        if (field === "tel") {
          error[field] = "Veuillez saisir votre numéro de téléphone";
        } else if (field === "cgu") {
          error[field] =
            "Veuillez accepter les conditions générales d'utilisation";
        } else {
          error[field] = `Veuillez saisir votre ${field}`;
        }
      }
    });

    return error;
  };

  return (
    <>
      <ToastContainer />
      <form method="post" id="contact" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form img-contact">
          <div className="container">
            <h1>Nous contacter</h1>
            <p>
              <strong>
                Pour toute demande d'information et afin d'apporter une réponse
                précise et rapide, veuillez renseigner les champs du formulaire
                (requis).
              </strong>
            </p>

            <div className="over-gray">
              <div className="name-input">
                <input
                  type="text"
                  placeholder="NOM*"
                  className={`${errors.nom ? "error_form" : ""}`}
                  {...register("nom")}
                />
              </div>

              <div className="email-input">
                <input
                  type="text"
                  placeholder="EMAIL*"
                  className={`${errors["email"] ? "error_form" : ""}`}
                  {...register("email")}
                />
              </div>

              <div className="tel-input">
                <input
                  type="text"
                  placeholder="TÉLÉPHONE*"
                  className={`${errors["tel"] ? "error_form" : ""}`}
                  {...register("tel")}
                />
              </div>

              <div className="subject-input">
                <input
                  type="text"
                  placeholder="SUJET*"
                  className={`${errors["sujet"] ? "error_form" : ""}`}
                  {...register("sujet")}
                />
              </div>

              <div className="connu-input">
                <select
                  {...register("connuMalaika")}
                  className={`${errors["connuMalaika"] ? "error_form" : ""}`}
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
                  {...register("message")}
                  className={`${errors["message"] ? "error_form" : ""}`}
                  cols="30"
                  rows="10"
                  placeholder="MESSAGE SUPPLÉMENTAIRE"
                ></textarea>
              </div>

              <div className={`${errors["cgu"] ? "error_form" : ""} cgu-input`}>
                <input type="checkbox" {...register("cgu")} />
                <label htmlFor="cgu">
                  En cochant cette case, j'accepte que les informations saisies
                  soient traitées dans le cadre de la demande d'informations et
                  de la relation commerciale qui peut en découler. *
                </label>
              </div>

              <div className="submit-loisirs w-100">
                <input
                  type="submit"
                  name="submit"
                  value="ENVOYER"
                  id="submit"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;