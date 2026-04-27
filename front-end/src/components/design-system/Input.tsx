import React, { type InputHTMLAttributes } from 'react';
 
// PROPS
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id?: string;
    error?: string;
}

// Composant servant à créer des champs de saisie.
export function Input({ label, id, error, className = '', ...props }: InputProps) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label 
                htmlFor={inputId} 
                className="font-label text-xs uppercase tracking-wider text-zinc-400"
            >
                {label}
            </label>
            <input
                id={inputId}
                className={`bg-[#202225] text-zinc-100 focus:ring-1 focus:ring-orange-500 rounded px-4 py-3 font-body outline-none transition-all w-full placeholder:text-zinc-500 ${error ? 'border border-red-500 focus:ring-red-500' : 'border-none'}`}
                {...props}
            />
            {error && <span className="text-red-500 text-xs font-body mt-1">{error}</span>}
        </div>
    );
}

export default Input;