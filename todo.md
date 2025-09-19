POS Toko Percetakan - Development Plan
Core Features Implementation
1. Authentication & User Management

    Login page (based on mockup design)
    User roles: Admin & Kasir
    Protected routes

2. Dashboard

    Modern dashboard with statistics
    Recent transactions overview
    Quick actions

3. Product Management

    Add/Edit/Delete products
    Product categories
    Unit types (pcs, m², etc.)
    Price management

4. POS Transaction System

    Product selection
    Quantity/size calculation (special handling for m² products)
    Real-time price calculation
    Invoice generation

5. Reports & Analytics

    Transaction reports by period
    Excel export functionality
    Sales analytics

6. Settings

    Shop information
    Logo upload
    User management

File Structure Plan
Core Files (8 files max):

    src/App.jsx - Main app with routing and auth
    src/components/Auth/LoginPage.jsx - Login interface
    src/components/Dashboard/Dashboard.jsx - Main dashboard
    src/components/POS/POSSystem.jsx - Point of sale interface
    src/components/Products/ProductManager.jsx - Product management
    src/components/Reports/ReportsPage.jsx - Reports and analytics
    src/components/Settings/SettingsPage.jsx - App settings
    src/utils/supabase.js - Supabase configuration and helpers

Indonesian Formatting Requirements

    Currency: Rp. 100.000 (with dots as thousand separators)
    Date: Kamis, 24 Juni 2025
    All text in Indonesian

Design Requirements

    Modern, clean, elegant design
    Hover animations on buttons
    Beautiful sidebar with transitions
    SweetAlert for notifications
    Responsive for all devices
    Professional color scheme

Supabase Integration

    User authentication
    Product management
    Transaction storage
    Reports data
    File storage for logos
