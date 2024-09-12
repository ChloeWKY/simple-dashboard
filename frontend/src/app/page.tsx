import Dashboard from './components/Dashboard';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {/* Dashboard component here */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Chart Dashboard</h2> {}
          <Dashboard /> {}
        </div>
      </main>
      
    </div>
  );
}