import { useEffect } from "react";

const DiscordRedirect = () => {
  useEffect(() => {
    window.location.href = "https://discord.gg/HwZKKJ4CWf";
  }, []);

  return null; // Or a loading spinner
};

export default DiscordRedirect;
