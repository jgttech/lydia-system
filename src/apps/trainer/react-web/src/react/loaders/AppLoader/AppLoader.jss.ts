import { createUseStyles } from "react-jss";

export default createUseStyles({
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
    },
    loadingIcon: {
        fontSize: "6rem",
    },
    loadingMsg: {
        fontWeight: "bold",
        fontSize: "1.2rem",
        fontStyle: "italic",
        marginTop: "1rem"
    }
});