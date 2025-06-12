import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

const RecaptchaBlock = ({ onVerify, onExpire, siteKey }) => {
  const recaptchaRef = useRef();

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={siteKey}
      onChange={onVerify}
      onExpired={onExpire}
      className="mx-auto"
    />
  );
};

export default RecaptchaBlock;

