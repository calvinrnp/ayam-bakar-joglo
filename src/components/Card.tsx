type ICardProps = {
  title: string;
  desc?: string;
  image: string;
  titleClassName?: string;
}

export const Card = (props: ICardProps) => {
  const addTitleClassName = props.titleClassName ? props.titleClassName : "";
  return (
    <div className="max-w-sm">
      <img src={props.image} alt="Ayam Bakar" className="shadow-lg" />
      <div className="p-5">
        <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${addTitleClassName}`}>
          {props.title}
        </h5>
        {
          props.desc ? <p className='mb-3 font-base text-gray-700'>{props.desc}</p> : ""
        }
      </div>
    </div>
  );
};
