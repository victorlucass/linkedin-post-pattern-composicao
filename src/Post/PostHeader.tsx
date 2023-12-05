import { More } from "../svg/More";
import { CardPostHeaderContainer } from "./styles";

interface PostHeaderProps {
  children: React.ReactNode;
}
export function PostHeader({ children }: PostHeaderProps) {
  return (
    <CardPostHeaderContainer>
      {children}
      <button onClick={() => {alert("Clicou no botão")}}>
        <More />
      </button>
    </CardPostHeaderContainer>
  );
}
