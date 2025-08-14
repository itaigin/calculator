import Box from "@mui/material/Box";
import * as React from "react";
import { CalculatorButton } from "../CalculatorButton/CalculatorButton.tsx";
import { ButtonType } from "../../types/ButtonType.ts";
import { OperationType } from "../../types/OperationType.ts";
import AbcIcon from '@mui/icons-material/Abc';
import ExposureIcon from '@mui/icons-material/Exposure';
import PercentIcon from '@mui/icons-material/Percent';
import type { ButtonValue } from "../../types/ButtonValue.ts";
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CalculateIcon from '@mui/icons-material/Calculate';
import BackspaceIcon from '@mui/icons-material/Backspace';

import { NumberType } from "../../types/NumberType.ts";
import { useTheme } from "@mui/material";

interface ICalculatorKeyboardProps {
    onClick: (type: ButtonType, value: ButtonValue) => void;
    isFullClear?: boolean;
}

export const CalculatorKeyboard = ({ onClick, isFullClear }: ICalculatorKeyboardProps) => {
    const theme = useTheme();
    return (
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Row>
                {isFullClear
                    ? <CalculatorButton
                        type={ButtonType.Operation}
                        value={OperationType.FullClear}
                        icon={<AbcIcon />}
                        onClick={onClick}
                        color={theme.palette.grey["400"]}
                    />
                    : <CalculatorButton
                        type={ButtonType.Operation}
                        value={OperationType.Clear}
                        icon={<BackspaceIcon />}
                        onClick={onClick}
                        color={theme.palette.grey["400"]}
                    />
                }
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Denial} icon={<ExposureIcon />} onClick={onClick} color={theme.palette.grey["400"]}/>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Percent} icon={<PercentIcon />} onClick={onClick} color={theme.palette.grey["400"]}/>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Division} icon={<Box>/</Box>} onClick={onClick} color={theme.palette.warning.dark}/>
            </Row>
            <Row>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Seven} icon={<Box>7</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Eight} icon={<Box>8</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Nine} icon={<Box>9</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Multiply} icon={<ClearIcon />} onClick={onClick} color={theme.palette.warning.dark}/>
            </Row>
            <Row>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Four} icon={<Box>4</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Five} icon={<Box>5</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Six} icon={<Box>6</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Minus} icon={<RemoveIcon />} onClick={onClick} color={theme.palette.warning.dark}/>
            </Row>
            <Row>
                <CalculatorButton type={ButtonType.Number} value={NumberType.One} icon={<Box>1</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Two} icon={<Box>2</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Three} icon={<Box>3</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Plus} icon={<AddIcon />} onClick={onClick} color={theme.palette.warning.dark}/>
            </Row>
            <Row>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Clear} icon={<CalculateIcon />} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Number} value={NumberType.Zero} icon={<Box>0</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Operation} value={NumberType.Dot} icon={<Box>.</Box>} onClick={onClick} color={theme.palette.grey["800"]}/>
                <CalculatorButton type={ButtonType.Operation} value={OperationType.Equal} icon={<Box>=</Box>} onClick={onClick} color={theme.palette.warning.dark}/>
            </Row>
        </Box>
    )
}

const Row: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Box display={"flex"} flexDirection={"row"}>
            {children}
        </Box>
    )
}
