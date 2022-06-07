function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card(props) {
  return (
    <div className="rounded-lg bg-white border border-gray-200">
      {props.children}
    </div>
  );
}

export default Card;
