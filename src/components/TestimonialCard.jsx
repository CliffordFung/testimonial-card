export default function TestimonalCard(props) {
  const { avatar, description, handle, name } = props;
  return (
    <div className="flex max-w-[340px] flex-col space-y-4 rounded-lg bg-white p-6 ">
      <div className="flex items-center space-x-4">
        <img className="size-12 rounded-full" src={avatar} alt="Sarah Dole" />
        <div className="overflow-hidden">
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-neutral-900">
            {name}
          </h1>

          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-neutral-600">
            {handle}
          </p>
        </div>
      </div>
      <p className="line-clamp-6 text-base text-neutral-600">{description}</p>
    </div>
  );
}
