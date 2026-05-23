'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FiStar, FiHeart, FiTruck, FiShield, FiPlus } from 'react-icons/fi';

export default function ProductDetailPage() {
  const { addToCart } = useCart();

  const product = {
    name: 'SonicBlast Pro X1',
    price: '$299.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_5Fcr9Cq_pNKqYVdlCfK_cEjwJ7ttTgt9WsQJLNa5EQcSwfh297qmVRb5g4SoaIGazVeeTWCC_qV65oe0HBf6RbzgNb_uF7IAnBQAvnrZ1zSMPpp7w7uj1o5p7sDZ1ltquMiHj_YvVN7x1WD6087-X17xccBjeZpjQ2KPD70Sw3-10jqZ-1H1QvZRfipNJD11kfYxd4mVDsbPpnpA2DEekqTS1XV84Kx-bQefL_Zd6luU9-FSTh_1Z08zPQQuuOd8_pCge9wWGmgB'
  };

  return (
    <div className="container section fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Left: Images */}
        <div>
          <div style={{ 
            backgroundColor: 'hsl(var(--card))', 
            borderRadius: 'var(--radius)', 
            padding: '2rem', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <img 
              src={product.img}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAhbICNvA6RE9zvw-yYzv43kunUrbUdQn05K3IS382tAdK7AmA2sQYqBD-LMiU_ZJNxsTm-q4c2yc0UzG_nGoWHhjNE_Q3Kj--dVxCpcAGLiPIwrgHsqbk4EPzeKKbdAHtvxSjotbS0RrNXvnWWnyxCEKqPcx1NjdTQt8W17-aP4dUQAA1PyAKM3zKXp6GgViYwj4iwAe-xBeHGgUEv81WV5LiAyPGAaOuNjLgSgjxrC7zQv0OKPxJ_26EqYwNBQtYRG68Pvc-Ub9_c',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBZtfnqJB_yh1k2ekyqf7YejrlddyrFdSXMbVI258yBkW3SyH640i6A3hx2jt87YNvRxA30bE0umY9DMBW36lUc2RoRn9gITaTb0Zd-HlWRAqt5lF-mvXSUSE021jRtiBw1JYHu5Z9IHV_3GE0TxyamaJDv-9NPlj_cf2pvIawTT4ClzytTAgOQEge8N6A1bfcX_fCsCU6uIIgicIqeNksjqWCCyPsbcF73g68rzjmg41yqRoWEpY3bAs3WMhXu-bo8DilVI7TrQ-uS'
            ].map((url, i) => (
              <div key={i} style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '0.5rem', 
                border: i === 0 ? '2px solid hsl(var(--primary))' : '1px solid hsl(var(--border))',
                padding: '0.5rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}>
                <img src={url} alt={`View ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span style={{ 
              backgroundColor: 'hsl(var(--primary) / 0.1)', 
              color: 'hsl(var(--primary))', 
              padding: '0.25rem 0.75rem', 
              borderRadius: '9999px', 
              fontSize: '0.75rem', 
              fontWeight: 700,
              textTransform: 'uppercase'
            }}>New Arrival</span>
          </div>
          <h1 style={{ fontSize: '3rem' }}>{product.name}</h1>
          <p style={{ fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))' }}>
            Next-generation audio fidelity with proprietary OrangeFlow™ noise cancellation technology and 48-hour ultra-stable battery life.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', color: 'hsl(var(--primary))' }}>
              {[1,2,3,4,5].map(s => <FiStar key={s} fill={s <= 4 ? "hsl(var(--primary))" : "none"} />)}
            </div>
            <span style={{ fontWeight: 600, color: 'hsl(var(--muted-foreground))' }}>(124 Reviews)</span>
          </div>

          <div style={{ margin: '1rem 0' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{product.price}</div>
            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Or 4 interest-free payments of $75.00 with FlexPay</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Choose Color</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#111', border: '2px solid hsl(var(--primary))', padding: '2px' }}><div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#111' }}></div></button>
              <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'hsl(var(--primary))' }}></button>
              <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#999' }}></button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button 
              onClick={() => addToCart(product)}
              className="btn btn-primary" 
              style={{ flex: 1, padding: '1.25rem', gap: '0.5rem' }}
            >
              <FiPlus /> Add to Cart
            </button>
            <button className="btn btn-outline" style={{ padding: '1rem' }}><FiHeart /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', borderTop: '1px solid hsl(var(--border))', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FiTruck color="hsl(var(--primary))" size={24} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Free Shipping</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FiShield color="hsl(var(--primary))" size={24} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>2-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <section style={{ marginTop: '6rem', backgroundColor: 'hsl(var(--muted))', padding: '4rem 0', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Technical Specifications</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>The SonicBlast Pro X1 is engineered for peak performance and extreme durability. Every component is selected to deliver the ultimate audio experience.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { title: 'Audio Performance', items: [{ l: 'Freq Range', r: '5Hz - 40kHz' }, { l: 'Driver', r: '50mm Titanium' }] },
              { title: 'Connectivity', items: [{ l: 'Bluetooth', r: 'v5.3 LE' }, { l: 'Range', r: '100ft' }] },
              { title: 'Power', items: [{ l: 'Battery', r: '48 Hours' }, { l: 'Fast Charge', r: '10m = 5h' }] },
              { title: 'Build', items: [{ l: 'Weight', r: '280g' }, { l: 'Waterproof', r: 'IPX4' }] },
            ].map((spec, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'hsl(var(--primary))', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem' }}>{spec.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {spec.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{item.l}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{item.r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
