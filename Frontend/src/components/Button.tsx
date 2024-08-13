import Spinner from "./icons/Spinner";
function cn(...classNames: any) {
    return classNames.filter(Boolean).join(" ");
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    outlined?: boolean;
    className?: string;
    loading?: boolean;
    failure?: boolean;
    success?: boolean;
    selected?: boolean;
    small?: boolean;
};

export default function Button({
    loading,
    children,
    outlined,
    className,
    failure,
    success,
    selected,
    small,
    ...props
}: Props) {
    return (
        <button
            className={cn(
                "flex w-full select-none items-center justify-center rounded-sm font-medium",
                className,
                outlined || small
                    ? "border py-2 px-4 text-sm leading-4"
                    : "py-4 px-8 text-base leading-5",
                outlined
                    ? success
                        ? `border-new-success ${selected
                            ? "bg-new-success text-new-solid-white"
                            : "bg-new-solid-white text-new-success"
                        } hover:bg-new-success hover:text-new-solid-white`
                        : failure
                            ? `border-new-failure ${selected
                                ? "bg-new-failure text-new-solid-white"
                                : "bg-new-solid-white text-new-failure"
                            } hover:bg-new-failure hover:text-new-solid-white`
                            : props.disabled
                                ? `border-new-neutral-light ${selected
                                    ? "bg-new-neutral-light text-new-solid-white"
                                    : "bg-new-solid-white text-new-neutral-light"
                                }`
                                : `border-new-accent ${selected
                                    ? "bg-new-accent text-new-solid-white"
                                    : "bg-new-solid-white text-new-accent"
                                } hover:bg-new-accent hover:text-new-solid-white`
                    : failure
                        ? "bg-new-failure text-new-solid-white hover:bg-new-solid-red-dark"
                        : success
                            ? "bg-new-success text-new-solid-white hover:bg-new-solid-green-dark"
                            : props.disabled
                                ? "bg-new-neutral-light text-new-solid-white"
                                : "bg-new-gradient text-new-solid-white hover:bg-new-accent hover:bg-none",
                props.disabled && "pointer-events-none cursor-not-allowed"
            )}
            {...props}
        >
            {loading ? (
                <Spinner {...(small ? { xs: true } : { small: true })} />
            ) : (
                children
            )}
        </button>
    );
}
