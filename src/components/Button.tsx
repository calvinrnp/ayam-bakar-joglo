type ButtonProps = {
  children: string;
  className?: string;
  variant: string;
  href: string;
};

export const Button = (props: ButtonProps) => {
  const addClassName = props.className ? props.className : "";
  const variants = {
    "outline-red":
      "border-2 border-ayam-red bg-transparent text-black hover:bg-ayam-darkred hover:text-white",
    "solid-red":
      "border border-transparent bg-ayam-red text-white hover:bg-ayam-darkred",
  };

  const pickedVariant = () => {
    switch (props.variant) {
      case "solid-red":
        return variants[props.variant];
      case "outline-red":
        return variants[props.variant];
      default:
        return "";
    }
  };

  return (
    <a
      href={props.href}
      className={`py-3 px-10 inline-block rounded-full shadow-sm text-base ${pickedVariant()} ${addClassName}`}
    >
      {props.children}
    </a>
  );
};
