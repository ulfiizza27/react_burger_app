export default function Button({ children, variant = "primary",onClick, disabled}) {
  
    const variants = {
      primary: "bg-green-600 border-green-600 text-white",
      secondary: "bg-transparent text-green-600 border-green-600 border",
    };
  
    const disabledStyle = `bg-gray-400 text-opacity-70`
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`py-2 px-6 w-full rounded-md font-bold text-sm block hover:opacity-90 active:scale-[0.98] ${variants[variant]} ${disabled && disabledStyle}`}
      >
        {children}
      </button>
    );
  }