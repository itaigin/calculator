import Box from "@mui/material/Box";
import * as React from "react";
import { useCallback, useRef, useState } from "react";
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay.tsx";
import { CalculatorKeyboard } from "../CalculatorKeyboard/CalculatorKeyboard.tsx";
import { ButtonType } from "../../types/ButtonType.ts";
import { type ButtonValue } from "../../types/ButtonValue.ts";
import { OperationType } from "../../types/OperationType.ts";
import ListIcon from '@mui/icons-material/List';
import IconButton from "@mui/material/IconButton";

const EMPTY_STRING = "";
const EMPTY_VALUE = "0";

export const Calculator: React.FunctionComponent = () => {
    const [oldScreenValue, setOldScreenValue] = useState<string>(EMPTY_STRING);
    const [screenValue, setScreenValue] = useState<string>(EMPTY_VALUE);
    const [isFullClear, setIsFullClear] = useState<boolean>(true);
    const isLastSymbolOperation = useRef(false);

    const onClickNumberType = useCallback((value: ButtonValue) => {
        isLastSymbolOperation.current = false;
        setIsFullClear(false);
        setScreenValue((prevState) => prevState === EMPTY_VALUE ? value : prevState + value);
    }, []);

    const onClickOperationType = useCallback((value: ButtonValue) => {
        if (value === OperationType.Equal) {
            setIsFullClear(true);
            setOldScreenValue(screenValue);
            setScreenValue(eval(screenValue)?.toString());
            return;
        }
        setOldScreenValue(EMPTY_STRING);
        if (value === OperationType.FullClear) {
            setIsFullClear(true);
            setScreenValue(EMPTY_VALUE);
            return;
        }
        if (value === OperationType.Clear) {
            setScreenValue((prevState) => prevState.length === 1 ? EMPTY_VALUE : prevState.slice(0, -1));
            return;
        }
        if (value === OperationType.Minus) {
            onClickNumberType(value);
            isLastSymbolOperation.current = true;
            return;
        }
        setIsFullClear(false);
        const currentValue = isLastSymbolOperation.current ? value : screenValue + value;
        setScreenValue(currentValue);
        isLastSymbolOperation.current = true;
    }, [screenValue, onClickNumberType]);

    const onClickButton = React.useCallback((type: ButtonType, value: ButtonValue) => {
        return type === ButtonType.Number ? onClickNumberType(value) : onClickOperationType(value);
    }, [onClickNumberType, onClickOperationType]);

    return (
        <Box display="flex" flexDirection="column">
            <Box display={"flex"} justifyContent={"flex-start"} p={2}>
                <IconButton disableFocusRipple>
                    <ListIcon />
                </IconButton>
            </Box>
            <Box>
                <CalculatorDisplay oldValue={oldScreenValue} value={screenValue} />
            </Box>
            <Box sx={{ p: (theme) => theme.spacing(0, 2, 2)}}>
                <CalculatorKeyboard
                    onClick={onClickButton}
                    isFullClear={isFullClear}
                />
            </Box>
        </Box>
    )
}
