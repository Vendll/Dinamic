const Card = (props) => {
  return (
    <div className="rounded-lg bg-white border -mt-16 mb-3 mx-4 border-gray-200">
      {props.children}
    </div>
  );
};

export default Card;
