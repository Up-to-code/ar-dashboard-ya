export function Button_x({ children }: { children: React.ReactNode }) {
  return (
    <div className=" py-2.5 px-5 font-bold text-white bg-[#3B4B65]  rounded-[34px] max-w-max  ">
      {children}
    </div>
  );
}

export function Button_xu({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-2.5 px-5 font-bold text-gray-800 bg-white rounded-[34px] max-w-max border-[0.5px] border-[#2643706c]  ">
      {children}
    </div>
  );
}
