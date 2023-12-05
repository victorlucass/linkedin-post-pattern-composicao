import { Post } from "./Post";
import { PostHeaderContent } from "./Post/PostHeaderContent";
import { GlobalStyles } from "./styles/global";
import { Comment } from "./svg/actions/Comment";
import { LikeAction } from "./svg/actions/Like";
import { Send } from "./svg/actions/Send";
import { Share } from "./svg/actions/Share";

export function App() {
  return (
    <>
      {/* Conteúdo 1 */}
      <Post.Root>
        <Post.Header>
          <PostHeaderContent
            gitHubAvatarUrl="victorlucass"
            name="Victor Lucas"
            followers={100}
            time="1"
          />
        </Post.Header>
        <Post.Content text="Em HTML, geralmente você usaria a tag <label> para rotular elementos de formulário associados, como inputs. No entanto, se você está usando um <span> e deseja associar um rótulo a ele, você pode usar a propriedade aria-label para fornecer uma descrição acessível do conteúdo do <span>. O atributo aria-label é utilizado para fornecer uma etiqueta acessível para um elemento quando não é possível utilizar uma tag <label>." />
        <Post.Translation text="Visualizar tradução" />
        <Post.Reactions quantityComments={100} quantityReactions={50} />
        <Post.Rectangle />
        <Post.Actions>
          <Post.Action icon={LikeAction} label="Like" />
          <Post.Action icon={Comment} label="Comment" />
          <Post.Action icon={Share} label="Share" />
          <Post.Action icon={Send} label="Send" />
        </Post.Actions>
      </Post.Root>

      {/* Conteúdo 2 */}
      <Post.Root>
        <Post.Header>
          <PostHeaderContent
            gitHubAvatarUrl="victorlucass"
            name="Victor Lucas"
            followers={100}
            time="10"
          />
        </Post.Header>
        <Post.Content text="Em React, ElementType não é um conceito nativo da biblioteca. Pode ser que você esteja se referindo a React.ElementType, que é um tipo genérico usado para representar um elemento React em TypeScript." />
        <Post.Translation text="See Translation" />
        <Post.Reactions quantityComments={50} quantityReactions={100} />
        <Post.Rectangle />
        <Post.Actions>
          <Post.Action icon={LikeAction} label="Like" />
          <Post.Action icon={Send} label="Send" />
        </Post.Actions>
      </Post.Root>

      <GlobalStyles />
    </>
  );
}
