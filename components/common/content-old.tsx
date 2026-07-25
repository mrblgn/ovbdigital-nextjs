export function Content({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container" className="ml-[5.625rem]">
      <div id="page-content" className="h-full min-h-screen">
        {children}
      </div>
    </main>
  );
}