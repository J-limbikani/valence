import React from 'react'
import Link from 'next/link'  // Import Link component from Next.js

// Define the types for the component props
interface ButtonProps {
  styles?: string;  // The `styles` prop is optional and should be a string
}

const Button: React.FC<ButtonProps> = ({ styles = '' }) => {
  return (
    <Link href="/contact">  {/* Wrap the button with Link */}
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Get Started
      </button>
    </Link>
  )
}

export default Button
