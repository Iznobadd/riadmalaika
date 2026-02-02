import React, { useEffect, useState } from "react";
import categoriesData from "../../data/categories.json";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import img1Signature from "../../assets/images/signature1.jpg";
import img2Signature from "../../assets/images/signature2.jpg";
import img3Signature from "../../assets/images/signature3.jpg";
import img4Signature from "../../assets/images/signature4.jpg";
import img1Entree from "../../assets/images/entree1.jpg";
import img2Entree from "../../assets/images/entree2.jpg";
import img3Entree from "../../assets/images/entree3.jpg";
import img4Entree from "../../assets/images/entree4.jpg";
import img1Plat from "../../assets/images/plat1.jpg";
import img2Plat from "../../assets/images/plat2.jpg";
import img3Plat from "../../assets/images/plat3.jpg";
import img4Plat from "../../assets/images/plat4.jpg";
import img1Dessert from "../../assets/images/dessert1.jpg";
import img2Dessert from "../../assets/images/dessert2.jpg";
import img3Dessert from "../../assets/images/dessert3.jpg";
import img4Dessert from "../../assets/images/dessert4.jpg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function TableForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const [tel, setTel] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedSignatureItems, setSelectedSignatureItems] = useState([]);
  const [nbrSignatureMenus, setNbrSignatureMenus] = useState(0);
  const [nbrReveillonMenus, setNbrReveillonMenus] = useState(0);
  const [reveillonSelections, setReveillonSelections] = useState([]);

  useEffect(() => {
    // Initialize reveillon selections array when number changes
    const newSelections = Array.from(
      { length: nbrReveillonMenus },
      (_, index) => {
        return (
          reveillonSelections[index] || {
            first: "",
            second: "",
            third: "",
            fourth: "",
          }
        );
      },
    );
    setReveillonSelections(newSelections);
  }, [nbrReveillonMenus]);

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
        (item) => item.id === option.id && item.category === category,
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
        (item) => item.id !== option.id || item.category !== category,
      );
      setSelectedItems(updatedItems);
    }
  };

  const handleSignatureQuantityChange = (e, option, category) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      // Vérifie si l'option est déjà dans les éléments sélectionnés du menu "Signature"
      const existingItem = selectedSignatureItems.find(
        (item) => item.id === option.id && item.category === category,
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
        (item) => item.id !== option.id || item.category !== category,
      );
      setSelectedSignatureItems(updatedItems);
    }
  };

  const handleReveillonSelection = (menuIndex, course, value) => {
    const newSelections = [...reveillonSelections];
    newSelections[menuIndex] = {
      ...newSelections[menuIndex],
      [course]: value,
    };
    setReveillonSelections(newSelections);
  };

  const generateReveillonHTML = (data) => {
    if (nbrReveillonMenus === 0) {
      return "<h2>Menu Réveillon : Aucun</h2>";
    }

    let str = `<h2>Menu Réveillon (24 & 31/12/2025) :</h2>`;
    str += `<p><strong>Nombre de menus réveillon :</strong> ${nbrReveillonMenus}</p>`;
    str += `<p><strong>Prix :</strong> 590 MAD par personne</p>`;

    // Afficher les choix de chaque personne
    reveillonSelections.forEach((selection, index) => {
      const { first, second, third, fourth } = selection;
      str += `<h3>Menu ${index + 1} :</h3>`;
      str += `<p><em>Amuse Bouche : Découverte Des Saveurs du Maroc</em></p>`;
      str += `<p><strong>Premier Temps :</strong> ${first}</p>`;
      str += `<p><strong>Deuxième Temps :</strong> ${second}</p>`;
      str += `<p><strong>Troisième Temps :</strong> ${third}</p>`;
      str += `<p><strong>Quatrième Temps :</strong> ${fourth}</p>`;
      str += `<p><em>Finalité : Café ou Thé et Pâtisseries Orientales</em></p>`;
    });

    const demandeSpeciale = data["demande-reveillon"] || "";
    str += `<p><strong>Demande spéciale :</strong> ${demandeSpeciale}</p>`;
    return str;
  };

  const onSubmit = (data) => {
    const selectedDate = data.date;
    if (selectedDate.getDay() === 0) {
      toast.error("Le restaurant est fermé le dimanche");
      return;
    }
    const errors = validateData(data);
    console.log(errors);
    if (Object.keys(errors).length) {
      Object.keys(errors).forEach((field) => {
        setError(field, {
          type: "manual",
          message: errors[field],
        });
      });
      toast.error("Veuillez remplir les champs obligatoires");
      return;
    } else {
      // Validation menu Réveillon
      if (nbrReveillonMenus > 0) {
        for (let i = 0; i < nbrReveillonMenus; i++) {
          const selection = reveillonSelections[i];
          if (
            !selection ||
            !selection.first ||
            !selection.second ||
            !selection.third ||
            !selection.fourth
          ) {
            toast.error(
              `Veuillez sélectionner un choix pour chaque temps du menu Réveillon ${i + 1}`,
            );
            return;
          }
        }
      }

      const entreesSignature = selectedSignatureItems.filter(
        (item) => item.category === "entree",
      );
      const platsSignature = selectedSignatureItems.filter(
        (item) => item.category === "plat",
      );
      const dessertsSignature = selectedSignatureItems.filter(
        (item) => item.category === "desserts",
      );
      const entrees = selectedItems.filter(
        (item) => item.category === "entree",
      );
      const plats = selectedItems.filter((item) => item.category === "plat");
      const desserts = selectedItems.filter(
        (item) => item.category === "desserts",
      );
      setNbrSignatureMenus(Number(nbrSignatureMenus));
      console.log("nbrSignatureMenus", nbrSignatureMenus);

      if (nbrSignatureMenus > 0) {
        const totalEntreesSignatureQuantity = entreesSignature.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        const totalPlatsSignatureQuantity = platsSignature.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        const totalDessertsSignatureQuantity = dessertsSignature.reduce(
          (total, item) => total + item.quantity,
          0,
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
            "Veuillez choisir une entrée, un plat et un dessert pour chaque menu signature",
          );
          return;
        }
        if (
          totalEntreesSignatureQuantity !== nbrSignatureMenus ||
          totalPlatsSignatureQuantity !== nbrSignatureMenus ||
          totalDessertsSignatureQuantity !== nbrSignatureMenus
        ) {
          toast.error(
            "Le nombre de menus signature ne correpond pas au nombre d'entrées, de plats ou de desserts choisis",
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
            const cartSignatureItems = () => {
              // Créer un objet pour stocker les éléments par catégorie
              const itemsByCategory = {};
              const classicItemsByCategory = {};
              // Regrouper les éléments par catégorie
              selectedSignatureItems.forEach((item) => {
                const { category, label, quantity } = item;
                if (itemsByCategory[category]) {
                  itemsByCategory[category].push({ label, quantity });
                } else {
                  itemsByCategory[category] = [{ label, quantity }];
                }
              });

              selectedItems.forEach((item) => {
                const { category, label, quantity } = item;
                if (classicItemsByCategory[category]) {
                  classicItemsByCategory[category].push({ label, quantity });
                } else {
                  classicItemsByCategory[category] = [{ label, quantity }];
                }
              });

              // Générer la chaîne de caractères triée par catégorie avec du HTML
              let str = generateReveillonHTML(data);
              str +=
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
              str += ` </ul><p><strong>Demande spéciale :</strong> ${data["demande-signature"]}</p><h2>Menus Classiques : : </h2>`;
              for (const category in classicItemsByCategory) {
                category.toUpperCase();
                str += `<h4><strong>${category}:</strong></h4><ul>`;
                classicItemsByCategory[category].forEach((item) => {
                  str += `<li>${item.label} x ${item.quantity}</li>`;
                });
                const demandeSpeciale = data[`demande-${category}`] || "";
                str += `</ul> <p>Demande spéciale : ${demandeSpeciale}</p>`;
              }

              return str;
            };
            const formatDate = new Date(data.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const allData = {
              ...data,
              tel,
              formatDate,
              cartItems: cartSignatureItems(),
            };
            sendEmail(allData);
          } else {
            toast.error(
              "Veuillez choisir une entrée ou un dessert pour chaque menu classique",
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
            let str = generateReveillonHTML(data);
            str +=
              "<h2>Menus Signatures :</h2> <p>Nombre de menus signature : " +
              nbrSignatureMenus +
              "</p>";
            for (const category in itemsByCategory) {
              category.toUpperCase();
              str += `<h4><strong>${category}:</strong></h4><ul>`;
              itemsByCategory[category].forEach((item) => {
                str += `<li>${item.label} x ${item.quantity}</li>`;
              });
              str += `</ul>`;
            }

            str += ` <p><strong>Demande spéciale :</strong> ${data["demande-signature"]}</p><h2>Menus Classiques : Aucun</h2>`;

            return str;
          };
          const formatDate = new Date(data.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const allData = {
            ...data,
            tel,
            formatDate,
            cartItems: cartSignatureItems(),
          };
          sendEmail(allData);
        }
      } else {
        // MENU CLASSIQUE SEUL
        if (entrees.length > 0 || plats.length > 0 || desserts.length > 0) {
          if (
            (entrees.length > 0 && plats.length) ||
            (plats.length > 0 && desserts.length > 0)
          ) {
            // MENU CLASSIQUE
            const cartSignatureItems = () => {
              // Créer un objet pour stocker les éléments par catégorie
              const itemsByCategory = {};
              // Regrouper les éléments par catégorie
              selectedItems.forEach((item) => {
                const { category, label, quantity } = item;
                if (itemsByCategory[category]) {
                  itemsByCategory[category].push({ label, quantity });
                } else {
                  itemsByCategory[category] = [{ label, quantity }];
                }
              });

              // Générer la chaîne de caractères triée par catégorie avec du HTML
              let str = generateReveillonHTML(data);
              str +=
                "<h2>Menus Signatures : Aucun</h2> <h2>Menus Classiques : </h2>";
              for (const category in itemsByCategory) {
                category.toUpperCase();
                str += `<h4><strong>${category}:</strong></h4><ul>`;
                itemsByCategory[category].forEach((item) => {
                  str += `<li>${item.label} x ${item.quantity}</li>`;
                });
                const demandeSpeciale = data[`demande-${category}`] || "";
                str += `</ul> <p>Demande spéciale : ${demandeSpeciale}</p>`;
              }
              str += "</ul>";

              return str;
            };
            const formatDate = new Date(data.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const allData = {
              ...data,
              tel,
              formatDate,
              cartItems: cartSignatureItems(),
            };
            sendEmail(allData);
          } else {
            toast.error(
              "Veuillez choisir une entrée ou un dessert pour chaque menu classique",
            );
            return;
          }
        } else {
          // Vérifier si un menu Réveillon a été sélectionné
          if (nbrReveillonMenus > 0) {
            // MENU REVEILLON SEUL
            const cartItems = () => {
              let str = generateReveillonHTML(data);
              str += "<h2>Menus Signatures : Aucun</h2>";
              str += "<h2>Menus Classiques : Aucun</h2>";
              return str;
            };
            const formatDate = new Date(data.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const allData = {
              ...data,
              tel,
              formatDate,
              cartItems: cartItems(),
            };
            sendEmail(allData);
          } else {
            toast.error(
              "Veuillez choisir au moins un menu pour une réservation",
            );
            return;
          }
        }
      }
    }
  };

  const sendEmail = (data) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_TABLE_RIAD_ID,
        data,
        process.env.REACT_APP_USER_ID,
      )
      .then((result) => {
        toast.success(
          "Votre demande a bien été prise en compte et vous allez recevoir un e-mail avec tous les détails, tarifs et conditions.",
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

    const requiredFields = ["nom", "email", "date", "heure", "personnes"];

    requiredFields.forEach((field) => {
      if (!data[field]) {
        error[field] = "Ce champ est requis";
      }
    });

    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Veuillez entrer une adresse email valide";
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
              <PhoneInput
                placeholder="TÉLÉPHONE*"
                defaultCountry="FR"
                value={tel}
                onChange={setTel}
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
                {Array.from({ length: 30 }, (_, index) => (
                  <option value={index + 1} key={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="date-input">
              <Controller
                control={control}
                name="date"
                className={`${errors.date ? "error_form" : ""}`}
                render={({ field }) => (
                  <DatePicker
                    id="dateId"
                    placeholderText="DATE*"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    className={`${errors.date ? "error_form" : ""}`}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={new Date()}
                    locale="fr"
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
      {/* <div className="reservation-reveillon">
        <div className="container">
          <h1>Menu Réveillon 24 & 31/12/2025</h1>
          <p className="reveillon-intro">
            <strong>Menu unique en 4 temps - 590 MAD</strong>
          </p>
          <div className="container-reveillon">
            <div className="nbr-reveillon">
              <label htmlFor="nbr-reveillon">Nombre de menus réveillon</label>
              <br />
              <br />
              <input
                type="number"
                name="nbr-reveillon"
                min="0"
                value={nbrReveillonMenus}
                onChange={(e) => {
                  setNbrReveillonMenus(Number(e.target.value));
                }}
              />
            </div>

            {Array.from({ length: nbrReveillonMenus }, (_, menuIndex) => (
              <div key={menuIndex} className="reveillon-menu-individual">
                <h2 className="reveillon-menu-title">Menu {menuIndex + 1}</h2>

                <div className="reveillon-amuse">
                  <h3>Amuse Bouche</h3>
                  <p>Découverte Des Saveurs du Maroc</p>
                </div>

                <div className="reveillon-course-selection">
                  <h3>Premier Temps</h3>
                  <div className="reveillon-options">
                    <label>
                      <input
                        type="radio"
                        name={`first-course-${menuIndex}`}
                        value="Pastilla Foie Gras"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "first", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.first === "Pastilla Foie Gras"
                        }
                      />
                      Pastilla Foie Gras
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`first-course-${menuIndex}`}
                        value="Fraicheur de Homard à l'Avocat & Epices"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "first", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.first ===
                          "Fraicheur de Homard à l'Avocat & Epices"
                        }
                      />
                      Fraicheur de Homard à l'Avocat & Epices
                    </label>
                  </div>
                </div>

                <div className="reveillon-course-selection">
                  <h3>Deuxième Temps</h3>
                  <div className="reveillon-options">
                    <label>
                      <input
                        type="radio"
                        name={`second-course-${menuIndex}`}
                        value="Homard et Safran en Fines Ravioles"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "second", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.second ===
                          "Homard et Safran en Fines Ravioles"
                        }
                      />
                      Homard et Safran en Fines Ravioles
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`second-course-${menuIndex}`}
                        value="Mosaïque de Gambas, Fumée de Crustacés & Boules de Riz Frit"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "second", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.second ===
                          "Mosaïque de Gambas, Fumée de Crustacés & Boules de Riz Frit"
                        }
                      />
                      Mosaïque de Gambas, Fumée de Crustacés & Boules de Riz Frit
                    </label>
                  </div>
                </div>

                <div className="reveillon-course-selection">
                  <h3>Troisième Temps</h3>
                  <div className="reveillon-options">
                    <label>
                      <input
                        type="radio"
                        name={`third-course-${menuIndex}`}
                        value="Filet de Boeuf en Croute Farcie Epinards & Champignons"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "third", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.third ===
                          "Filet de Boeuf en Croute Farcie Epinards & Champignons"
                        }
                      />
                      Filet de Boeuf en Croute Farcie Epinards & Champignons
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`third-course-${menuIndex}`}
                        value="Cabillaud à l'Orange Crumble de Chorizo, Sauce à l'Orange et Patates Douces"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "third", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.third ===
                          "Cabillaud à l'Orange Crumble de Chorizo, Sauce à l'Orange et Patates Douces"
                        }
                      />
                      Cabillaud à l'Orange Crumble de Chorizo, Sauce à l'Orange et Patates Douces
                    </label>
                  </div>
                </div>

                <div className="reveillon-course-selection">
                  <h3>Quatrième Temps</h3>
                  <div className="reveillon-options">
                    <label>
                      <input
                        type="radio"
                        name={`fourth-course-${menuIndex}`}
                        value="Buchette Rouge & Pistache"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "fourth", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.fourth ===
                          "Buchette Rouge & Pistache"
                        }
                      />
                      Buchette Rouge & Pistache
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`fourth-course-${menuIndex}`}
                        value="Buchette Douceur Mandarine & Chocolat « Esprit de Noel »"
                        onChange={(e) =>
                          handleReveillonSelection(menuIndex, "fourth", e.target.value)
                        }
                        checked={
                          reveillonSelections[menuIndex]?.fourth ===
                          "Buchette Douceur Mandarine & Chocolat « Esprit de Noel »"
                        }
                      />
                      Buchette Douceur Mandarine & Chocolat « Esprit de Noel »
                    </label>
                  </div>
                </div>

                <div className="reveillon-finale">
                  <h3>Finalité</h3>
                  <p>Café ou Thé et Pâtisseries Orientales</p>
                </div>
              </div>
            ))}

            {nbrReveillonMenus > 0 && (
              <div className="form-reveillon">
                <div className="demande-speciale">
                  <label htmlFor="demande-reveillon">DEMANDE SPÉCIALE</label>
                  <textarea
                    name="demande-reveillon"
                    id="demande-reveillon"
                    cols="10"
                    rows="3"
                    {...register("demande-reveillon")}
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
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
                <h2>
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                  {category.name.toLowerCase().endsWith("s") ? "" : "s"}
                </h2>
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
                                category.name,
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
            <div className="form-signature">
              <div className="demande-speciale">
                <label htmlFor="demande-signature">DEMANDE SPÉCIALE</label>
                <textarea
                  name="demande-signature"
                  id="demande-signature"
                  cols="10"
                  rows="3"
                  {...register("demande-signature")}
                ></textarea>
              </div>
            </div>
            <div className="imgs-signatures">
              <img src={img1Signature} alt="signature" />
              <img src={img2Signature} alt="signature" />
              <img src={img3Signature} alt="signature" />
              <img src={img4Signature} alt="signature" />
            </div>
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <div className={`reservation-${category.name}`} key={category.name}>
          <div className="container">
            {category.name === "entree" && (
              <>
                <div style={{ height: "20px" }}></div>
                <p
                  className="intro-table text-center"
                  style={{ paddingTop: "20px" }}
                >
                  <b>
                    Si vous préferez diner à la carte, merci de bien vouloir
                    choisir par personne :<br />
                    <u>Entrée + plat + dessert</u> | <u>Entrée + plat</u> |{" "}
                    <u>Plat + dessert</u>
                  </b>
                </p>
              </>
            )}
            <h1>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              {category.name.toLowerCase().endsWith("s") ? "" : "s"}
            </h1>
            <div className={`form-${category.name}`}>
              {category.options.map((option) => (
                <>
                  {option.id !== "couscous-imperial" &&
                    option.id !== "terre-mer-gambas" &&
                    option.id !== "boeuf-tataki" &&
                    option.id !== "lotte-bardee" && (
                      <>
                        {option.id === "ravioles-araignee" && (
                          <p>Nos plats de la mer</p>
                        )}
                        {option.id === "boeuf-tataki-simple" && (
                          <p>Nos viandes & Ravioles</p>
                        )}
                        {option.id === "couscous-imperial-simple" && (
                          <p>Nos plats marocains</p>
                        )}
                        {option.id === "menu-enfant" && <p>Menu enfant</p>}

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
                    )}
                </>
              ))}
              <div className="demande-speciale">
                <label htmlFor={`demande-${category.name}`}>
                  DEMANDE SPÉCIALE
                </label>
                <textarea
                  name={`demande-${category.name}`}
                  id={`demande-${category.name}`}
                  cols="10"
                  rows="3"
                  {...register(`demande-${category.name}`)}
                ></textarea>
              </div>
              <div className="imgs-signatures">
                {category.name === "entree" && (
                  <>
                    <img src={img1Entree} alt="Entree Riad Malaïka" />
                    <img src={img2Entree} alt="Entree Riad Malaïka" />
                    <img src={img3Entree} alt="Entree Riad Malaïka" />
                    <img src={img4Entree} alt="Entree Riad Malaïka" />
                  </>
                )}
                {category.name === "plat" && (
                  <>
                    <img src={img1Plat} alt="Plat Riad Malaïka" />
                    <img src={img2Plat} alt="Plat Riad Malaïka" />
                    <img src={img3Plat} alt="Plat Riad Malaïka" />
                    <img src={img4Plat} alt="Plat Riad Malaïka" />
                  </>
                )}
                {category.name === "desserts" && (
                  <>
                    <img src={img1Dessert} alt="signature" />
                    <img src={img2Dessert} alt="signature" />
                    <img src={img3Dessert} alt="signature" />
                    <img src={img4Dessert} alt="signature" />
                  </>
                )}
              </div>
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
