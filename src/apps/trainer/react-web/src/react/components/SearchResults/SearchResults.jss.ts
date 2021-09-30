import { createUseStyles } from "react-jss";

export default createUseStyles({
    container: {
        marginTop: "0.5rem"
    },
    content: {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "1.1rem",
        color: "rgb(180, 180, 180)",
        cursor: "default",
    },
    icon: {
        textAlign: "center",
        fontSize: "2rem",
        color: "rgb(180, 180, 180)",
    },
    description: {
        fontSize: "0.7rem",
        color: "rgb(150, 150, 150)",
        cursor: "default"
    },
    title: {
        fontWeight: "bold",
        cursor: "default",
        overflow: "auto"
    },
    inputContainer: {
        margin: "4px 0px",
        padding: "10px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "4px"
    },
    badge: {
        width: "95%"
    }
});