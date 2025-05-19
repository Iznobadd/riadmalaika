import { useEffect, useState } from "react";

const STORAGE_KEY = "alcoholNoticeTimestamp";
const HOURS_24 = 24 * 60 * 60 * 1000;

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const savedTimestamp = localStorage.getItem(STORAGE_KEY);

    if (
      !savedTimestamp ||
      Date.now() - parseInt(savedTimestamp, 10) > HOURS_24
    ) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Important</h2>
        <p>
          Chers clients, merci de noter que nous ne sommes momentanément pas en
          mesure de servir d’alcool au Riad.
        </p>
        <button onClick={handleClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Popup;
