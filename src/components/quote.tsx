import styled from "../theme";

const Quote = styled.h1`
  color: ${props => props.theme.primaryColor};
  font: 400 36px/1.4 "cardo";
  font-style: italic;
  font-weight: normal;
  text-align: left;
  text-indent: -10px;

  max-width: 800px;
  width: 80%;
  margin: 0 auto;
`;

export default Quote;
