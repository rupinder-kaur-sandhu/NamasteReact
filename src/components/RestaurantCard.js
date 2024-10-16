const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  console.log(resData);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50  hover:bg-gray-400">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4> {avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} minutes</h4>
    </div>
  );
};
// higher order component
//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
