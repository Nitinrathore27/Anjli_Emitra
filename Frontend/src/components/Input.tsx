import React, { forwardRef } from "react";
import NoEye from "./icons/NoEye";
import EyeIcon from "./icons/EyeIcon";
import SearchIcon from "./icons/SearchIcon";


type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    label?: string;
    search?: boolean;
    type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "checkbox"
    | "radio"
    | "date"
    | "datetime-local"
    | "file";
    containerClass?: string;
};
function cn(...classNames: any) {
    return classNames.filter(Boolean).join(" ");
}

const Input = forwardRef<any, TProps>(
    (
        {
            label,
            search,
            type = "text",
            className,
            containerClass,
            ...props
        }: TProps,
        ref
    ) => {
        const [visible, setVisible] = React.useState(false);

        return (
            <div className={cn("flex flex-col gap-2", containerClass)}>
                {label && (
                    <label
                        htmlFor={props.id}
                        className={cn(
                            "w-fit text-lg font-semibold leading-[22px] text-new-neutral-dark",
                            props.required && "after-star"
                        )}
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        onWheel={(e: React.WheelEvent<HTMLInputElement>) =>
                            (e.target as HTMLInputElement)?.blur()
                        }
                        className={cn(
                            "w-full rounded-sm border border-new-neutral bg-new-solid-white px-4 py-2 text-sm leading-[17px] text-new-neutral outline-none placeholder:text-new-neutral-light focus:border-new-accent focus:ring-1 focus:ring-new-accent",
                            className,
                            (type === "password" || search) && "pr-10"
                        )}
                        ref={ref}
                        type={visible ? "text" : type}
                        {...props}
                    />
                    {type === "password" && (
                        <div
                            className="absolute top-1/2 right-0 flex w-10 -translate-y-1/2 cursor-pointer justify-center p-2 text-new-neutral"
                            onClick={() => setVisible(!visible)}
                        >
                            {visible ? (

                                <NoEye className="h-4 w-4" />
                            ) : (
                                <EyeIcon className="h-4 w-4" />
                            )}
                        </div>
                    )}
                    {search && (
                        <label
                            className="absolute top-1/2 right-0 flex w-10 -translate-y-1/2 cursor-pointer justify-center p-2 text-new-neutral"
                            htmlFor={props.id}
                        >
                            <SearchIcon className="h-4 w-4" />
                        </label>
                    )}
                </div>
            </div>
        );
    }
);

export default Input;
