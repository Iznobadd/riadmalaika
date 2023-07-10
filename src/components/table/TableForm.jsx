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
      const entrees = selectedItems.filter(
        (item) => item.category === "entree"
      );
      const plats = selectedItems.filter((item) => item.category === "plat");
      const desserts = selectedItems.filter(
        (item) => item.category === "dessert"
      );
      if (
        (entrees.length > 0 && plats.length > 0 && desserts.length > 0) ||
        (entrees.length > 0 && plats.length > 0 && desserts.length === 0) ||
        (entrees.length === 0 && plats.length > 0 && desserts.length > 0)
      ) {
        console.log(entrees.length);
        console.log(plats.length);
        console.log(desserts);
      }
    }
  };

  const validateData = (data) => {
    const error = {};

    const requiredFields = [
      "nom",
      "email",
      "tel",
      "date",
      "heure",
      "personnes",
    ];

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
