import { FC } from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "./styles";

type props = {
  columns: any;
  data: Array<String>;
  title: string;
};

const Table: FC<props> = ({ title, columns, data }) => {
  return (
    <Container>
      <MUIDataTable title={title} data={data} columns={columns} />
    </Container>
  );
};

export default Table;
