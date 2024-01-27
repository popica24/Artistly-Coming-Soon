import { toast } from "react-toastify";

const ShareContainer = () => {
  const copyToClipboard = () => {
    toast.info("Link-ul a fost copiat in notițele tale !");
    const link = window.location;
    navigator.clipboard.writeText(link.toString());
  };
  return (
    <div className="mb-20">
      <div className="bg-[#033] text-white py-2 text-center ">
        Ajută-ne să împărtășim și să răspândim această experiență incredibilă cu
        prietenii tăi
      </div>
      <div className="flex justify-center relative mt-10">
        <button
          className="bg-[#FFB703] font-semibold rounded-[2.8815rem] py-3 px-8 flex flex-row items-center relative cta-shadow"
          onClick={copyToClipboard}
        >
          <span className="me-1 text-[1.125rem]">Distribuie</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 24 23"
            fill="none"
          >
            <g clip-path="url(#clip0_946_1805)">
              <path
                d="M12.5762 5.3153C5.99621 5.65796 0.704559 11.1195 0.704559 17.7829V22.4264L2.36594 18.5587C4.33085 14.6296 8.22936 12.1173 12.5762 11.8863V17.2009L23.1183 8.58347L12.5762 -0.00268555V5.3153Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_946_1805">
                <rect
                  width="22.4291"
                  height="22.4291"
                  fill="white"
                  transform="translate(0.696838 -0.00268555)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShareContainer;
