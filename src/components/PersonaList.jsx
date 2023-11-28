// PersonaList.js
import Card from "./Card";

const PersonaList = ({ personas, onDelete, onEdit }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Personas</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((persona) => (
          <Card
            key={persona.id}
            persona={persona}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default PersonaList;
