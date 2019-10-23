import React from "react";
import styled from "styled-components";
import PosterSummary from "./posterSummary";
import PosterDescription from "./poster-description";

const Container = styled.div`
  width: 200px;
  margin-bottom: 25px;
`;
const Image = styled.img`
  width: 200px;
`;
type containerOpenProps = { expanded: boolean };
const ContainerOpen = styled.div<containerOpenProps>`
  overflow: scroll;
  transition: opacity 1s, height 1s;
  font-family: Comic Sans MS;
  height: ${props => (props.expanded ? "100px" : 0)};
  opacity: ${props => (props.expanded ? 1 : 0)};
`;
/* &.expanded {
    opacity: 1;
    height: 100px;
  } */

const ExpandMoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
  >
    <path d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z" />
  </svg>
);

const ExpandLessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
  >
    <path d="M9 6l-4.5 4.5 1.06 1.06L9 8.12l3.44 3.44 1.06-1.06z" />
  </svg>
);

type PosterProps = {
  image: string;
  reference: string;
  price: number;
  width: number;
  height: number;
  description: string;
};

const Poster = (
  {
    image,
    reference,
    price,
    width,
    height,
    description,
    ...optionalProps
  }: PosterProps,
  otherProps: any
) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Container optionalProps={optionalProps}>
      <Image src={image} />
      <div onClick={() => setExpanded(!expanded)}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        <PosterSummary expanded={expanded} reference={reference} />
        <ContainerOpen
          expanded={expanded}
          className={expanded ? "expanded" : "pas-expanded"}
        >
          <PosterDescription
            width={width}
            height={height}
            description={description}
            price={price}
          />
        </ContainerOpen>
      </div>
    </Container>
  );
};
Poster.defaultProps = {
  image: "",
  reference: "",
  price: 0,
  width: 0,
  height: 0,
  description: ""
};

export default Poster;
