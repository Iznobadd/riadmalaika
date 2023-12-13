import React, { useEffect } from "react";
import { saveAs } from "file-saver";

function QRCode() {
  useEffect(() => {
    // Fonction pour télécharger le PDF
    const downloadPDF = async () => {
      try {
        // Remplacez 'url_du_pdf.pdf' par le chemin vers votre fichier PDF
        const pdfUrl = "assets/menu.pdf";

        // Téléchargement du fichier PDF
        const response = await fetch(pdfUrl);
        const blob = await response.blob();

        // Enregistrement du fichier PDF
        saveAs(blob, "menu_riad_malaika.pdf");
        window.open(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Erreur lors du téléchargement du PDF : ", error);
      }
    };

    // Appel de la fonction pour télécharger le PDF lorsque le composant est monté
    downloadPDF();
  }, []);

  return (
    <div>
      <p>Téléchargement du PDF en cours...</p>
    </div>
  );
}

export default QRCode;
