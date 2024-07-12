'use client';

function Button({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 mt-2 px-7 py-2 border font-montserrat text-lg leading-none rounded-full ${fullWidth ? 'w-full' : ''}`}
      style={{ backgroundColor, color: textColor, borderColor }}
    >
      {label}
      {iconURL && <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
}

export default Button;
