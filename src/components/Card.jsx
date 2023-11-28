import Button from "./button/Button";

const Card = ({ persona, onDelete, onEdit }) => {
  return (
    <li key={persona.id} className="bg-white p-4 shadow rounded-md">
      <div className="mb-2">
        <span className="font-bold">Nombre:</span> {persona.nombre}{" "}
        {persona.apellido}
      </div>
      <div className="mb-2">
        <span className="font-bold">Teléfono:</span> {persona.telefono}
      </div>
      <div className="flex justify-end gap-5">
        <Button
          onClick={() => onEdit(persona)}
          text="Editar"
          color="blue"
        />
        <Button
          onClick={() => onDelete(persona.id)}
          text="Eliminar"
          color="red"
        />
      </div>
    </li>
  );
};

export default Card;
