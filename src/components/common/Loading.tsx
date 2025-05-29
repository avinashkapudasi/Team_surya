import { Flower } from 'lucide-react';

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Flower className="h-16 w-16 text-primary-500 animate-spin" />
      <p className="mt-4 text-lg text-accent-800 font-display animate-pulse">
        Loading beautiful experiences...
      </p>
    </div>
  );
};

export default Loading;