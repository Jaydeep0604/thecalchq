/**
 * TheCalcHQ Dark/Light Theme Manager
 * Supports: System preference detection, localStorage persistence,
 * dynamic theme toggling, and Chart.js color palette updates.
 */

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('calchub_theme') || this.getSystemPreference();
    this.applyTheme(this.theme);
    this.init();
  }

  getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.mountToggleButtons();
      });
    } else {
      this.mountToggleButtons();
    }

    // Listen to OS-level theme changes if user hasn't explicitly set one
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('calchub_theme')) {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  toggleTheme() {
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('calchub_theme', theme);
    this.applyTheme(theme);
    this.updateToggleIcons();
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  mountToggleButtons() {
    const containers = document.querySelectorAll('.theme-toggle-mount');
    if (!containers.length) return;

    containers.forEach(container => {
      container.innerHTML = `
        <button type="button" aria-label="Toggle Dark Mode" class="theme-toggle-btn w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border transition duration-200 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm flex-shrink-0">
          <span class="theme-icon-sun hidden dark:inline text-base">☀️</span>
          <span class="theme-icon-moon inline dark:hidden text-base">🌙</span>
        </button>
      `;

      container.querySelector('.theme-toggle-btn').addEventListener('click', () => {
        this.toggleTheme();
      });
    });
  }

  updateToggleIcons() {
    // Icons handle state automatically via CSS .dark class
  }

  isDark() {
    return this.theme === 'dark';
  }
}

// Global Theme Instance
window.CalcTheme = new ThemeManager();

/**
 * Toast Notification Helper (UX enhancement)
 */
window.showToast = function(message = 'Copied to clipboard!') {
  let toast = document.getElementById('calcToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'calcToast';
    toast.className = 'toast-notification px-4 py-2.5 rounded-xl shadow-xl font-medium text-xs flex items-center gap-2 bg-slate-900 text-white dark:bg-emerald-600 dark:text-white border border-slate-700 dark:border-emerald-500';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
};

/**
 * Global Input UX Enhancement:
 * Automatically select all text/number when user taps/clicks any input field
 * so they don't have to repeatedly backspace default values.
 */
document.addEventListener('focus', function(e) {
  if (e.target && (e.target.tagName === 'INPUT' && (e.target.type === 'number' || e.target.type === 'text'))) {
    // Small timeout ensures touch and mouse events finish before selection
    setTimeout(() => {
      try {
        e.target.select();
      } catch (err) {}
    }, 50);
  }
}, true);
