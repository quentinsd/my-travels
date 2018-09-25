import React from "react";
import Travel from "./Travel";

const travel = [
  {
    destination: "France",
    country: "Paris",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/f8/66/ce/paris-in-one-day-sightseeing.jpg",
    distance: "150km"
  },
  {
    destination: "Espagne",
    country: "Madrid",
    photo:
      "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/Madrid_undia_1397223554735_1400843264.672.jpg?itok:GKcu6COy",
    distance: "1100km"
  },
  {
    destination: "Japon",
    country: "Tokyo",
    photo:
      "https://www.fr.jal.co.jp/world/en/guidetojapan/detail/img/tokyo_tower/tokyo_tower_01.jpg",
    distance: "9950km"
  },
  {
    destination: "Canada",
    country: "Ottawa",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/cf/5b/85/rideau-canal-ottawa-tourism.jpg",
    distance: "5776km"
  },
  {
    destination: "Portugal",
    country: "Lisbonne",
    photo: "https://media.routard.com/image/62/8/lisbonne-2.1475628.w740.jpg",
    distance: "1600km"
  }
];

const Travels = () => (
  <div>
    {travel.map(travel => (
      <Travel
        destination={travel.destination}
        country={travel.country}
        photo={travel.photo}
        distance={travel.distance}
      />
    ))}
  </div>
);
export default Travels;
