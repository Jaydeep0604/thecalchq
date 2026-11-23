/**
 * TheCalcHQ Premier Standard & Scientific Calculator Engine
 * Delivers desktop & mobile-first high-precision arithmetic,
 * scientific functions (Trig, Logs, Powers), Memory register,
 * running tape history, and full keyboard/numpad support.
 */

(function () {
  'use strict';

  let currentInput = '0';
  let expression = '';
  let memoryVal = 0;
  let angleMode = 'DEG'; // 'DEG' or 'RAD'
  let isResultDisplayed = false;
  let historyTape = [];

  // DOM Elements cache
  let displayExpr = null;
  let displayMain = null;
  let memoryIndicator = null;
  let angleIndicator = null;
  let tapeContainer = null;
  let scientificKeypad = null;
  let tabStandard = null;
  let tabScientific = null;
  let toggleTapeBtn = null;
  let tapePanel = null;

  // Load history from localStorage
  try {
    const saved = localStorage.getItem('calchub_tape_history');
    if (saved) historyTape = JSON.parse(saved);
  } catch (e) {
    historyTape = [];
  }

  function formatDisplayNumber(numStr) {
    if (numStr === 'Error' || numStr === 'Infinity' || numStr === '-Infinity' || numStr === 'NaN') {
      return numStr;
    }
    const parts = numStr.split('.');
    const intPart = parts[0];
    const decPart = parts.length > 1 ? '.' + parts[1] : '';
    
    // Format integer part with commas
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedInt + decPart;
  }

  function updateDisplay() {
    if (displayMain) {
      displayMain.textContent = formatDisplayNumber(currentInput);
    }
    if (displayExpr) {
      displayExpr.textContent = expression;
    }
    if (memoryIndicator) {
      if (memoryVal !== 0) {
        memoryIndicator.classList.remove('opacity-0');
        memoryIndicator.classList.add('opacity-100');
      } else {
        memoryIndicator.classList.add('opacity-0');
        memoryIndicator.classList.remove('opacity-100');
      }
    }
    if (angleIndicator) {
      angleIndicator.textContent = angleMode;
    }
  }

  function inputDigit(digit) {
    if (isResultDisplayed) {
      currentInput = digit;
      isResultDisplayed = false;
    } else {
      if (currentInput === '0' && digit !== '.') {
        currentInput = digit;
      } else {
        if (currentInput.length < 18) {
          currentInput += digit;
        }
      }
    }
    updateDisplay();
  }

  function inputDecimal() {
    if (isResultDisplayed) {
      currentInput = '0.';
      isResultDisplayed = false;
    } else if (!currentInput.includes('.')) {
      currentInput += '.';
    }
    updateDisplay();
  }

  function toggleSign() {
    if (currentInput === '0' || currentInput === 'Error') return;
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    updateDisplay();
  }

  function clearAll() {
    currentInput = '0';
    expression = '';
    isResultDisplayed = false;
    updateDisplay();
  }

  function backspace() {
    if (isResultDisplayed) {
      clearAll();
      return;
    }
    if (currentInput.length > 1) {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === '-') currentInput = '0';
    } else {
      currentInput = '0';
    }
    updateDisplay();
  }

  function applyPercentage() {
    const val = parseFloat(currentInput) || 0;
    const res = val / 100;
    currentInput = cleanFloat(res).toString();
    updateDisplay();
  }

  function cleanFloat(num) {
    if (isNaN(num) || !isFinite(num)) return 'Error';
    // Fix IEEE 754 precision issues e.g. 0.1 + 0.2 = 0.30000000000000004
    const rounded = parseFloat(num.toFixed(10));
    return Number(rounded.toPrecision(12)) / 1;
  }

  function inputOperator(op) {
    const opDisplay = { '+': '+', '-': '−', '*': '×', '/': '÷', '^': '^' }[op] || op;
    
    if (expression && !isResultDisplayed && currentInput !== '') {
      evaluate(false);
    }
    
    expression = `${currentInput} ${opDisplay}`;
    isResultDisplayed = true;
    updateDisplay();
  }

  function evaluate(isFinal = true) {
    if (!expression) return;

    // Parse expression e.g. "120 + " or "50 × "
    const tokens = expression.trim().split(' ');
    if (tokens.length < 2) return;

    const left = parseFloat(tokens[0]);
    const opSymbol = tokens[1];
    const right = parseFloat(currentInput);

    if (isNaN(left) || isNaN(right)) return;

    let result = 0;
    switch (opSymbol) {
      case '+': result = left + right; break;
      case '−':
      case '-': result = left - right; break;
      case '×':
      case '*': result = left * right; break;
      case '÷':
      case '/': 
        if (right === 0) {
          currentInput = 'Error';
          expression = '';
          updateDisplay();
          return;
        }
        result = left / right; 
        break;
      case '^': result = Math.pow(left, right); break;
      default: return;
    }

    result = cleanFloat(result);

    if (isFinal) {
      addHistoryItem(`${left} ${opSymbol} ${right} =`, result);
      expression = `${left} ${opSymbol} ${right} =`;
      currentInput = result.toString();
      isResultDisplayed = true;
    } else {
      currentInput = result.toString();
    }

    updateDisplay();
  }

  // Scientific functions
  function applyFunction(fnName) {
    const val = parseFloat(currentInput) || 0;
    let res = 0;

    switch (fnName) {
      case 'sin':
        res = angleMode === 'DEG' ? Math.sin((val * Math.PI) / 180) : Math.sin(val);
        break;
      case 'cos':
        res = angleMode === 'DEG' ? Math.cos((val * Math.PI) / 180) : Math.cos(val);
        break;
      case 'tan':
        if (angleMode === 'DEG' && Math.abs(val % 180) === 90) {
          currentInput = 'Error';
          updateDisplay();
          return;
        }
        res = angleMode === 'DEG' ? Math.tan((val * Math.PI) / 180) : Math.tan(val);
        break;
      case 'asin':
        if (val < -1 || val > 1) { currentInput = 'Error'; updateDisplay(); return; }
        res = angleMode === 'DEG' ? (Math.asin(val) * 180) / Math.PI : Math.asin(val);
        break;
      case 'acos':
        if (val < -1 || val > 1) { currentInput = 'Error'; updateDisplay(); return; }
        res = angleMode === 'DEG' ? (Math.acos(val) * 180) / Math.PI : Math.acos(val);
        break;
      case 'atan':
        res = angleMode === 'DEG' ? (Math.atan(val) * 180) / Math.PI : Math.atan(val);
        break;
      case 'sqrt':
        if (val < 0) { currentInput = 'Error'; updateDisplay(); return; }
        res = Math.sqrt(val);
        break;
      case 'cbrt':
        res = Math.cbrt(val);
        break;
      case 'sq':
        res = Math.pow(val, 2);
        break;
      case 'cube':
        res = Math.pow(val, 3);
        break;
      case 'inv':
        if (val === 0) { currentInput = 'Error'; updateDisplay(); return; }
        res = 1 / val;
        break;
      case 'log':
        if (val <= 0) { currentInput = 'Error'; updateDisplay(); return; }
        res = Math.log10(val);
        break;
      case 'ln':
        if (val <= 0) { currentInput = 'Error'; updateDisplay(); return; }
        res = Math.log(val);
        break;
      case 'exp':
        res = Math.exp(val);
        break;
      case 'tenPow':
        res = Math.pow(10, val);
        break;
      case 'factorial':
        if (val < 0 || !Number.isInteger(val) || val > 170) {
          currentInput = 'Error';
          updateDisplay();
          return;
        }
        let f = 1;
        for (let i = 2; i <= val; i++) f *= i;
        res = f;
        break;
      case 'pi':
        res = Math.PI;
        break;
      case 'e':
        res = Math.E;
        break;
      default:
        return;
    }

    res = cleanFloat(res);
    addHistoryItem(`${fnName}(${val}) =`, res);
    currentInput = res.toString();
    isResultDisplayed = true;
    updateDisplay();
  }

  // Memory Operations
  function memoryAdd() {
    const val = parseFloat(currentInput) || 0;
    memoryVal += val;
    isResultDisplayed = true;
    updateDisplay();
    showToastFeedback(`M+ added: ${val}`);
  }

  function memorySub() {
    const val = parseFloat(currentInput) || 0;
    memoryVal -= val;
    isResultDisplayed = true;
    updateDisplay();
    showToastFeedback(`M- subtracted: ${val}`);
  }

  function memoryRecall() {
    currentInput = memoryVal.toString();
    isResultDisplayed = true;
    updateDisplay();
  }

  function memoryClear() {
    memoryVal = 0;
    updateDisplay();
    showToastFeedback('Memory Cleared (MC)');
  }

  // Running Tape / History Operations
  function addHistoryItem(exprText, resText) {
    const item = {
      id: Date.now(),
      expr: exprText,
      result: resText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    historyTape.unshift(item);
    if (historyTape.length > 50) historyTape.pop();
    try {
      localStorage.setItem('calchub_tape_history', JSON.stringify(historyTape));
    } catch (e) {}
    renderHistoryTape();
  }

  function renderHistoryTape() {
    if (!tapeContainer) return;
    tapeContainer.innerHTML = '';

    if (historyTape.length === 0) {
      tapeContainer.innerHTML = `
        <div class="py-8 text-center text-slate-400 dark:text-slate-500 text-xs font-medium">
          No past calculations yet.<br>Every result will be saved here automatically.
        </div>
      `;
      return;
    }

    historyTape.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'group p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 text-right';
      row.innerHTML = `
        <div class="flex justify-between items-center text-[10px] text-slate-400 mb-0.5">
          <span>${item.time}</span>
          <span class="group-hover:text-cyan-500 transition">Tap to reuse ↵</span>
        </div>
        <div class="text-xs text-slate-500 dark:text-slate-400 font-mono overflow-hidden text-ellipsis">${item.expr}</div>
        <div class="text-sm font-black font-mono text-slate-900 dark:text-white">${formatDisplayNumber(item.result.toString())}</div>
      `;
      row.addEventListener('click', () => {
        currentInput = item.result.toString();
        isResultDisplayed = true;
        updateDisplay();
        showToastFeedback(`Reused ${item.result}`);
      });
      tapeContainer.appendChild(row);
    });
  }

  function clearHistoryTape() {
    historyTape = [];
    try {
      localStorage.removeItem('calchub_tape_history');
    } catch (e) {}
    renderHistoryTape();
    showToastFeedback('Calculation History Cleared');
  }

  function copyCurrentResult() {
    if (!currentInput || currentInput === 'Error') return;
    navigator.clipboard.writeText(currentInput).then(() => {
      showToastFeedback(`Copied ${currentInput} to clipboard!`);
    });
  }

  function showToastFeedback(msg) {
    if (window.showToast) {
      window.showToast(msg);
    }
  }

  // Keyboard Support
  function handleKeyDown(e) {
    // Only capture when user is NOT typing into an input field or search bar
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }

    const key = e.key;

    if (key >= '0' && key <= '9') {
      e.preventDefault();
      inputDigit(key);
    } else if (key === '.') {
      e.preventDefault();
      inputDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      e.preventDefault();
      inputOperator(key);
    } else if (key === 'Enter' || key === '=') {
      e.preventDefault();
      evaluate(true);
    } else if (key === 'Backspace') {
      e.preventDefault();
      backspace();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
      e.preventDefault();
      clearAll();
    } else if (key === '%') {
      e.preventDefault();
      applyPercentage();
    }
  }

  // Public Initialization
  window.CalcStandard = {
    init: function () {
      displayExpr = document.getElementById('stdCalcExpr');
      displayMain = document.getElementById('stdCalcDisplay');
      memoryIndicator = document.getElementById('stdMemoryBadge');
      angleIndicator = document.getElementById('stdAngleBadge');
      tapeContainer = document.getElementById('stdTapeList');
      scientificKeypad = document.getElementById('scientificPanel');
      tabStandard = document.getElementById('tabStdMode');
      tabScientific = document.getElementById('tabSciMode');
      toggleTapeBtn = document.getElementById('toggleTapeBtn');
      tapePanel = document.getElementById('stdTapeDrawer');

      const clearTapeBtn = document.getElementById('clearTapeBtn');
      if (clearTapeBtn) clearTapeBtn.addEventListener('click', clearHistoryTape);

      const copyBtn = document.getElementById('copyStdResultBtn');
      if (copyBtn) copyBtn.addEventListener('click', copyCurrentResult);

      const angleToggleBtn = document.getElementById('stdAngleToggleBtn');
      if (angleToggleBtn) {
        angleToggleBtn.addEventListener('click', () => {
          angleMode = angleMode === 'DEG' ? 'RAD' : 'DEG';
          angleToggleBtn.textContent = angleMode;
          updateDisplay();
        });
      }

      // Mode switching: Standard vs Scientific
      if (tabStandard && tabScientific) {
        tabStandard.addEventListener('click', () => {
          tabStandard.className = 'px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-sm transition text-xs';
          tabScientific.className = 'px-3 py-1.5 rounded-xl text-slate-500 dark:text-slate-400 font-semibold hover:text-slate-900 dark:hover:text-white transition text-xs';
          if (scientificKeypad) scientificKeypad.classList.add('hidden');
        });

        tabScientific.addEventListener('click', () => {
          tabScientific.className = 'px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-sm transition text-xs';
          tabStandard.className = 'px-3 py-1.5 rounded-xl text-slate-500 dark:text-slate-400 font-semibold hover:text-slate-900 dark:hover:text-white transition text-xs';
          if (scientificKeypad) scientificKeypad.classList.remove('hidden');
        });
      }

      // History Tape Toggle
      if (toggleTapeBtn && tapePanel) {
        toggleTapeBtn.addEventListener('click', () => {
          tapePanel.classList.toggle('hidden');
        });
      }

      // Keypad Event Delegations
      document.querySelectorAll('[data-calc-digit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          inputDigit(e.currentTarget.getAttribute('data-calc-digit'));
        });
      });

      document.querySelectorAll('[data-calc-op]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          inputOperator(e.currentTarget.getAttribute('data-calc-op'));
        });
      });

      document.querySelectorAll('[data-calc-fn]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          applyFunction(e.currentTarget.getAttribute('data-calc-fn'));
        });
      });

      const btnEquals = document.getElementById('btnCalcEquals');
      if (btnEquals) btnEquals.addEventListener('click', () => evaluate(true));

      const btnClear = document.getElementById('btnCalcClear');
      if (btnClear) btnClear.addEventListener('click', clearAll);

      const btnBackspace = document.getElementById('btnCalcBackspace');
      if (btnBackspace) btnBackspace.addEventListener('click', backspace);

      const btnDecimal = document.getElementById('btnCalcDecimal');
      if (btnDecimal) btnDecimal.addEventListener('click', inputDecimal);

      const btnSign = document.getElementById('btnCalcSign');
      if (btnSign) btnSign.addEventListener('click', toggleSign);

      const btnPercent = document.getElementById('btnCalcPercent');
      if (btnPercent) btnPercent.addEventListener('click', applyPercentage);

      // Memory buttons
      const btnMC = document.getElementById('btnCalcMC');
      const btnMR = document.getElementById('btnCalcMR');
      const btnMPlus = document.getElementById('btnCalcMPlus');
      const btnMMinus = document.getElementById('btnCalcMMinus');

      if (btnMC) btnMC.addEventListener('click', memoryClear);
      if (btnMR) btnMR.addEventListener('click', memoryRecall);
      if (btnMPlus) btnMPlus.addEventListener('click', memoryAdd);
      if (btnMMinus) btnMMinus.addEventListener('click', memorySub);

      // Keyboard listener
      window.addEventListener('keydown', handleKeyDown);

      renderHistoryTape();
      updateDisplay();
    }
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.CalcStandard.init);
  } else {
    window.CalcStandard.init();
  }
})();
