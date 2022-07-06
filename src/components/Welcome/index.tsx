import { Link } from "@mui/material";
import { FC } from "react";
import { Container } from "./styles";

interface Props {
  name: string;
  type: string;
  logout: () => void;
}

const Welcome: FC<Props> = ({ name, type, logout }) => {
  return (
    <Container>
      <div>
        Seja bem vinde: {name} - ({type})
      </div>
      <Link
        sx={{ cursor: "pointer", color: "red", textDecorationColor: "inherit" }}
        onClick={logout}
      >
        Sair
      </Link>
    </Container>
  );
};

export default Welcome;
