const types = [
  { name: "Driving licence" },
  { name: "Certificate of registration" },
  { name: "Repair Estimate" },
  { name: "Claim form" },
  { name: "Insurance policy" },
  { name: "Damage vehicle photographs/video" },
  { name: "Aadhar card" },
  { name: "Pan card" },
  { name: "Cancel cheque" },
  { name: "Satisfaction voucher" },
  { name: "Discharge voucher" },
  { name: "Dismantle photographs" },
  { name: "Reinspection photographs" },
  { name: "Repair Invoice" },
  { name: "Payment/cash receipt" },
  { name: "Images" },
  { name: "Videos" },
];

const calculateDocuments = () => {
  const url = window.location.pathname;
  const inputString = url?.split("&content=")[1];
  const numberOfCommas = inputString?.split(",").length - 1;
  if (inputString === "") return 10;
  return numberOfCommas;
};

const getIndex = (label, datas) => {
  let index = -1;
  datas.map((data, idx) => {
    if (String(data[idx].docName) === String(label)) index = idx;
  });
  return index;
};

const location = (setLat, setLong, setLoc) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLong(longitude);
        setLoc(latitude + "," + longitude);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser");
  }
};

const customStyles = {
  content: {
    width: "100%",
    height: "80%",
    top: "60%",
    maxHeight: "80%",
    overflow: "auto",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};

function getUserMediaWithConstraints(videoConstraints) {
  return navigator.mediaDevices.getUserMedia({ video: videoConstraints });
}

const updateVideoConstraints = (setVideoConst) => {
  const isMobileView = window.innerWidth < 768;
  const updatedConstraints = isMobileView
    ? { width: 1280, height: 720, facingMode: "environment" }
    : { width: 1280, height: 720, facingMode: "user" };

  setVideoConst(updatedConstraints);
};

function generateRandomFileName(extension) {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ""); // Remove slashes from the date

  const formattedTime = currentDate
    .toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(/:/g, ""); // Remove colons from the time

  const randomString = Math.random().toString(36).substring(7); // Generate a random string

  if (extension === "jpg")
    return `image_${formattedDate}_${formattedTime}_${randomString}.${extension}`;

  return `video_${formattedDate}_${formattedTime}_${randomString}.${extension}`;
}

function getFileNameFromUrl(url) {
  const urlObject = new URL(url);

  const pathname = urlObject.pathname;

  const parts = pathname.split("/");
  const filename = parts[parts.length - 1];

  return filename;
}

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const changeCameraConstraints = (videoConst, setVideoConst) => {
  if (videoConst.facingMode === "user") {
    setVideoConst({
      height: videoConst.height,
      width: videoConst.width,
      facingMode: "environment",
    });
  } else {
    setVideoConst({
      height: videoConst.height,
      width: videoConst.width,
      facingMode: "user",
    });
  }
};

const checkWithinTheContent = (content, row) => {
  const present = content.includes(row.doc_name);
  return present;
};

function getUploadedVideoName() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${year}${month}${day}${hours}${minutes}${seconds}`;

  return "captured_video" + formattedDateTime + ".mp4";
}

const checkIsUploaded = (uploadedData, label) => {
  let selectedField = {};
  uploadedData.map((data, idx) => {
    if (String(label) === String(data.docName)) {
      selectedField = data;
    }
  });

  return selectedField;
};

module.exports = {
  types,
  calculateDocuments,
  getIndex,
  location,
  customStyles,
  getUserMediaWithConstraints,
  updateVideoConstraints,
  generateRandomFileName,
  getFileNameFromUrl,
  blobToBase64,
  changeCameraConstraints,
  checkWithinTheContent,
  getUploadedVideoName,
  checkIsUploaded,
};
