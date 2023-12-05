import { Rectangle } from "../svg/Rectangle";
import { PostAction } from "./PostAction";
import { PostActions } from "./PostActions";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";
import { PostHeaderContent } from "./PostHeaderContent";
import { PostReactions } from "./PostReactions";
import { PostRoot } from "./PostRoot";
import { PostTranslation } from "./PostTranslation";

export const Post = {
  Root: PostRoot,
  Header: PostHeader,
  HeaderContent: PostHeaderContent,
  Content: PostContent,
  Actions: PostActions,
  Action: PostAction,
  Reactions: PostReactions,
  Translation: PostTranslation,
  Rectangle: Rectangle
}