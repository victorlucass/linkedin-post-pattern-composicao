import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const CardPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 34rem;
  padding: 1rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 1px rgba(112, 112, 112, 0.2);
`;

export const CardPostHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  img {
    width: 3.25rem;
    border-radius: 50%;
  }
`;

export const CardPostHeaderContent = styled.div`
  display: flex;
  gap: 8px;
`;

export const CardPostHeaderTitle = styled.h1`
  color: #191919;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const CardContentSpan = styled.span`
  color: #707070;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;

export const SeeMore = styled(CardContentSpan)`
  display: flex;
  justify-content: flex-end;
`;

export const CardPostHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CardPostTextContent = styled.div`
  color: #191919;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const CardPostSeeTranslation = styled.div`
  color: #0966c2;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const CardPostReactions = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const CardPostActions = styled(CardPostReactions)`
  gap: 20px;
  span {
    display: flex;
    align-items: center;
    gap: 2px;
    p {
      color: #707070;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 200% */
    }
  }
`;
