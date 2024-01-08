import styled from "styled-components";
const StyledFooter = styled.div`
  font-size: 0.75rem;
  position: fixed;
  bottom: 10px;
`;
export default function Footer({ currentYear }) {
  return <StyledFooter>an open source project, {currentYear}</StyledFooter>;
}
