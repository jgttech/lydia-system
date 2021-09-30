import { createUseStyles } from "react-jss";

export default createUseStyles({
    entity: ([ entities, label ]) => {
        const {
            backgroundColor,
            accentColor
        } = entities.find(e => e.label === label) || {
            backgroundColor: "240,240,240",
            accentColor: "147,147,147"
        };

        return {
            cursor: "default",
            backgroundColor: `rgb(${backgroundColor})`,
            borderRadius: "4px",
            padding: "2px 8px",
            borderStyle: "solid",
            borderColor: `rgb(${accentColor})`,
            borderWidth: "1px 1px 1px 4px",
            fontWeight: "bold",
            color: `rgb(${accentColor})`,
        };
    },
    labelSelect: {
        width: "100%",
    },
    labelContainer: {
        marginBottom: "0.7rem"
    },
    popoverTitle: {
        fontStyle: "italic",
        color: "rgb(120, 120, 120)",
        fontWeight: "bold"
    }
});