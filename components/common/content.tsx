export function Content({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container" className="h-full min-h-screen">
      {children}
    </main>
  );
}