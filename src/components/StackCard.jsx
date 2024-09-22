const StackCard = ({ name, Icon }) => {
  return (
    <div className="bg-acc/25 w-[8rem] h-[6rem] lg:w-[10rem] lg:h-[8rem] border border-pri rounded-xl py-4 px-3 flex flex-col items-center justify-center mx-5 bottom-shadow cursor-pointer">
      <Icon className="fill-pri size-10" />
      <p className="text-white font-exo mt-2">{name}</p>
    </div>
  );
};

export default StackCard;
