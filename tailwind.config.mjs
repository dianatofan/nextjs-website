/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			tertiary: '#E8B059',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			white: '#fff',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			teal: '#009dae',
  			lightTeal: '#F2F8FB',
  			purple: '#6658aa',
  			lightPurple: '#EFEEFE',
  			green: '#509b3c',
  			lightGreen: '#E8F5E2',
  			grayRace: '#F0F0F0',
  			figmaGray: '#f6f6f6',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			disappear: {
  				'0%': {
  					opacity: 1
  				},
  				'100%': {
  					opacity: 0
  				}
  			}
  		},
  		maxWidth: {
  			'75ch': '75ch'
  		},
  		animation: {
  			fadeIn: 'fadeIn 1s ease-in-out',
  			fadeIn2s: 'fadeIn 2s ease-in-out',
  			fadeInWithDelay: 'fadeIn 1s ease-in-out 1s',
  			disappear: 'disappear 2s forwards'
  		},
  		lineHeight: {
  			'12': '3rem',
  			'extra-tight': '1.1',
  			tight: '1.25',
  			normal: '1.5',
  			relaxed: '1.75',
  			loose: '2',
  			'extra-loose': '2.5'
  		},
  		inset: {
  			'-24': '-24px',
  			'-60': '-60px'
  		},
  		borderRadius: {
  			'32px': '32px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
