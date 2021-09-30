import { createUseStyles } from "react-jss";

export default createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    trainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0.5rem"
    },
    logo: {
        width: "7rem"
    },
    aiImg: {
        width: "2.4rem",
        marginRight: "0.5rem"
    },
    aiTitle: {
        fontSize: "1.4rem",
    }
});