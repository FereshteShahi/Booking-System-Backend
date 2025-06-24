interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  text,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <div
      className={`
        inline-block 
        rounded-[52px]
        bg-[var(--color-button-bg)]
        p-[2px] 
        w-[170px]
        h-[60px]
        shadow-lg
        lg:w-[220px] lg:h-[70px]
        lg:shadow-xl
      `}
    >
      <button
        type={type}
        onClick={onClick}
        className={`  
          px-4 py-2 
          rounded-[52px] 
          border-2 
          w-[150px]
          h-[50px]
          mt-[5px]
          border-[var(--color-btn-border)] 
          text-[var(--color-btn-text)]
          font-semibold 
          bg-transparent
          hover:drop-shadow-lg 
          transition 
          lg:px-6 lg:py-3 lg:w-[200px] lg:h-[60px]
          lg:text-lg
          lg:font-bold
          ${className}
        `}
      >
        {text}
      </button>
    </div>
  );
}
