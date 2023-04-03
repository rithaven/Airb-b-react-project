

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    
      <div className="relative flex-col items-center text-sm md:ml-24">
        {badgeText && (
          <div className="absolute top-0 px-2 py-0 mt-2 font-bold bg-white rounded-sm left-6 md:py-2">
            {badgeText}
          </div>
        )}
        <img
          src={`/images/${props.coverImg}`}
          className="object-cover rounded-sm h-60 lg:h-96 md:w-96 "
        />
        <div className="flex items-center mb-4 ">
          <img src="/images/star.png" className="h-4" />
          <span>{props.stats.rating}</span>
          <span className="text-gray-500 ">({props.stats.reviewCount}) • </span>
          <span className="text-gray-500">{props.location}</span>
        </div>
        <p className="mb-2 text-gray-500">{props.title}</p>
        <p className="text-gray-500">
          <span className="font-bold">From ${props.price}</span> / person
        </p>
      </div>
   
  );
}
