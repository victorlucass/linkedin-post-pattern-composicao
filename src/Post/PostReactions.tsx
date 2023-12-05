import { ReactNode } from "react";
import { Separator } from "../svg/Separator";
import { CardPostReactions, CardContentSpan } from "./styles";
import { Celebrate } from "../svg/reactions/Celebrate";
import { Curious } from "../svg/reactions/Curious";
import { Insightfull } from "../svg/reactions/Insightfull";
import { Like } from "../svg/reactions/Like";
import { Love } from "../svg/reactions/Love";
import { Suport } from "../svg/reactions/Suport";

interface PostReactionsProps {
  quantityComments: number;
  quantityReactions: number;
  iconList?: ReactNode[];
}

const iconListDefault = [
  <Like />,
  <Celebrate />,
  <Suport />,
  <Love />,
  <Insightfull />,
  <Curious />,
];

export function PostReactions({
  quantityComments,
  quantityReactions,
  iconList = iconListDefault,
}: PostReactionsProps) {
  return (
    <CardPostReactions>
      {iconList.map((icon, index) => (
        <button key={`${icon} + ${index}`}>{icon}</button>
      ))}
      <CardContentSpan>{quantityReactions}</CardContentSpan>
      <Separator />
      <CardContentSpan>{quantityComments} comments</CardContentSpan>
    </CardPostReactions>
  );
}
