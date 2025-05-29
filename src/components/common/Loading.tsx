

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img 
      src="/logo.png" 
      alt="Logo" 
      className="h-20 w-20 animate-spin"
      />
      <p className="mt-4 text-lg text-accent-800 font-display animate-pulse">
      Loading beautiful experiences...
      </p>
    </div>
  );
};

export default Loading;