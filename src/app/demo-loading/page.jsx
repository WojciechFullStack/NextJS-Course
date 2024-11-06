async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  export default async function DemoLoadingPage() {
    // Symulacja opóźnienia (np. 3 sekundy)
    await delay(8000);
  
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Strona załadowana!</h1>
        <p className="mt-4 text-lg">Ta strona załadowała się z opóźnieniem dla demonstracji działania pliku loading.jsx.</p>
      </div>
    );
  }