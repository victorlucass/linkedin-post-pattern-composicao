import { CardPostTextContent, SeeMore } from "./styles";

interface PostContentProps {
  text: string;
}
export function PostContent({ text }: PostContentProps) {
  return (
    <CardPostTextContent>
      <p>{text}</p>
      {text.length >= 200 ? <SeeMore>...See more</SeeMore> : null}
    </CardPostTextContent>
  );
}
