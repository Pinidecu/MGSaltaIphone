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
    color: var(--font-secondary);
  }
`;

export const IDContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7em 1em 1em 1em;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 2em;
  color: var(--font-primary);
  text-align: justify;
  row-gap: 20px;
`;

export const FeaturesButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;
