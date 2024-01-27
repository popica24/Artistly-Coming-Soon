import { CSSProperties, useState } from "react";
import { toast } from "react-toastify";
import * as EmailValidator from "email-validator";
import React from "react";
import emailjs from "@emailjs/browser";

const EmailContainer = () => {
  const shadowStyle: CSSProperties = {
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  };

  const [form, setForm] = useState("");

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = EmailValidator.validate(form);

    if (res) {
      const serviceId = "service_8q3jb7l";
      const templateId = "template_n834twj";
      const publicKey = "zl0p8A2fHeIVk-y3j";

      const templateParams = {
        from_name: "Artistly",
        from_email: form,
        to_name: "Artistly Admin",
        message: "Un email nou a fost adaugat la newsletter ! " + form,
      };
      setForm("");
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => toast.success("Email trimis cu succes !"))
        .catch(() => {
          toast.error("A aparut o eroare, incercati mai tarziu !");
        });
    } else {
      toast.error("Email invalid");
    }
  };

  return (
    <div
      className="flex flex-row xs:flex-col items-center justify-center bg-[#F0F0F0] mt-32 px-0 xs:px-10 py-5"
      style={shadowStyle}
    >
      <div>
        <img
          src="src\assets\hero-mail.png"
          alt="Promo for the website"
          width={300}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="max-w-[75ch] xs:ms-0 ms-24 xs:text-[0.8rem] text-[1rem] py-0 xs:py-4 text-[#000] text-center">
          Lansarea site-ului nostru este aproape, și vrem să împărtășim ceva
          special cu voi! Abonându-te acum, vei avea beneficii exclusive și vei
          fi printre primii care vor explora totul.
        </span>
        <span className="text-[1.2rem] font-medium my-5 xs:text-[0.9rem]">
          Afla cand platforma noastra este online
        </span>
        <div className="flex flex-row">
          <form onSubmit={(e) => sendMail(e)} className="flex">
            <input
              type="text"
              name="user_email"
              id="userEmail"
              className="rounded-s-[2.1875rem] xs:w-[250px] w-[420px] px-5 "
              placeholder="Adresa de email"
              onChange={(e) => setForm(e.target.value)}
              value={form}
            />
            <button className="bg-[#FFB703] rounded-e-[6.25rem] px-6 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="26"
                viewBox="0 0 46 34"
                fill="none"
              >
                <path
                  d="M45.1465 0.168457L36.2148 29.1653L34.7837 33.8121L30.7033 30.3696L20.0385 21.3762L45.1465 0.168457Z"
                  fill="#730CB7"
                />
                <path
                  d="M45.1465 0.168457L14.1149 18.0833L-6.10352e-05 13.4076L45.1465 0.168457Z"
                  fill="#510087"
                />
                <path
                  d="M45.1465 0.168457L20.0393 21.3762L15.2141 31.0204L14.1149 18.0833L45.1465 0.168457Z"
                  fill="#37005B"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailContainer;
