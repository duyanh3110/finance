import { FunctionComponent } from "react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export interface ToggleThemeComponentProps {
    darkMode: boolean;
    toggleDarkMode(): void;
}

export const ToggleTheme: FunctionComponent<ToggleThemeComponentProps> = (
    props,
) => {
    const themeIcon = props.darkMode ? (
        <SunIcon fillColor="fill-off" handleClick={props.toggleDarkMode} />
    ) : (
        <MoonIcon fillColor="fill-on" handleClick={props.toggleDarkMode} />
    );

    return themeIcon;
};
