import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/vmkcofficial";
  }, []);

  return null; // Or a loading spinner
};

export default InstagramRedirect;
