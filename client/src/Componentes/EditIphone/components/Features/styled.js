import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  p {
    text-align: justify;
    color: var(--font-primary);
  }

  textarea {
    padding: 10px;
    width: 40em;
    height: 10em;
    margin-top: 10px;
    border-radius: 10px;
  }
`;