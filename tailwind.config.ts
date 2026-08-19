import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-plex-sans)', 'Helvetica', 'Arial', 'sans-serif'],
  			mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace']
  		},
  		colors: {
  			ink: {
  				DEFAULT: 'oklch(18% 0.01 240 / <alpha-value>)',
  				raised: 'oklch(30% 0.01 240 / <alpha-value>)',
  				strong: 'oklch(28% 0.012 240 / <alpha-value>)',
  				soft: 'oklch(35% 0.012 240 / <alpha-value>)',
  				muted: 'oklch(40% 0.012 240 / <alpha-value>)',
  				subtle: 'oklch(45% 0.012 240 / <alpha-value>)',
  				faint: 'oklch(50% 0.012 240 / <alpha-value>)'
  			},
  			surface: {
  				DEFAULT: 'oklch(98% 0.004 240 / <alpha-value>)',
  				raised: 'oklch(99.5% 0.002 240 / <alpha-value>)',
  				muted: 'oklch(94% 0.008 240 / <alpha-value>)'
  			},
  			line: {
  				DEFAULT: 'oklch(89% 0.008 240 / <alpha-value>)',
  				strong: 'oklch(85% 0.01 240 / <alpha-value>)',
  				hover: 'oklch(70% 0.02 240 / <alpha-value>)',
  				focus: 'oklch(60% 0.01 240 / <alpha-value>)'
  			},
  			brand: {
  				DEFAULT: 'oklch(55% 0.16 235 / <alpha-value>)',
  				strong: 'oklch(45% 0.16 235 / <alpha-value>)',
  				deep: 'oklch(35% 0.1 235 / <alpha-value>)',
  				tint: 'oklch(94% 0.03 235 / <alpha-value>)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [
    tailwindcssAnimate,
		require("@tailwindcss/typography")
  ],
} satisfies Config;
