import React from "react";

type props = {
  label: string;
  name: string;
  placeholder: string;
};

function FormControl({ label, name, placeholder }: props) {
  return (
    <div className="flex flex-col justify-start gap-2 w-full">
      <label className="text-primary" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-secondary border rounded-[4px] px-3 py-4 text-sm outline-primary"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormControl;
