'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const navLinks = [
    { name: 'Shop', href: '/' },
    { name: 'Deals', href: '/products' },
    { name: 'New Arrivals', href: '/products' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header style={{
      backgroundColor: 'hsl(var(--card))',
      borderBottom: '1px solid hsl(var(--border))',
      height: '80px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          color: 'hsl(var(--primary))',
          letterSpacing: '-0.05em'
        }}>
          ElectroOrange
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                style={{ 
                  color: isActive ? 'hsl(var(--primary))' : 'inherit', 
                  borderBottom: isActive ? '2px solid hsl(var(--primary))' : '2px solid transparent', 
                  paddingBottom: '4px',
                  transition: 'all 0.2s ease'
                }}
                className={!isActive ? 'hover-orange' : ''}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button style={{ display: 'flex', alignItems: 'center' }} aria-label="Search">
            <FiSearch size={22} />
          </button>
          <Link href="/cart" style={{ display: 'flex', alignItems: 'center', position: 'relative' }} aria-label="Cart">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                backgroundColor: 'hsl(var(--primary))',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
          <button style={{ display: 'flex', alignItems: 'center' }} aria-label="User profile">
            <FiUser size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
