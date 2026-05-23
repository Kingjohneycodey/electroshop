'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft, FiArrowRight, FiLock, FiZap } from 'react-icons/fi';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  const subtotal = cartTotal;
  const shipping = cart.length > 0 ? 15 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="container section fade-in" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Your Cart is Empty</h1>
        <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '3rem' }}>Looks like you haven't added any high-performance gear yet.</p>
        <Link href="/products" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container section fade-in">
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Your Shopping Cart</h1>
      
      <div className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: 'hsl(var(--muted))', textAlign: 'left' }}>
                <tr>
                  <th style={{ padding: '1.5rem' }}>Product</th>
                  <th style={{ padding: '1.5rem', textAlign: 'center' }}>Quantity</th>
                  <th style={{ padding: '1.5rem', textAlign: 'right' }}>Price</th>
                  <th style={{ padding: '1.5rem' }}></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                    <td style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '80px', height: '80px', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.125rem' }}>{item.name}</h4>
                          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Premium Edition</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', border: '1px solid hsl(var(--border))', padding: '0.5rem', borderRadius: '0.5rem' }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <FiMinus />
                        </button>
                        <span style={{ fontWeight: 700 }}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </td>
                    <td style={{ padding: '1.5rem', textAlign: 'right' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </td>
                    <td style={{ padding: '1.5rem', textAlign: 'right' }}>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/products" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <FiArrowLeft /> Continue Shopping
            </Link>
            <button onClick={clearCart} style={{ color: 'hsl(var(--muted-foreground))', textDecoration: 'underline' }}>Clear Cart</button>
          </div>
        </div>

        {/* Sidebar Summary */}
        <aside style={{ 
          backgroundColor: 'white', 
          padding: '2.5rem', 
          borderRadius: 'var(--radius)', 
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: '100px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Order Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'hsl(var(--muted-foreground))' }}>Subtotal</span>
              <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'hsl(var(--muted-foreground))' }}>Shipping</span>
              <span style={{ fontWeight: 600 }}>${shipping.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'hsl(var(--muted-foreground))' }}>Tax (8%)</span>
              <span style={{ fontWeight: 600 }}>${tax.toFixed(2)}</span>
            </div>
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>${total.toFixed(2)}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Promo Code" 
                style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', backgroundColor: '#f9f9f9' }}
              />
              <button style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--primary))', fontWeight: 700 }}>Apply</button>
            </div>
            <Link href="/checkout" className="btn btn-primary" style={{ padding: '1.25rem', fontSize: '1.125rem', gap: '0.5rem' }}>
              Proceed to Checkout <FiArrowRight />
            </Link>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
              <FiLock size={12} /> Secure encrypted checkout
            </p>
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: 'var(--radius)', backgroundColor: 'hsl(var(--primary) / 0.05)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <FiZap color="hsl(var(--primary))" size={24} style={{ flexShrink: 0 }} />
            <div>
              <h5 style={{ fontWeight: 700, fontSize: '0.875rem' }}>ElectroOrange Rewards</h5>
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>You're earning {Math.floor(total)} points on this order.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
