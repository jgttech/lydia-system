import { createUseStyles } from "react-jss";

export default createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputTitle: {
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
        color: "rgb(170, 170, 170)",
        fontWeight: "bold",
        fontStyle: "italic"
    },
    entityTable: {
        width: "100%",
        marginTop: "0.5rem",
        maxHeight: "500px",
        overflow: "auto"
    },
    tableTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        fontStyle: "italic",
        color: "rgb(170, 170, 170)"
    },
    entityInput: {
        width: "100%",
        marginTop: "1.5rem"
    },
    entityInputTitle: {
        fontWeight: "bold",
        color: "rgb(170, 170, 170)"
    },
    entityInputControls: {
        width: "100%",
        marginTop: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
    }
});