/**
 * CalcHub Multi-Currency Engine
 * Handles global currency selection, localStorage persistence, 
 * dynamic symbol updating, and localized number formatting.
 */

const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'USD ($)', locale: 'en-US' },
  { code: 'EUR', symbol: '€', name: 'EUR (€)', locale: 'de-DE' },
  { code: 'GBP', symbol: '£', name: 'GBP (£)', locale: 'en-GB' },
  { code: 'INR', symbol: '₹', name: 'INR (₹)', locale: 'en-IN' },
  { code: 'CAD', symbol: 'CA$', name: 'CAD (CA$)', locale: 'en-CA' },
  { code: 'AUD', symbol: 'AU$', name: 'AUD (AU$)', locale: 'en-AU' },
  { code: 'JPY', symbol: '¥', name: 'JPY (¥)', locale: 'ja-JP' },
  { code: 'AED', symbol: 'AED', name: 'AED (د.إ)', locale: 'ar-AE' },
  { code: 'SGD', symbol: 'SG$', name: 'SGD (SG$)', locale: 'en-SG' },
  { code: 'CHF', symbol: 'CHF', name: 'CHF', locale: 'de-CH' },
  { code: 'CNY', symbol: '¥', name: 'CNY (¥)', locale: 'zh-CN' },
  { code: 'BRL', symbol: 'R$', name: 'BRL (R$)', locale: 'pt-BR' },
  { code: 'ZAR', symbol: 'R', name: 'ZAR (R)', locale: 'en-ZA' },
  { code: 'MXN', symbol: 'MX$', name: 'MXN (MX$)', locale: 'es-MX' },
  { code: 'KRW', symbol: '₩', name: 'KRW (₩)', locale: 'ko-KR' },
  { code: 'NZD', symbol: 'NZ$', name: 'NZD (NZ$)', locale: 'en-NZ' }
];

class CurrencyManager {
  constructor() {
    this.currentCode = localStorage.getItem('calchub_currency') || 'USD';
    this.current = CURRENCIES.find(c => c.code === this.currentCode) || CURRENCIES[0];
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.mountDropdown();
        this.updateDomSymbols();
      });
    } else {
      this.mountDropdown();
      this.updateDomSymbols();
    }
  }

  setCurrency(code) {
    const found = CURRENCIES.find(c => c.code === code);
    if (found) {
      this.current = found;
      this.currentCode = found.code;
      localStorage.setItem('calchub_currency', found.code);
      this.updateDomSymbols();
      window.dispatchEvent(new CustomEvent('currencyChanged', { detail: this.current }));
    }
  }

  getSymbol() {
    return this.current.symbol;
  }

  getCode() {
    return this.current.code;
  }

  format(amount, decimals = 2) {
    if (isNaN(amount)) return `${this.current.symbol}0.00`;
    
    // For currencies like JPY and KRW without standard fractional cents
    const fraction = (this.current.code === 'JPY' || this.current.code === 'KRW') ? 0 : decimals;
    
    return `${this.current.symbol}${Number(amount).toLocaleString('en-US', {
      minimumFractionDigits: fraction,
      maximumFractionDigits: fraction
    })}`;
  }

  updateDomSymbols() {
    document.querySelectorAll('.currency-symbol').forEach(el => {
      el.textContent = this.current.symbol;
    });
  }

  updateDOM() {
    this.updateDomSymbols();
  }

  mountDropdown() {
    const containers = document.querySelectorAll('.currency-selector-mount');
    if (!containers.length) return;

    const isMobile = window.innerWidth < 640;

    containers.forEach(container => {
      const select = document.createElement('select');
      select.className = 'text-[11px] sm:text-xs font-bold py-1 sm:py-1.5 px-1.5 sm:px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer transition';
      
      CURRENCIES.forEach(curr => {
        const opt = document.createElement('option');
        opt.value = curr.code;
        opt.textContent = isMobile ? curr.code : `${curr.code} (${curr.symbol})`;
        if (curr.code === this.currentCode) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });

      select.addEventListener('change', (e) => {
        this.setCurrency(e.target.value);
      });

      container.innerHTML = '';
      container.appendChild(select);
    });
  }
}

// Global singleton instance
window.CalcCurrency = new CurrencyManager();
