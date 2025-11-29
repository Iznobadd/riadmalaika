import Signature from "../../assets/images/carte_signature.jpg";
import Lightbox from "../partials/Lightbox";

function SignatureMenu() {
  return (
    <div className="carte">
      <div className="container">
        <Lightbox
          galleryID="signature-gallery"
          images={[
            {
              largeURL: Signature,
              thumbnailURL: Signature,
              width: 1080,
              height: 1920,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default SignatureMenu;
