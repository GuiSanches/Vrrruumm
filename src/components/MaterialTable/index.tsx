import { FC } from "react";
import MUIDataTable from "mui-datatables";
import { Container } from "./styles";


const Table: FC = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    return (
        <Container>
            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
            />
        </Container>
    )
}

export default Table;