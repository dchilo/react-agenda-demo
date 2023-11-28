// usePersonas.js
import { useState } from 'react';

const usePersonas = () => {
  const [personas, setPersonas] = useState([]);
  const [editingPersona, setEditingPersona] = useState(null);

  const handleSavePersona = (persona) => {
    if (editingPersona) {
      setPersonas((prevPersonas) =>
        prevPersonas.map((p) => (p.id === editingPersona.id ? persona : p))
      );
      setEditingPersona(null);
    } else {
      setPersonas((prevPersonas) => [...prevPersonas, { ...persona, id: Date.now() }]);
    }
  };

  const handleDeletePersona = (id) => {
    setPersonas((prevPersonas) => prevPersonas.filter((persona) => persona.id !== id));
  };

  const handleEditPersona = (persona) => {
    setEditingPersona(persona);
  };

  return { personas, editingPersona, handleSavePersona, handleDeletePersona, handleEditPersona };
};

export default usePersonas;