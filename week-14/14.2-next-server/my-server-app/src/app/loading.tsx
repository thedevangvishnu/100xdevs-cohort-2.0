export default function Loading() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="w-8 h-8 border-4 rounded-[50%] animate-pulse border-slate-800"></div>
      <div className="flex justify-center">Loading...</div>
    </div>
  );
}
