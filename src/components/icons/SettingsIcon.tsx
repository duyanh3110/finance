import { FunctionComponent } from "react";
import { Icon } from "./Icon";
import { SvgIconProps } from "@/models/app.model";

export const SettingsIcon: FunctionComponent<SvgIconProps> = ({
    fillColor = "fill-on",
    path = "M16.7503 7.68458C15.242 7.68458 14.6253 6.61792 15.3753 5.30958C15.8087 4.55125 15.5503 3.58458 14.792 3.15125L13.3503 2.32625C12.692 1.93458 11.842 2.16792 11.4503 2.82625L11.3587 2.98458C10.6087 4.29292 9.37533 4.29292 8.61699 2.98458L8.52533 2.82625C8.15033 2.16792 7.30033 1.93458 6.64199 2.32625L5.20033 3.15125C4.44199 3.58458 4.18366 4.55958 4.61699 5.31792C5.37533 6.61792 4.75866 7.68458 3.25033 7.68458C2.38366 7.68458 1.66699 8.39291 1.66699 9.26791V10.7346C1.66699 11.6012 2.37533 12.3179 3.25033 12.3179C4.75866 12.3179 5.37533 13.3846 4.61699 14.6929C4.18366 15.4512 4.44199 16.4179 5.20033 16.8512L6.64199 17.6762C7.30033 18.0679 8.15033 17.8346 8.54199 17.1762L8.63366 17.0179C9.38366 15.7096 10.617 15.7096 11.3753 17.0179L11.467 17.1762C11.8587 17.8346 12.7087 18.0679 13.367 17.6762L14.8087 16.8512C15.567 16.4179 15.8253 15.4429 15.392 14.6929C14.6337 13.3846 15.2503 12.3179 16.7587 12.3179C17.6253 12.3179 18.342 11.6096 18.342 10.7346V9.26791C18.3337 8.40125 17.6253 7.68458 16.7503 7.68458ZM10.0003 12.7096C8.50866 12.7096 7.29199 11.4929 7.29199 10.0012C7.29199 8.50958 8.50866 7.29292 10.0003 7.29292C11.492 7.29292 12.7087 8.50958 12.7087 10.0012C12.7087 11.4929 11.492 12.7096 10.0003 12.7096Z",
}) => {
    return <Icon fillColor={`${fillColor}`} path={`${path}`} />;
};
