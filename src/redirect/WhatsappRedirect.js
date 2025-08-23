import { useEffect } from "react";

const WhatsappRedirect = () => {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/DSjrzWCU0mHB9tc1hR7ivz";
  }, []);

  return null; // Or a loading spinner
};

export default WhatsappRedirect;
