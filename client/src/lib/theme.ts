export const theme = {
    colors: {
        primary: {
            DEFAULT: '#2563eb', // blue-600
            light: '#3b82f6', // blue-500
            dark: '#1d4ed8', // blue-700
        },
        secondary: {
            DEFAULT: '#0f172a', // slate-900
            light: '#1e293b', // slate-800
            dark: '#020617', // slate-950
        },
        accent: {
            DEFAULT: '#f59e0b', // amber-500
            light: '#fbbf24', // amber-400
            dark: '#d97706', // amber-600
        },
        success: '#22c55e', // green-500
        warning: '#f59e0b', // amber-500
        error: '#ef4444', // red-500
        background: {
            light: '#ffffff',
            DEFAULT: '#f8fafc', // slate-50
            dark: '#0f172a', // slate-900
        },
        text: {
            primary: '#0f172a', // slate-900
            secondary: '#475569', // slate-600
            light: '#f8fafc', // slate-50
        }
    },
    gradients: {
        primary: 'from-blue-600 to-blue-800',
        secondary: 'from-slate-900 to-slate-800',
        accent: 'from-amber-500 to-amber-600',
    },
    shadows: {
        sm: 'shadow-sm',
        DEFAULT: 'shadow',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
    },
    transitions: {
        DEFAULT: 'transition-all duration-300',
        fast: 'transition-all duration-150',
        slow: 'transition-all duration-500',
    }
} as const;

export type Theme = typeof theme; 