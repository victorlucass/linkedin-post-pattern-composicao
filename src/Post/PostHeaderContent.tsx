import { Globe } from "../svg/Globe";
import { Separator } from "../svg/Separator";
import { CardPostHeaderContent, CardPostHeaderTitle, CardContentSpan, CardPostHeaderInfo } from "./styles";

interface PostHeaderProps {
  gitHubAvatarUrl: string;
  name: string;
  followers: number;
  time: string;
}
export function PostHeaderContent({ gitHubAvatarUrl, name, followers, time }: PostHeaderProps) {
  return (
    <CardPostHeaderContent>
      <img
        src={`https://github.com/${gitHubAvatarUrl}.png`}
        alt={gitHubAvatarUrl}
      />
      <div>
        <CardPostHeaderTitle>{name}</CardPostHeaderTitle>
        <CardContentSpan>{followers} seguidores</CardContentSpan>
        <CardPostHeaderInfo>
          <CardContentSpan>{time} h</CardContentSpan>
          <Separator />
          <Globe />
        </CardPostHeaderInfo>
      </div>
    </CardPostHeaderContent>
  );
}
