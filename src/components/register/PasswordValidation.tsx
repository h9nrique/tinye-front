import React from "react";

import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function PasswordValidation({ password }: { password: string }) {
  const passwordRequirements = [
    { regex: /[A-z]/, message: "Pelo menos uma letra" },
    { regex: /[0-9]/, message: "Pelo menos um número" },
    { regex: /[^A-Za-z0-9]/, message: "Pelo menos um caractere especial" },
    { regex: /.{6,}/, message: "Pelo menos 6 caracteres" },
  ];

  const validatePassword = (password: string) =>
    passwordRequirements.map((req) => ({
      ...req,
      isValid: req.regex.test(password),
    }));

  const validationResults = validatePassword(password);

  return (
    <div className="text-sm text-primary-light ml-2">
      <ul className="mt-2">
        {validationResults.map((req, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6 mr-1">
              {req.isValid ? (
                <FaCheck size={18} className=" text-secondary-dark" />
              ) : (
                <IoClose size={24} className="text-primary-light" />
              )}
            </div>
            <li
              className={
                req.isValid ? "text-secondary-dark" : "text-primary-light"
              }
            >
              {req.message}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
