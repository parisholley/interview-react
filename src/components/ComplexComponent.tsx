import React, { useState, useMemo } from 'react';

// Fixed: Extracted child components and added useMemo for calculations

interface UserProfileProps {
  name: string;
  age: number;
  email: string;
  bio: string;
  onNameChange: (name: string) => void;
  onAgeChange: (age: number) => void;
  onEmailChange: (email: string) => void;
  onBioChange: (bio: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, email, bio, onNameChange, onAgeChange, onEmailChange, onBioChange }) => (
  <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
    <h2>User Profile</h2>
    <div>
      <label>Name: </label>
      <input value={name} onChange={(e) => onNameChange(e.target.value)} />
    </div>
    <div>
      <label>Age: </label>
      <input type="number" value={age} onChange={(e) => onAgeChange(Number(e.target.value))} />
    </div>
    <div>
      <label>Email: </label>
      <input value={email} onChange={(e) => onEmailChange(e.target.value)} />
    </div>
    <div>
      <label>Bio: </label>
      <textarea value={bio} onChange={(e) => onBioChange(e.target.value)} />
    </div>
    <p>Profile: {name}, {age} years old, {email}</p>
  </div>
);

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  shippingCost: number;
  taxRate: number;
  subtotal: number;
  tax: number;
  total: number;
  onIncrement: (id: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, shippingCost, taxRate, subtotal, tax, total, onIncrement }) => (
  <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
    <h2>Shopping Cart</h2>
    {items.map(item => (
      <div key={item.id} style={{ marginBottom: '10px' }}>
        <span>{item.name} - ${item.price} x {item.quantity}</span>
        <button onClick={() => onIncrement(item.id)}>+</button>
      </div>
    ))}
    <div>Shipping: ${shippingCost}</div>
    <div>Tax Rate: {(taxRate * 100).toFixed(1)}%</div>
    <div>Subtotal: ${subtotal.toFixed(2)}</div>
    <div>Tax: ${tax.toFixed(2)}</div>
    <div><strong>Total: ${total.toFixed(2)}</strong></div>
  </div>
);

interface AnalyticsProps {
  visits: number;
  conversions: number;
  revenue: number;
  avgOrderValue: number;
  conversionRate: number;
  revenuePerVisit: number;
  onSimulateTraffic: () => void;
  onSimulateConversions: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ visits, conversions, revenue, avgOrderValue, conversionRate, revenuePerVisit, onSimulateTraffic, onSimulateConversions }) => (
  <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
    <h2>Analytics Dashboard</h2>
    <div>Visits: {visits}</div>
    <div>Conversions: {conversions}</div>
    <div>Revenue: ${revenue}</div>
    <div>Avg Order Value: ${avgOrderValue}</div>
    <div>Conversion Rate: {conversionRate.toFixed(2)}%</div>
    <div>Revenue per Visit: ${revenuePerVisit.toFixed(2)}</div>
    <button onClick={onSimulateTraffic}>Simulate Traffic</button>
    <button onClick={onSimulateConversions}>Simulate Conversions</button>
  </div>
);

interface SettingsProps {
  theme: string;
  notifications: boolean;
  autoSave: boolean;
  language: string;
  onThemeChange: (theme: string) => void;
  onNotificationsChange: (notifications: boolean) => void;
  onAutoSaveChange: (autoSave: boolean) => void;
  onLanguageChange: (language: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ theme, notifications, autoSave, language, onThemeChange, onNotificationsChange, onAutoSaveChange, onLanguageChange }) => (
  <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
    <h2>Settings</h2>
    <div>
      <label>
        <input type="radio" value="light" checked={theme === 'light'} onChange={(e) => onThemeChange(e.target.value)} />
        Light Theme
      </label>
      <label>
        <input type="radio" value="dark" checked={theme === 'dark'} onChange={(e) => onThemeChange(e.target.value)} />
        Dark Theme
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" checked={notifications} onChange={(e) => onNotificationsChange(e.target.checked)} />
        Enable Notifications
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" checked={autoSave} onChange={(e) => onAutoSaveChange(e.target.checked)} />
        Auto Save
      </label>
    </div>
    <div>
      <label>Language: </label>
      <select value={language} onChange={(e) => onLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  </div>
);

const ComplexComponent: React.FC = () => {
  // User profile section state
  const [userName, setUserName] = useState('John Doe');
  const [userAge, setUserAge] = useState(25);
  const [userEmail, setUserEmail] = useState('john@example.com');
  const [userBio, setUserBio] = useState('Software developer');
  
  // Shopping cart section state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Mouse', price: 29, quantity: 2 }
  ]);
  const [shippingCost, setShippingCost] = useState(15);
  const [taxRate, setTaxRate] = useState(0.08);
  
  // Analytics dashboard section state
  const [visits, setVisits] = useState(1250);
  const [conversions, setConversions] = useState(89);
  const [revenue, setRevenue] = useState(45600);
  const [avgOrderValue, setAvgOrderValue] = useState(127);
  
  // Settings panel section state
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [language, setLanguage] = useState('en');
  
  // Fixed: Memoized complex calculations to prevent unnecessary recalculations
  const cartCalculations = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shippingCost;
    return { subtotal, tax, total };
  }, [cartItems, taxRate, shippingCost]);
  
  const analyticsCalculations = useMemo(() => {
    const conversionRate = visits > 0 ? (conversions / visits) * 100 : 0;
    const revenuePerVisit = visits > 0 ? revenue / visits : 0;
    return { conversionRate, revenuePerVisit };
  }, [visits, conversions, revenue]);

  const handleCartIncrement = (id: number) => {
    setCartItems(items => 
      items.map(i => 
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '1200px' }}>
      <h1>Dashboard</h1>
      
      <UserProfile
        name={userName}
        age={userAge}
        email={userEmail}
        bio={userBio}
        onNameChange={setUserName}
        onAgeChange={setUserAge}
        onEmailChange={setUserEmail}
        onBioChange={setUserBio}
      />
      
      <ShoppingCart
        items={cartItems}
        shippingCost={shippingCost}
        taxRate={taxRate}
        subtotal={cartCalculations.subtotal}
        tax={cartCalculations.tax}
        total={cartCalculations.total}
        onIncrement={handleCartIncrement}
      />
      
      <Analytics
        visits={visits}
        conversions={conversions}
        revenue={revenue}
        avgOrderValue={avgOrderValue}
        conversionRate={analyticsCalculations.conversionRate}
        revenuePerVisit={analyticsCalculations.revenuePerVisit}
        onSimulateTraffic={() => setVisits(v => v + 100)}
        onSimulateConversions={() => setConversions(c => c + 5)}
      />
      
      <Settings
        theme={theme}
        notifications={notifications}
        autoSave={autoSave}
        language={language}
        onThemeChange={setTheme}
        onNotificationsChange={setNotifications}
        onAutoSaveChange={setAutoSave}
        onLanguageChange={setLanguage}
      />
    </div>
  );
};

export default ComplexComponent;

