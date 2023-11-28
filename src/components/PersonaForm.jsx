// PersonaForm.js
import { useState, useEffect } from "react";
import Button from "./button/Button";
import InputField from "./InputField";

const PersonaForm = ({ onSubmit, initialData = {} }) => {
  const [persona, setPersona] = useState(initialData);

  useEffect(() => {
    setPersona(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona((prevPersona) => ({ ...prevPersona, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(persona);
    setPersona({}); // Limpiar el formulario después de enviar
  };

  return (
    <form className="mb-8" onSubmit={handleSubmit}>
      <InputField
        label="Nombre"
        type="text"
        name="nombre"
        value={persona?.nombre}
        onChange={handleChange}
      />
      <InputField
        label="Apellido"
        type="text"
        name="apellido"
        value={persona?.apellido}
        onChange={handleChange}
      />
      <InputField
        label="Teléfono"
        type="tel"
        name="telefono"
        value={persona?.telefono}
        onChange={handleChange}
      />
      <Button text="Guardar" color="blue" type="submit" />
    </form>
  );
};

export default PersonaForm;
