import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export const FiveStarRating = ({ rating }) => {
  const startList = [];

  const starFillCount = Math.floor(rating);

  const hasHalfsStar = rating - parseInt(rating) >= 0.5;

  const emptyStarCount = 5 - starFillCount - (hasHalfsStar ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    startList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasHalfsStar) {
    startList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 1; i <= emptyStarCount; i++) {
    startList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{startList}</div>;
};
