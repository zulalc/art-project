type Props = {
  name: string;
  description?: string;
  image: string;
};

const Exhibition = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] overflow-hidden rounded-2xl shadow-lg">
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center 
        bg-blue-400/80 text-white text-center opacity-0 transition duration-500 hover:opacity-100"
      >
        <p className="text-2xl font-semibold">{name}</p>
        {description && <p className="mt-4 px-6 text-sm">{description}</p>}
      </div>

      <img
        alt={name}
        src={image}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </li>
  );
};

export default Exhibition;
