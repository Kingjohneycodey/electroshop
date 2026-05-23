import Link from 'next/link';
import { FiGlobe, FiShare2, FiHexagon } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'hsl(var(--secondary))',
      padding: '5rem 0',
      marginTop: 'auto'
    }}>
      <div className="container grid grid-4">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>ElectroOrange</div>
          <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', lineHeight: 1.6 }}>
            © 2026 ElectroOrange. High-performance tech for the modern professional.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="#" style={iconLinkStyle}><FiGlobe size={20} /></Link>
            <Link href="#" style={iconLinkStyle}><FiShare2 size={20} /></Link>
            <Link href="#" style={iconLinkStyle}><FiHexagon size={20} /></Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>Products</h4>
          <Link href="/products" style={linkStyle}>Laptops</Link>
          <Link href="/products" style={linkStyle}>Phones</Link>
          <Link href="/products" style={linkStyle}>Accessories</Link>
          <Link href="/products" style={linkStyle}>Gift Cards</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>Support</h4>
          <Link href="#" style={linkStyle}>Shipping Info</Link>
          <Link href="#" style={linkStyle}>Returns</Link>
          <Link href="#" style={linkStyle}>Contact Us</Link>
          <Link href="#" style={linkStyle}>FAQs</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>Legal</h4>
          <Link href="#" style={linkStyle}>Privacy Policy</Link>
          <Link href="#" style={linkStyle}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'hsl(var(--muted-foreground))',
  fontSize: '0.875rem',
  transition: 'color 0.2s ease',
};

const iconLinkStyle = {
  color: 'hsl(var(--muted-foreground))',
  transition: 'color 0.2s ease',
};
