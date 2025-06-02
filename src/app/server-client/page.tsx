import ThemeToggle from "@/components/ThemeToggle";

export default function ServerClientPage() {
  const currentDate = new Date().toLocaleString();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Data/Hora do Servidor</h1>
      <p>{currentDate}</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>Alternar Tema</h2>
      <ThemeToggle />
    </div>
  );
}
