import classNames from "classnames"
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import classes from "./button.module.scss"

type buttonType = "outline" | "filled"
type Props = {
  isLoading?: boolean
  loadingClassName?: string
  btnType?: buttonType
}

const buttonTypeMap: { [key in buttonType]: string } = {
  outline: "bg-white border-green-700 border-[1.5px] text-green-700",
  filled: "bg-secondary-100 text-white",
}

const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & Props>
> = ({ children, ...props }) => {
  const {
    className,
    btnType = "filled",
    disabled,
    isLoading,
    loadingClassName,
    ...buttonProps
  } = props
  return (
    <button
      {...buttonProps}
      disabled={disabled || isLoading}
      className={classNames(
        buttonTypeMap[btnType],
        className,
        classes.btn,
        disabled || isLoading ? classes.btn__inactive : ""
      )}
    >
      {isLoading ? (
        <svg
          className={classNames(
            "animate-spin -ml-1 mr-1 h-5 w-5 text-white ",
            loadingClassName
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
