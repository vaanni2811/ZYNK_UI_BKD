/**
 * InternFlow UI - Centralized Configuration
 * 
 * This file controls ALL theming, styling, and configuration.
 * Change this file to modify the entire application's look and feel.
 */

const AppConfig = {
    // ============ API Configuration ============
    API_BASE_URL: 'http://localhost:1234/api',
    
    // ============ Theme Colors ============
    colors: {
        // Primary: Royal Blue
        primary: {
            50: '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            400: '#818CF8',
            500: '#6366F1',  // Main Royal Blue
            600: '#4F46E5',
            700: '#4338CA',
            800: '#3730A3',
            900: '#312E81',
        },
        
        // Secondary: Pale Orange
        secondary: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',  // Main Orange
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
        },
        
        // Neutral/Light theme
        neutral: {
            50: '#FAFAFA',   // Lightest
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
        },
        
        // Status colors
        status: {
            success: '#10B981',
            warning: '#F59E0B',
            error: '#EF4444',
            info: '#3B82F6',
        },
        
        // Background colors
        background: {
            main: '#FFFFFF',
            alt: '#F9FAFB',
            card: '#FFFFFF',
        }
    },
    
    // ============ Typography ============
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontSize: {
            xs: '0.75rem',      // 12px
            sm: '0.875rem',     // 14px
            base: '1rem',       // 16px
            lg: '1.125rem',     // 18px
            xl: '1.25rem',      // 20px
            '2xl': '1.5rem',    // 24px
            '3xl': '1.875rem',  // 30px
            '4xl': '2.25rem',   // 36px
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        }
    },
    
    // ============ Spacing ============
    spacing: {
        xs: '0.25rem',   // 4px
        sm: '0.5rem',    // 8px
        md: '1rem',      // 16px
        lg: '1.5rem',    // 24px
        xl: '2rem',      // 32px
        '2xl': '3rem',   // 48px
    },
    
    // ============ Border Radius ============
    borderRadius: {
        sm: '0.375rem',  // 6px
        md: '0.5rem',    // 8px
        lg: '0.75rem',   // 12px
        xl: '1rem',      // 16px
        full: '9999px',
    },
    
    // ============ Shadows ============
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    
    // ============ Card Styles ============
    card: {
        background: '#FFFFFF',
        border: '1px solid #E5E5E5',
        borderRadius: '0.75rem',
        shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        hoverShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    
    // ============ Button Styles ============
    button: {
        primary: {
            background: '#6366F1',
            color: '#FFFFFF',
            hover: '#4F46E5',
            shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        secondary: {
            background: '#F97316',
            color: '#FFFFFF',
            hover: '#EA580C',
            shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        outline: {
            background: 'transparent',
            color: '#6366F1',
            border: '2px solid #6366F1',
            hover: '#EEF2FF',
        },
        ghost: {
            background: 'transparent',
            color: '#525252',
            hover: '#F5F5F5',
        }
    },
    
    // ============ Input Styles ============
    input: {
        background: '#FFFFFF',
        border: '1px solid #D4D4D4',
        borderRadius: '0.5rem',
        padding: '0.625rem 1rem',
        focus: {
            border: '#6366F1',
            shadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
        }
    },
    
    // ============ Navbar Height ============
    navbar: {
        height: '64px',
    },
    
    // ============ Sidebar Width ============
    sidebar: {
        width: '256px',
        collapsedWidth: '80px',
    },
    
    // ============ Status Badge Styles ============
    statusBadge: {
        PENDING: {
            bg: '#FEF3C7',
            text: '#92400E',
            border: '#FCD34D',
        },
        APPROVED: {
            bg: '#D1FAE5',
            text: '#065F46',
            border: '#34D399',
        },
        REJECTED: {
            bg: '#FEE2E2',
            text: '#991B1B',
            border: '#F87171',
        },
        PAID: {
            bg: '#DBEAFE',
            text: '#1E40AF',
            border: '#60A5FA',
        }
    },
    
    // ============ Animation Durations ============
    animation: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
    },
    
    // ============ Breakpoints ============
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    }
};

// ============ Helper Functions ============
const AppHelpers = {
    /**
     * Get status badge classes
     */
    getStatusBadge(status) {
        const config = AppConfig.statusBadge[status] || AppConfig.statusBadge.PENDING;
        return `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`;
    },
    
    /**
     * Format date
     */
    formatDate(dateString) {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    },
    
    /**
     * Format currency
     */
    formatCurrency(amount) {
        if (amount === null || amount === undefined) return '₹0';
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    },
    
    /**
     * Get token from localStorage
     */
    getToken() {
        return localStorage.getItem('token');
    },
    
    /**
     * Get user info from localStorage
     */
    getUserInfo() {
        const userStr = localStorage.getItem('userInfo');
        return userStr ? JSON.parse(userStr) : null;
    },
    
    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return !!this.getToken();
    },
    
    /**
     * Logout user
     */
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        window.location.href = '/';
    },
    
    /**
     * Get authorization header
     */
    getAuthHeader() {
        const token = this.getToken();
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    },
    
    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        // Simple toast implementation
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white z-50 animate-fade-in`;
        
        const bgColor = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            warning: 'bg-yellow-500',
            info: 'bg-blue-500',
        }[type] || 'bg-blue-500';
        
        toast.classList.add(bgColor);
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('animate-fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },
    
    /**
     * Handle API errors
     */
    handleApiError(error) {
        console.error('API Error:', error);
        if (error.response) {
            if (error.response.status === 401) {
                this.showToast('Session expired. Please login again.', 'error');
                this.logout();
            } else {
                const message = error.response.data?.message || error.response.data?.error || 'An error occurred';
                this.showToast(message, 'error');
            }
        } else if (error.request) {
            this.showToast('Network error. Please check your connection.', 'error');
        } else {
            this.showToast('An unexpected error occurred.', 'error');
        }
    }
};

// Make config globally available
window.AppConfig = AppConfig;
window.AppHelpers = AppHelpers;

