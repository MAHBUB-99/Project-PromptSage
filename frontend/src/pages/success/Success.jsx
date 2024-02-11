import Navbar from "../../components/navbar/Navbar";

function Success() {
  return (
    <div className="max-h-full max-w-full bg-slate-900 pb-10">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
          Congratulations! Your payment was successful.
        </h1>
      </div>
    </div>
  );
}

export default Success;
