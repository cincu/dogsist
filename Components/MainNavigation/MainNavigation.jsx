import Link from "next/link";
import styled from "styled-components";

const StyledNavigation = styled.div`
  display: flex;
  gap: 5rem;
`;

export default function MainNavigation() {
  return (
    <StyledNavigation>
      <Link href="./">home</Link>
      <Link href="./story">story</Link>
      <Link href="./yours">your story</Link>
      <Link href="./campaign">campaign</Link>
      <Link href="./stop">shop</Link>
    </StyledNavigation>
  );
}
