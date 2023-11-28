
import PersonaForm from './components/PersonaForm';
import PersonaList from './components/PersonaList';
import usePersonas from './hooks/usePersona';

const App = () => {
  const { personas, editingPersona, handleSavePersona, handleDeletePersona, handleEditPersona } = usePersonas();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Agenda</h1>
      <PersonaForm onSubmit={handleSavePersona} initialData={editingPersona} />
      <PersonaList personas={personas} onDelete={handleDeletePersona} onEdit={handleEditPersona} />
    </div>
  );
};

export default App;