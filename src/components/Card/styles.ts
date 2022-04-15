import styled from "styled-components";
import { Typography, CardContent } from "../materialUi";

export const LabelStyle = styled(Typography)`
  font-weight: 500;
  font-size: 1.25rem;
`;

export const ValueStyle = styled(Typography)`
  font-weight: 400;
  font-size: 2rem;
`;

export const CardContentStyled = styled(CardContent)`
border-left: 8px solid ${props => props.color};

`;
