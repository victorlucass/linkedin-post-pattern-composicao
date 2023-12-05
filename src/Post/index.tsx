import { Globe } from "../svg/Globe";
import { More } from "../svg/More";
import { Rectangle } from "../svg/Rectangle";
import { Separator } from "../svg/Separator";
import { Comment } from "../svg/actions/Comment";
import { LikeAction } from "../svg/actions/Like";
import { Send } from "../svg/actions/Send";
import { Share } from "../svg/actions/Share";
import { Celebrate } from "../svg/reactions/Celebrate";
import { Curious } from "../svg/reactions/Curious";
import { Insightfull } from "../svg/reactions/Insightfull";
import { Like } from "../svg/reactions/Like";
import { Love } from "../svg/reactions/Love";
import { Suport } from "../svg/reactions/Suport";
import {
  CardPost,
  CardPostHeaderContainer,
  CardPostHeaderContent,
  CardPostHeaderInfo,
  CardContentSpan,
  CardPostHeaderTitle,
  CardPostReactions,
  CardPostSeeTranslation,
  CardPostTextContent,
  PostContainer,
  SeeMore,
  CardPostActions,
} from "./styles";

interface PostProps {
  gitHubAvatarUrl: string;
  name: string;
  followers: number;
  time: string;
  text: string;
  quantityComments: number;
  quantityReactions: number;
  seeMore?: boolean;
}

export function Post({
  gitHubAvatarUrl,
  name,
  followers,
  time,
  text,
  quantityComments,
  quantityReactions,
  seeMore,
}: PostProps) {
  return (
    <PostContainer>
      <CardPost>
        {/* Header */}
        <CardPostHeaderContainer>
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
          <div>
            <More />
          </div>
        </CardPostHeaderContainer>

        {/* Text Content */}
        <CardPostTextContent>
          <p>{text}</p>
          {seeMore ? <SeeMore>...See more</SeeMore> : null}
        </CardPostTextContent>
        {/* See Translation */}
        <CardPostSeeTranslation>See translation</CardPostSeeTranslation>
        {/* Reactions */}
        <CardPostReactions>
          <Like />
          <Celebrate />
          <Suport />
          <Love />
          <Insightfull />
          <Curious />
          <CardContentSpan>{quantityReactions}</CardContentSpan>
          <Separator />
          <CardContentSpan>{quantityComments} comments</CardContentSpan>
        </CardPostReactions>

        {/* Rectangle */}
        <Rectangle />

        {/* Actions */}
        <CardPostActions>
          <span>
            <LikeAction />
            <p>Like</p>
          </span>

          <span>
            <Comment />
            <p>Comment</p>
          </span>

          <span>
            <Share />
            <p>Share</p>
          </span>

          <span>
            <Send />
            <p>Send</p>
          </span>
        </CardPostActions>
      </CardPost>
    </PostContainer>
  );
}
