import IconButton from "@mui/material/IconButton";
import * as React from "react";
import type { ButtonType } from "../../types/ButtonType.ts";
import { useCallback } from "react";
import type { ButtonValue } from "../../types/ButtonValue.ts";

const BUTTON_SIZE = 76;

interface ICalculatorButtonProps {
    type: ButtonType;
    value: ButtonValue;
    color: string;
    icon: React.ReactNode;
    onClick: (type: ButtonType, value: ButtonValue) => void;
}

export const CalculatorButton = ({ type, value, color, icon, onClick }: ICalculatorButtonProps) => {
    const onClickButton = useCallback(() => {
        onClick(type, value);
    }, [onClick, type, value])

    return (
        <IconButton
            onClick={onClickButton}
            sx={{
                backgroundColor: color,
                height: BUTTON_SIZE,
                width: BUTTON_SIZE,
                '&:focus': {
                    outline: 'none',
                    boxShadow: 'none', // Optional: if there's also a box-shadow
                },
                m: 0.5,
            }}
            size={"large"}
            disableFocusRipple={true}
        >
            {icon}
        </IconButton>
    )
}
