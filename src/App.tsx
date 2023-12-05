import { Post } from "./Post";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <main>
        <Post
          gitHubAvatarUrl="victorlucass"
          followers={100}
          name="Victor Lucas"
          time="2"
          text="Fala galeraa 👋"
          quantityComments={10}
          quantityReactions={2}
        />

        <Post
          gitHubAvatarUrl="victorlucass"
          followers={100}
          name="Victor Lucas"
          time="19"
          text="Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum morbi at sem facilisi orci magna in sagittis, tortor ac maecenas eget etiam ullamcorper magna eu risus ipsum nec nibh lacus, suspendisse"
          quantityComments={50}
          quantityReactions={21}
          seeMore
        />
      </main>
      <GlobalStyles />
    </>
  );
}
