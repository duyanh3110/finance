import { FunctionComponent } from "react";
import { Icon } from "./Icon";
import { SvgIconProps } from "@/models/app.model";

export const InvoicesIcon: FunctionComponent<SvgIconProps> = ({
    fillColor = "fill-on",
    path="M13.15 1.66669H6.85001C3.70001 1.66669 2.91667 2.50835 2.91667 5.86669V15.25C2.91667 17.4667 4.13334 17.9917 5.60834 16.4084L5.61667 16.4C6.30001 15.675 7.34167 15.7334 7.93334 16.525L8.77501 17.65C9.45001 18.5417 10.5417 18.5417 11.2167 17.65L12.0583 16.525C12.6583 15.725 13.7 15.6667 14.3833 16.4C15.8667 17.9834 17.075 17.4584 17.075 15.2417V5.86669C17.0833 2.50835 16.3 1.66669 13.15 1.66669ZM12.2917 8.95835H7.70834C7.36667 8.95835 7.08334 8.67502 7.08334 8.33335C7.08334 7.99169 7.36667 7.70835 7.70834 7.70835H12.2917C12.6333 7.70835 12.9167 7.99169 12.9167 8.33335C12.9167 8.67502 12.6333 8.95835 12.2917 8.95835Z"
}) => {
    return (
        <Icon
            fillColor={`${fillColor}`}
            path={`${path}`}
        />
    );
};