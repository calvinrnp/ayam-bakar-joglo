type IMenuItemProps = {
  title: string;
  desc: string;
}

export const MenuItem = (props: IMenuItemProps) => {
  return (
    <div>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 mt-4 md:text-2xl">
        {props.title}
      </h5>
      <p className="mb-3 font-base text-gray-600">{props.desc}</p>
    </div>
  );
};
