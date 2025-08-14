import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ICalculatorDisplayProps {
    value: string;
    oldValue: string;
}

export const CalculatorDisplay = ({ value, oldValue }: ICalculatorDisplayProps) => {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            flexDirection={"column"}
            p={4}
        >
            <Typography
                variant="h6"
                component="div"
                color={"textSecondary"}
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
            >
                {oldValue}
            </Typography>
            <Typography
                variant="h4"
                component="div"
                color={"textPrimary"}
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
            >
                {value}
            </Typography>
        </Box>
    )
}
