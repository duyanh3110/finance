import { FunctionComponent } from "react";
import { SvgIconProps } from "@/models/app.model";

export const Icon: FunctionComponent<SvgIconProps> = ({
    fillColor = "fill-on",
    path = "",
}) => {
    return (
        <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${fillColor}`}
        >
            <path d={`${path}`} fill={`${fillColor}`} />
        </svg>
    );
};
