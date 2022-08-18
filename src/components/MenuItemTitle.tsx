type IMenuItemTitleProps = {
  children: string;
};

export const MenuItemTitle = (props: IMenuItemTitleProps) => {
  return (
    <h5 className="mb-2 text-4xl font-bold font-display tracking-tight text-gray-900 md:text-5xl">
      {props.children}
    </h5>
  );
};
