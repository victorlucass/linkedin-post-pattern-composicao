import { CardPost, PostContainer } from "./styles";

export function PostRoot({ children }: { children: React.ReactNode }) {
  return (
    <PostContainer>
      <CardPost>
       {children}
      </CardPost>
    </PostContainer>
  );
}
