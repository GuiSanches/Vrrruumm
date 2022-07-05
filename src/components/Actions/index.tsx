import { FC } from "react";
import { Container, Item } from "./styles";

type props = {
  onChange: (r: number) => void;
};

const Actions: FC<props> = ({ onChange }) => {
  const actions = ["Relatório 1", "Relatório 2"];

  return (
    <Container>
      {actions.map((a, i) => (
        <Item key={a} onClick={() => onChange(i + 1)}>
          {a}
        </Item>
      ))}
    </Container>
  );
};

export default Actions;
