import React, { useState, useEffect } from 'react';
import './styles/global.css';
import './App.css';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Card } from './components/ui/Card';
import { QuickExpenseButton } from './components/ui/QuickExpenseButton';
import { Modal } from './components/ui/Modal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedQuickExpense, setSelectedQuickExpense] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleQuickExpenseTap = (name: string, amountPaise: number) => {
    setSelectedQuickExpense(`${name} (₹${amountPaise / 100})`);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="brand">
          <span className="brand-logo">💳⚡</span>
          <h1 className="brand-title">Pocket Pulse</h1>
        </div>
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </header>

      <main className="app-main">
        <div className="hero-banner">
          <span className="badge">Phase 2 — Design System</span>
          <h2>Crafted for &lt; 2 Second Expense Recording</h2>
          <p>
            Current theme: <strong>{theme.toUpperCase()}</strong> (using semantic design tokens)
          </p>
        </div>

        {/* Quick Expense Buttons Section */}
        <section className="demo-section">
          <h3>⚡ Quick Expense Buttons (1-Tap Recording)</h3>
          <div className="quick-expense-grid">
            <QuickExpenseButton
              icon="☕"
              label="Chai / Coffee"
              categoryName="Food & Drinks"
              defaultAmountPaise={3000}
              onClick={() => handleQuickExpenseTap('Chai / Coffee', 3000)}
            />
            <QuickExpenseButton
              icon="Metro"
              label="Metro Recharge"
              categoryName="Transport"
              defaultAmountPaise={20000}
              onClick={() => handleQuickExpenseTap('Metro Recharge', 20000)}
            />
            <QuickExpenseButton
              icon="🍱"
              label="Lunch / Thali"
              categoryName="Food & Drinks"
              defaultAmountPaise={15000}
              onClick={() => handleQuickExpenseTap('Lunch / Thali', 15000)}
            />
            <QuickExpenseButton
              icon="Auto"
              label="Auto Ride"
              categoryName="Transport"
              defaultAmountPaise={8000}
              onClick={() => handleQuickExpenseTap('Auto Ride', 8000)}
            />
          </div>
        </section>

        {/* Buttons Showcase */}
        <section className="demo-section">
          <h3>🔘 Buttons & Loading States</h3>
          <div className="demo-flex">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button variant="primary" isLoading>
              Saving...
            </Button>
          </div>
        </section>

        {/* Inputs Showcase */}
        <section className="demo-section">
          <h3>📝 Form Inputs</h3>
          <div className="demo-grid-2">
            <Input
              label="Expense Amount (₹)"
              placeholder="e.g. 250"
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="Stored as minor units (paise) in backend"
            />
            <Input
              label="Category"
              placeholder="e.g. Snacks"
              error={inputValue && Number(inputValue) > 50000 ? 'Amount exceeds daily threshold' : undefined}
            />
          </div>
        </section>

        {/* Cards Showcase */}
        <section className="demo-section">
          <h3>📦 Surface Containers & Cards</h3>
          <div className="demo-grid-3">
            <Card variant="bordered" padding="md">
              <h4>Bordered Card</h4>
              <p>Clean border container with surface background token.</p>
            </Card>

            <Card variant="elevated" padding="md">
              <h4>Elevated Card</h4>
              <p>Soft shadow elevation for dashboards and key metrics.</p>
            </Card>

            <Card
              variant="bordered"
              padding="md"
              onClick={() => setIsModalOpen(true)}
            >
              <h4>Interactive Card ➔</h4>
              <p>Tap to open modal dialog container.</p>
            </Card>
          </div>
        </section>
      </main>

      {/* Modal Demo */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Quick Expense Confirmation"
      >
        <div className="modal-demo-content">
          <p>
            You selected: <strong>{selectedQuickExpense || 'Custom Entry'}</strong>
          </p>
          <div className="modal-actions">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert(`Confirmed: ${selectedQuickExpense}`);
                setIsModalOpen(false);
              }}
            >
              Record Expense (under 2s)
            </Button>
          </div>
        </div>
      </Modal>

      <footer className="app-footer">
        <p>Pocket Pulse v1.0.0 — Phase 2 Design System Scaffolded</p>
      </footer>
    </div>
  );
};

export default App;
