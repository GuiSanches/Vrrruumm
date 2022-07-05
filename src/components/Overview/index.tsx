import { FC } from "react";
import { Container, Item } from "./styles";

interface Info {
  label: string;
  content: any;
}
interface Props {
  overview: Info[] | undefined;
}

const Overview: FC<Props> = ({ overview }) => {
  return (
    <Container>
      {overview &&
        overview.map((item) => (
          <Item key={item.label}>
            {item.label}: <span>{item.content}</span>
          </Item>
        ))}
    </Container>
  );
};

export default Overview;
