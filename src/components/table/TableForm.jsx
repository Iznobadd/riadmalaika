import React, { useEffect, useState } from "react";
import categoriesData from "../../data/categories.json";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
function TableForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();
  const [categories, setCategories] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedSignatureItems, setSelectedSignatureItems] = useState([]);
  const [nbrSignatureMenus, setNbrSignatureMenus] = useState(0);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategories(categoriesData.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleQuantityChange = (e, option, category) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      // Vérifie si l'option est déjà dans les éléments sélectionnés
      const existingItem = selectedItems.find(
        (item) => item.id === option.id && item.category === category
      );
      if (existingItem) {
        // Met à jour la quantité de l'option existante
        const updatedItems = selectedItems.map((item) => {
          if (item.id === option.id && item.category === category) {
            return { ...item, quantity };
          }
          return item;
        });
        setSelectedItems(updatedItems);
      } else {
        // Ajoute l'option aux éléments sélectionnés
        setSelectedItems([...selectedItems, { ...option, category, quantity }]);
      }
    } else {
      // Supprime l'option des éléments sélectionnés si la quantité est inférieure ou égale à 1
      const updatedItems = selectedItems.filter(
        (item) => item.id !== option.id || item.category !== category
      );
      setSelectedItems(updatedItems);
    }
  };

  const handleSignatureQuantityChange = (e, option, category) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      // Vérifie si l'option est déjà dans les éléments sélectionnés du menu "Signature"
      const existingItem = selectedSignatureItems.find(
        (item) => item.id === option.id && item.category === category
      );
      if (existingItem) {
        // Met à jour la quantité de l'option existante dans le menu "Signature"
        const updatedItems = selectedSignatureItems.map((item) => {
          if (item.id === option.id && item.category === category) {
            return { ...item, quantity };
          }
          return item;
        });
        setSelectedSignatureItems(updatedItems);
      } else {
        // Ajoute l'option aux éléments sélectionnés du menu "Signature"
        setSelectedSignatureItems([
          ...selectedSignatureItems,
          { ...option, category, quantity },
        ]);
      }
    } else {
      // Supprime l'option des éléments sélectionnés du menu "Signature" si la quantité est inférieure ou égale à 0
      const updatedItems = selectedSignatureItems.filter(
        (item) => item.id !== option.id || item.category !== category
      );
      setSelectedSignatureItems(updatedItems);
    }
  };

  const onSubmit = (data) => {
    const errors = validateData(data);
    console.log(errors);
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
      const entreesSignature = selectedSignatureItems.filter(
        (item) => item.category === "entree"
      );
      const platsSignature = selectedSignatureItems.filter(
        (item) => item.category === "plat"
      );
      const dessertsSignature = selectedSignatureItems.filter(
        (item) => item.category === "desserts"
      );
      const entrees = selectedItems.filter(
        (item) => item.category === "entree"
      );
      const plats = selectedItems.filter((item) => item.category === "plat");
      const desserts = selectedItems.filter(
        (item) => item.category === "desserts"
      );
      setNbrSignatureMenus(Number(nbrSignatureMenus));
      console.log("nbrSignatureMenus", nbrSignatureMenus);

      if (nbrSignatureMenus > 0) {
        const totalEntreesSignatureQuantity = entreesSignature.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalPlatsSignatureQuantity = platsSignature.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalDessertsSignatureQuantity = dessertsSignature.reduce(
          (total, item) => total + item.quantity,
          0
        );
        if (
          entreesSignature.length === 0 ||
          platsSignature.length === 0 ||
          dessertsSignature.length === 0
        ) {
          console.log("entreesSignature", entreesSignature);
          console.log("platsSignature", platsSignature);
          console.log("dessertsSignature", dessertsSignature);

          toast.error(
            "Veuillez choisir une entrée, un plat et un dessert pour chaque menu signature"
          );
          return;
        }
        if (
          totalEntreesSignatureQuantity !== nbrSignatureMenus ||
          totalPlatsSignatureQuantity !== nbrSignatureMenus ||
          totalDessertsSignatureQuantity !== nbrSignatureMenus
        ) {
          toast.error(
            "Le nombre de menus signature ne correpond pas au nombre d'entrées, de plats ou de desserts choisis"
          );
          return;
        }
        if (entrees.length > 0 || plats.length > 0 || desserts.length > 0) {
          // IF MENU CLASSIQUE EN PLUS DE SIGNATURE
          if (
            (entrees.length > 0 && plats.length) ||
            (plats.length > 0 && desserts.length > 0)
          ) {
            // MENU SIGNATURE + CLASSIQUE
            toast.success("Réservation effectuée avec succès");
          } else {
            toast.error(
              "Veuillez choisir une entrée ou un dessert pour chaque menu classique"
            );
            return;
          }
        } else {
          // MENU SIGNATURE SEUL
          const cartSignatureItems = () => {
            // Créer un objet pour stocker les éléments par catégorie
            const itemsByCategory = {};

            // Regrouper les éléments par catégorie
            selectedSignatureItems.forEach((item) => {
              const { category, label, quantity } = item;
              if (itemsByCategory[category]) {
                itemsByCategory[category].push({ label, quantity });
              } else {
                itemsByCategory[category] = [{ label, quantity }];
              }
            });

            // Générer la chaîne de caractères triée par catégorie avec du HTML
            let str =
              "<h2>Menus Signatures :</h2> <p>Nombre de menus signature : " +
              nbrSignatureMenus +
              "</p><ul>";
            for (const category in itemsByCategory) {
              category.toUpperCase();
              str += `<li><strong>${category}:</strong></li>`;
              itemsByCategory[category].forEach((item) => {
                str += `<li>${item.label} x ${item.quantity}</li>`;
              });
            }
            str += "</ul> <h2>Menus Classiques : Aucun</h2>";

            return str;
          };
          const allData = {
            ...data,
            cartItems: cartSignatureItems(),
          };
          sendEmail(allData);
        }
      } else {
        // MENU CLASSIQUE SEUL
        if (entrees.length > 0 || plats.length > 0 || desserts.length > 0) {
          // IF MENU CLASSIQUE EN PLUS DE SIGNATURE
          if (
            (entrees.length > 0 && plats.length) ||
            (plats.length > 0 && desserts.length > 0)
          ) {
            // MENU CLASSIQUE
            toast.success("Réservation effectuée avec succès");
          } else {
            toast.error(
              "Veuillez choisir une entrée ou un dessert pour chaque menu classique"
            );
            return;
          }
        } else {
          toast.error("Veuillez choisir au moins un menu pour une réservation");
          return;
        }
      }
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

    const requiredFields = ["nom"];

    requiredFields.forEach((field) => {
      if (!data[field]) {
        error[field] = "Ce champ est requis";
      }
    });

    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Veuillez entrer une adresse email valide";
    }

    if (data.tel && !/^[0-9]{10}$/.test(data.tel)) {
      error.tel = "Veuillez entrer un numéro de téléphone valide";
    }
    return error;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="reservation-table">
        <div className="container">
          <h1>Réserver une table</h1>
          <p>
            <strong>Les champs annotés d'un astérisque * sont requis :</strong>
          </p>

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

            <div className="heure-input">
              <select
                name="heure"
                id="heure"
                {...register("heure")}
                className={`${errors.heure ? "error_form" : ""}`}
              >
                <option value="">HEURE DU DINER*</option>
                <option value="18H">18H</option>
                <option value="18H30">18H30</option>
                <option value="19H">19H</option>
                <option value="19H30">19H30</option>
                <option value="20H">20H</option>
                <option value="20H30">20H30</option>
                <option value="21H">21H</option>
              </select>
            </div>

            <div className="personnes-input">
              <select
                name="personnes"
                id="personnes"
                {...register("personnes")}
                className={`${errors.personnes ? "error_form" : ""}`}
              >
                <option value="">NOMBRE DE PERSONNES*</option>

                <option value="1">1</option>
              </select>
            </div>

            <div className="date-input">
              <Controller
                control={control}
                name="arrivee"
                className={`${errors.date ? "error_form" : ""}`}
                render={({ field }) => (
                  <DatePicker
                    id="dateId"
                    placeholderText="DATE*"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    className={`${errors.date ? "error_form" : ""}`}
                    dateFormat={"dd/MM/yyyy"}
                  />
                )}
              />
            </div>

            <div className="message-input">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="MESSAGE SUPPLÉMENTAIRE"
                {...register("message")}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation-signature">
        <div className="container">
          <h1>Menu Signature</h1>
          <br />
          <div className="container-signature">
            <div className="nbr-signature">
              <label htmlFor="nbr-signature">Nombres de menus signatures</label>
              <br />
              <br />
              <input
                type="number"
                name="nbr-signature"
                min="0"
                value={nbrSignatureMenus}
                onChange={(e) => {
                  setNbrSignatureMenus(Number(e.target.value));
                }}
              />
            </div>

            {categories.map((category) => (
              <>
                <h2>{category.name}</h2>
                <div className="form-signature">
                  {category.options.map((option) => (
                    <>
                      {option.signature && (
                        <div className="half-table" key={option.id}>
                          <input
                            type="number"
                            name={option.id}
                            defaultValue={0}
                            onChange={(e) =>
                              handleSignatureQuantityChange(
                                e,
                                option,
                                category.name
                              )
                            }
                          />
                          <label htmlFor={option.id}>{option.label}</label>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <div className={`reservation-${category.name}`} key={category.name}>
          <div className="container">
            <h1>{category.name}</h1>
            <div className={`form-${category.name}`}>
              {category.options.map((option) => (
                <>
                  {option.id === "couscous-agneau" && <p>Couscous</p>}
                  {option.id === "tajine-poulet-oignons" && <p>Tajines</p>}
                  <div className="half-table" key={option.id}>
                    <input
                      type="number"
                      name={option.id}
                      min="0"
                      defaultValue={0}
                      onChange={(e) =>
                        handleQuantityChange(e, option, category.name)
                      }
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
      <input
        type="submit"
        id="submit-table"
        name="submit-table"
        className="submit-table"
        value="RÉSERVER"
      />
    </form>
  );
}

export default TableForm;
