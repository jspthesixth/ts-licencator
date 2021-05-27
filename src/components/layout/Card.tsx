import { CardContainer, StyledLink } from '../styles';

type CardProps = {
  text: string;
};

export const Card = ({ text }: CardProps) => {
  return (
    <StyledLink to={`/key/${text}`}>
      <CardContainer>{text}</CardContainer>
    </StyledLink>
  );
};
