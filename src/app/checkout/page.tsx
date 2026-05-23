'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FiTruck, FiCreditCard, FiCheckCircle, FiLock } from 'react-icons/fi';
import { FaPaypal } from 'react-icons/fa';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();

  const subtotal = cartTotal;
  const shipping = cart.length > 0 ? 0 : 0; // Free shipping in checkout
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container section fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Checkout</h1>
        <p style={{ fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))' }}>Complete your order with high-performance gear.</p>
      </div>

      <div className="checkout-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Shipping Address */}
          <section style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <FiTruck color="hsl(var(--primary))" size={24} />
              <h2 style={{ fontSize: '1.75rem' }}>Shipping Address</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="input-group" style={{ gridColumn: 'span 2' }}>
                <label>Street Address</label>
                <input type="text" placeholder="123 Tech Avenue, Suite 400" />
              </div>
              <div className="input-group">
                <label>City</label>
                <input type="text" placeholder="San Francisco" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="input-group">
                  <label>State</label>
                  <input type="text" placeholder="CA" />
                </div>
                <div className="input-group">
                  <label>Zip Code</label>
                  <input type="text" placeholder="94103" />
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <FiCreditCard color="hsl(var(--primary))" size={24} />
              <h2 style={{ fontSize: '1.75rem' }}>Payment Method</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ border: '2px solid hsl(var(--primary))', backgroundColor: 'hsl(var(--primary) / 0.05)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                <FiCreditCard color="hsl(var(--primary))" />
                <span style={{ fontWeight: 700 }}>Credit Card</span>
                <FiCheckCircle style={{ marginLeft: 'auto', color: 'hsl(var(--primary))' }} />
              </div>
              <div style={{ border: '2px solid hsl(var(--border))', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', opacity: 0.6 }}>
                <FaPaypal />
                <span style={{ fontWeight: 700 }}>PayPal</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="input-group">
                <label>Card Number</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" placeholder="0000 0000 0000 0000" style={{ paddingLeft: '3.5rem' }} />
                  <FiCreditCard style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--muted-foreground))' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="input-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM / YY" />
                </div>
                <div className="input-group">
                  <label>CVV</label>
                  <input type="password" placeholder="***" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Review */}
        <aside style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))', position: 'sticky', top: '100px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid hsl(var(--border))' }}>Order Review</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {cart.map((p) => (
              <div key={p.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700 }}>{p.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '0.875rem', color: 'hsl(var(--primary))', fontWeight: 700 }}>${(p.price * p.quantity).toFixed(2)}</span>
                    <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Qty: {p.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
            {cart.length === 0 && <p style={{ textAlign: 'center', color: 'hsl(var(--muted-foreground))' }}>No items in cart.</p>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
              <span>Shipping</span>
              <span style={{ color: 'hsl(var(--primary))', fontWeight: 700 }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, marginTop: '0.5rem' }}>
              <span>Total</span>
              <span style={{ color: 'hsl(var(--primary))' }}>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '1.5rem', fontSize: '1.25rem', borderRadius: '9999px' }}>
            Complete Order
          </button>
          
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            <FiLock size={14} /> Secure SSL Encrypted Checkout
          </p>
        </aside>
      </div>
    </div>
  );
}
