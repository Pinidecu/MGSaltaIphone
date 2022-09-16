import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  color: var(--font-primary);
  text-align: justify;
`;

export const EditContainer = styled.div`
  display: flex;
  width: 100%;
  color: var(--font-primary);
  text-align: justify;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 5px;
  p {
    width: 100%;
  }
  textarea {
    padding: 10px;
    height: 10em;
    width: 100%;
    color: var(--font-secondary);
    border-radius: 10px;
    overflow-y: auto;
  }
`;
