import React, { useEffect, useState } from 'react';
import { Download as DownloadIcon, Smartphone } from 'lucide-react';

const FILE_ID = "17ZqUANk4XbSIXiBGEaLeppCf251J-E_R";
const API_KEY = "AIzaSyCEMNTh5tBoDgMVLvfw2fwg_1PeLayFIFY"; // replace with your key

const Download = () => {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/drive/v3/files/${FILE_ID}?fields=name,size,mimeType,modifiedTime&key=${API_KEY}`
        );
        const data = await res.json();
        setFileData({
          name: data.name,
          size: (data.size / (1024 * 1024 * 1024)).toFixed(2) + " GB",
          version: data.modifiedTime.split("T")[0], // just date as version
          link: `https://drive.google.com/uc?export=download&id=${FILE_ID}`,
        });
      } catch (err) {
        console.error("Error fetching file info:", err);
      }
    };

    fetchFileData();
  }, []);

  if (!fileData) {
    return <p className="text-gray-400 text-center">Loading download info...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/50">
      <div className="text-center mb-6">
        <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg mb-4">
          <Smartphone className="h-12 w-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Android</h3>
        <p className="text-gray-400">Get the latest APK for your Android device</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-300">File:</span>
          <span className="text-cyan-400 font-medium">{fileData.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Size:</span>
          <span className="text-cyan-400 font-medium">{fileData.size}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Version:</span>
          <span className="text-cyan-400 font-medium">{fileData.version}</span>
        </div>
      </div>

      <a
        href={fileData.link}
        download
        className="block text-center w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
      >
        <DownloadIcon className="h-5 w-5 inline mr-2" />
        Download Now
      </a>
    </div>
  );
};

export default Download;
