'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FiArrowRight, FiZap, FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';
import { 
  LuLaptop, 
  LuSmartphone, 
  LuHeadphones, 
  LuGamepad2, 
  LuWatch, 
  LuSettings2 
} from "react-icons/lu";

export default function HomePage() {
  const { addToCart } = useCart();

  const categories = [
    { icon: <LuLaptop size={32} />, name: 'Laptops' },
    { icon: <LuSmartphone size={32} />, name: 'Phones' },
    { icon: <LuHeadphones size={32} />, name: 'Audio' },
    { icon: <LuGamepad2 size={32} />, name: 'Gaming' },
    { icon: <LuWatch size={32} />, name: 'Watches' },
    { icon: <LuSettings2 size={32} />, name: 'Accessories' },
  ];

  const trendingProducts = [
    { 
      name: 'Nexus Watch S8', 
      price: '$349.00', 
      cat: 'Watches', 
      tag: 'New', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA48dP5KfNYKaYq759DIaQ-79xIYnoSpDGu-r2Zk63YgfqQM9coJ8mNvUWmxeD2m_6cUVRp7VZInt5eCbg2JmnMiM5-ik6WP7mhMQE-jwoGxanULz9r_c6V4Qm1Vc4LuGCNbanDxdpF8uqw1hTnLEEPcs-cnQCVjhNREcuZQAq3xPsCCGwtbXxqBiHJBx-kvfAVlTG-6OHS7bWeil1GJ-8rlgmSboj_7dDIaECbOV8oz0szQWTo7Dmp40ENOggA1ar3EMbSarJQXxjZ' 
    },
    { 
      name: 'Lumina Pro 15', 
      price: '$999.00', 
      cat: 'Phones', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsV_toTKInEFgzyZLS8RkVjTAo6eQJr90qWqW_Q8-KQwEmr5tuUVa-56CBj-UBOOCud9rkE8WgrwDhHJcyYOhaWmuDg8eMp1b1RNPCeQDH4rAVjAwVPTSU8qwOZTB7Cp0NKFJlHRvoRmebPUnuwWgAbKcJK3ZG8KqTDDGmodpP3LsHbuEXYBjLcA643_UMVOy1gdeK6CcEAr3lK-2Ds-7S4maF2Z4qH9ZwdM0ZphjytHe38N0b_UoW6umMad1Z6KAqS498OjTCJV' 
    },
    { 
      name: 'Horizon Curved 34', 
      price: '$749.00', 
      cat: 'Monitors', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYjPhuN_rkbpKdE4DQsiJf-eFPm1vdIzXndmDl7llYTT-MTOptn2yPEsCVUJgcYyL3mzUNlNg7A5hk8R1GB2Dmz4e9m9uQBhB3laj7ESpCwG9rP1PnDJ90bFRhMcEsn-eayMdLoB3LPhOrqCqJNw-R1PtZRb8y1fAsaMn97xq-bK366QMnHQi2GhlFLNuZesJfCJJ88FMwy7-0F9tsQp1d7rFsN7SCQFEGw-_X-yvsycrfR8QCJ9BIA14QlfcntKinnqHRV1q_Qr-h' 
    },
    { 
      name: 'Apex Tab 12', 
      price: '$599.00', 
      cat: 'Tablets', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgTkvuMRr2IkR7VDxgpByppGMvFlqm6nhUh42kTdj-BqADxOknerTsR1Vj7YmvpQzwwmEOxXBLjDXZRIGUb5zmu-AdonPGRRwRSuRHs_4LNSDuCTzE0B0rvU3d_7vI3RbsGhb_T0ChA-0fETcR_Pj7QGlKKeA8MLsQpOkRIoXsst-ThCcBSHcjLB6zVmovd8hDkY2NW7EnFyJrOf-zPiKcYjGUmsz81rayRDxLB8-O6N1vIPHvdz4krAk-8QFBZ6VCK1q4pD7IsG23' 
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="section bg-white">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.25rem 0.75rem', 
              backgroundColor: 'hsl(var(--primary) / 0.1)', 
              color: 'hsl(var(--primary))', 
              borderRadius: '9999px', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              Featured Release
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              HyperShift Pro <br />
              <span style={{ color: 'hsl(var(--primary))' }}>Wireless Headphones</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', marginBottom: '2rem', maxWidth: '500px' }}>
              Experience crystal-clear audio with our latest noise-canceling technology and 60-hour battery life.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => addToCart({ name: 'HyperShift Pro Wireless Headphones', price: '$299.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdt4tVW8xXuAc8GusBzaE2l7fzWixABFPzJjed9JxJiyyZJGvHNxJvMn9cZO9fdRFlAM8eFd-Vxvy22hBMde5posnwRM6emgZC1q_xdjc1yDQ4vjlQmap0jMEQw3K8QTR3RKAqddEAZXu4DZdr1uzwOn-Yc-XpYNil6S4STCm9vSGAdEV6YQkR-1W63zfTkScdUScdfcz2yrreF9iQoUIvQHW9cRpQjRQ8kIop-yvi6oGo_8oalWRdv3Edy-IBEC3pvDliwaYlc-yg' })}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
              <Link href="/products/1" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ 
              backgroundColor: 'hsl(var(--muted))', 
              borderRadius: 'var(--radius)', 
              overflow: 'hidden', 
              aspectRatio: '1',
              position: 'relative',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.2)'
            }}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdt4tVW8xXuAc8GusBzaE2l7fzWixABFPzJjed9JxJiyyZJGvHNxJvMn9cZO9fdRFlAM8eFd-Vxvy22hBMde5posnwRM6emgZC1q_xdjc1yDQ4vjlQmap0jMEQw3K8QTR3RKAqddEAZXu4DZdr1uzwOn-Yc-XpYNil6S4STCm9vSGAdEV6YQkR-1W63zfTkScdUScdfcz2yrreF9iQoUIvQHW9cRpQjRQ8kIop-yvi6oGo_8oalWRdv3Edy-IBEC3pvDliwaYlc-yg" 
                alt="HyperShift Pro Wireless Headphones"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem' }}>Explore Categories</h2>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>Premium gear for every professional need.</p>
            </div>
            <Link href="/products" style={{ color: 'hsl(var(--primary))', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View All <FiArrowRight />
            </Link>
          </div>
          
          <div className="grid grid-6">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                backgroundColor: 'hsl(var(--card))',
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }} className="category-card">
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'hsl(var(--primary) / 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: 'hsl(var(--primary))'
                }}>
                  {cat.icon}
                </div>
                <span style={{ fontWeight: 600 }}>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="section bg-white">
        <div className="container">
          <div style={{
            backgroundColor: 'hsl(var(--foreground))',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            color: 'hsl(var(--background))',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)'
          }}>
            <div style={{ flex: 1, padding: '4rem', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--primary))', marginBottom: '1.5rem' }}>
                <FiZap />
                <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Deal of the Day</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>Quantum V-Core <br />Gaming Laptop</h2>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.125rem', marginBottom: '2rem' }}>
                The world's most powerful processor in a 14-inch frame. Exclusive price for the next 24 hours.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>12</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>Hours</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>45</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>Mins</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>28</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>Secs</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', textDecoration: 'line-through', opacity: 0.6 }}>$2,499.00</div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>$1,899.00</div>
                </div>
                <button 
                  onClick={() => addToCart({ name: 'Quantum V-Core Gaming Laptop', price: '$1,899.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgstMOY-DqScqWXJwxtcEpf4Q7tGWKypfzwWljqAKu5SfTx7IO-XCZlmjStESb86EbXc6kBkDdmNJ_nOJOF9lgYwiDoIJ8Gjfy2nm1TatA_sSS6CDnMbcP9BGUpIGknODRoZWclrvLb6yf6YXYfdmD5oN6_e8nhjizD2_VdeYxrSlX6xYs07BJOKH4YFdQuuejDd4uHQmzldeC_Lzye7nXlme79aORmS71AVSaWpHN_ld9wOpVFFfg13vYo8IDSLoQatBpIJ-8IRPS' })}
                  className="btn btn-primary"
                >
                  Claim Deal
                </button>
              </div>
            </div>
            <div style={{ flex: 1, minHeight: '400px', position: 'relative' }}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgstMOY-DqScqWXJwxtcEpf4Q7tGWKypfzwWljqAKu5SfTx7IO-XCZlmjStESb86EbXc6kBkDdmNJ_nOJOF9lgYwiDoIJ8Gjfy2nm1TatA_sSS6CDnMbcP9BGUpIGknODRoZWclrvLb6yf6YXYfdmD5oN6_e8nhjizD2_VdeYxrSlX6xYs07BJOKH4YFdQuuejDd4uHQmzldeC_Lzye7nXlme79aORmS71AVSaWpHN_ld9wOpVFFfg13vYo8IDSLoQatBpIJ-8IRPS" 
                alt="Quantum V-Core Gaming Laptop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="section" style={{ backgroundColor: 'hsl(var(--muted))' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem' }}>Trending Products</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid hsl(var(--border))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiChevronLeft /></button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid hsl(var(--border))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiChevronRight /></button>
            </div>
          </div>

          <div className="grid grid-4">
            {trendingProducts.map((p, i) => (
              <div key={i} className="product-card" style={{
                backgroundColor: 'hsl(var(--card))',
                padding: '1.5rem',
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}>
                <Link href="/products/1">
                  <div style={{ position: 'relative', aspectRatio: '1', backgroundColor: '#f5f5f5', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {p.tag && <span style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>{p.tag}</span>}
                  </div>
                </Link>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{p.cat}</p>
                <Link href="/products/1">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{p.name}</h3>
                </Link>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{p.price}</span>
                  <button 
                    onClick={() => addToCart(p)}
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      backgroundColor: 'hsl(var(--foreground))', 
                      color: 'hsl(var(--background))', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Stay Ahead of the Curve</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Join 50,000+ tech enthusiasts and get the latest gadget drops and exclusive discounts delivered to your inbox.
          </p>
          <form style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: 'var(--radius)', border: 'none', fontSize: '1rem' }}
            />
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'hsl(var(--foreground))', color: 'hsl(var(--background))' }}>Join Now</button>
          </form>
        </div>
      </section>
    </div>
  );
}
