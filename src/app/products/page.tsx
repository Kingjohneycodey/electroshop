'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FiChevronLeft, FiChevronRight, FiStar, FiPlus } from 'react-icons/fi';

export default function ProductsPage() {
  const { addToCart } = useCart();

  const products = [
    { 
      name: 'UltraBook Pro X1', 
      series: 'NEURON SERIES', 
      price: '$1,499.00', 
      rating: '4.9 (124 reviews)', 
      tag: 'New',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCfl-7UZyUyMz8zTCWEO4ED6CkmnTE24hJwYUYpOHEXuFF7r_qITIK4GnCQBhXRl3v4EsHwJtOGh-To3nhutszfcYOY1ibHd0AytIt1IUJQNZsyl_MSdmBe--TyVk1OsgCWu-iQT8qrgtpLOlfRD_DY5gP8BBpnczKxHn1HC_cS56tiUC4iresHmc_0APzu_TEPVBL_DtV1BhEqTtHrvipLq1lo90uGVtso6_56w-gCk3Rfpxvq0VNMnMmrxHOKYy_Kv6wdZSH37p7' 
    },
    { 
      name: 'Titan Workstation', 
      series: 'TITAN SERIES', 
      price: '$2,899.00', 
      rating: '4.8 (89 reviews)', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvsiOq0Buh6PnqXW4h2XwuUK7Cfx8SNQob5ZcXTUlgSJHJ-adyyM32Fit4l34n1_HgM5NM292abfq5Ja5IiWCjdHWynHUpolAeKLnQmAUHHRLM6ULvXrCDk7amgzF2F5IPfHg7Kz0NW07pykOP-msnfIYE6Vn0RohGJnGLq8M3agR36Ig62NBh1PWxxl_lFIsLFHXXn8hH-WIArzyMTkuppBUqQIUg3MllayV3VadbxoyiGfXoFs8MHIJ0616sVNyeYF2DTidBN71A' 
    },
    { 
      name: 'Curved UltraWide 34"', 
      series: 'DISPLAY SERIES', 
      price: '$749.00', 
      oldPrice: '$899.00', 
      rating: '5.0 (202 reviews)', 
      tag: 'Sale', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZOyRanx8Pk_Qt3gxAEVLgIBBD_6zBPdyLoSavwZQFGOesFpQyaSMwchkmQr9p4Qt4-QeAccTLfXQFbgcXtjAYL0ZsAx3Cy7FFBGAnvkhVAAuD6S6eAfsnZ0a1tiVsGm0aQLW0rcI2IPc1_aHPcV8GFbE90IbfydYrk8UiEprBJRsU5ae58bVr5AGPX9MhlEh02G5nELDFxY1cHi9QVO-6d99JmSbAQP1ZS9oL70sggkNKEIJhhE6LzXD_r1vDIfSpsHfEm30vXoHk' 
    },
    { 
      name: 'Pulse Watch S3', 
      series: 'WEARABLES', 
      price: '$349.00', 
      rating: '4.7 (312 reviews)', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO7BGaB0lFKVmXh7VfahqC4UlG449_ayYC9GnVZV6uV4RHxx_yj9al6IjcuUBV3g0gkiNqw2H2714XPez992cLhcCsbnTVcqWq5MGjtENLdXiw8yQUdzeQXSPNoG6k9zxw7Tazos669UBAumvXp39w6pouCQfQlDnXJlMyKDQv7uJohroSYVUwKXQSzZO-HuSkhUaZksZN778mCnF13RVPEzUz_fAU9KQanpBV6j6IQbxfkZt2FqE2bHoCSyDhNY2uI1wcvAw8TY4v' 
    },
    { 
      name: 'Acoustic Pro', 
      series: 'AUDIO GEAR', 
      price: '$299.00', 
      rating: '4.9 (451 reviews)', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwqvZ6BlMvN-qyODp-R4NvQvT3b-zQureNnsl2CVwQZgSGeapV0GR3WVejI4Zgm19TFutsrF_i72fQrmEC7HZRLq9Hmr7uv4e1FPQmZaVHMRNjRxtultyP-bEKDZgWLvTNezjWBL_FqkL9paRqkLBQAuwx_pnlbboEzLqeUE2x9XXgiov9bVhkFDtBgf8fSjLmJqEuiEQ61SaGPuTrIkt8kHMMg90c0Q9lQLZwlZbkhYDp1Zf7PRd0S18iQo_22GtsROamPCXZefm' 
    },
    { 
      name: 'Zenith Phone 15', 
      series: 'SMARTPHONES', 
      price: '$999.00', 
      rating: '4.8 (823 reviews)', 
      tag: 'Eco', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS7K_u4pEACvZvRrbDRP2CA3SnTJIdEsT_z8e7aYeWTzl22WL-GyEbfeSI_P11IXTJ0oNe2KN9ijmeiRsDbGSLcbwgiY5TYIUIoUjybUS-aytmq7vJJo13v0wpEOQospuwXfseWiL4sPQTZKP6bk-6qwM73kiYkgaPEHF0qtGt31KBat3-YVh-Hp_ktZaaWWrl9PJXjVi7LP76zW8IoMOiCla5RTK6Ax3Jocs2zTy1W8WgdORrvp-ovL2c1dVu-9kZ_SVb76yDyky_' 
    },
  ];

  return (
    <div className="container section fade-in">
      <div className="products-layout" style={{ display: 'flex', gap: '3rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '280px', flexShrink: 0 }}>
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <section>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Category</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Laptops & Computers', 'Smartphones', 'Audio Gear', 'Wearables'].map((cat, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', color: 'hsl(var(--muted-foreground))' }}>
                    <input type="checkbox" defaultChecked={i === 0} style={{ width: '18px', height: '18px', accentColor: 'hsl(var(--primary))' }} />
                    {cat}
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Price Range</h3>
              <input type="range" min="0" max="5000" style={{ width: '100%', accentColor: 'hsl(var(--primary))' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                <span>$0</span>
                <span>$5000+</span>
              </div>
            </section>

            <section>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Rating</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'hsl(var(--muted-foreground))' }}>
                  <FiStar fill="hsl(var(--primary))" color="hsl(var(--primary))" />
                  <FiStar fill="hsl(var(--primary))" color="hsl(var(--primary))" />
                  <FiStar fill="hsl(var(--primary))" color="hsl(var(--primary))" />
                  <FiStar fill="hsl(var(--primary))" color="hsl(var(--primary))" />
                  <FiStar />
                  <span style={{ marginLeft: '0.5rem' }}>& Up</span>
                </button>
              </div>
            </section>
          </div>
        </aside>

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid hsl(var(--border))' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Laptops & Computers <span style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: 400, marginLeft: '0.5rem' }}>(128 items)</span></h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sort by:</span>
              <select style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))' }}>
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-3">
            {products.map((p, i) => (
              <div key={i} className="product-card" style={{
                backgroundColor: 'hsl(var(--card))',
                padding: '1.5rem',
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                <Link href="/products/1">
                  <div style={{ aspectRatio: '1', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </Link>
                {p.tag && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '2.5rem', 
                    left: '2.5rem', 
                    backgroundColor: p.tag === 'Sale' ? 'hsl(var(--destructive) / 0.1)' : 'hsl(var(--primary) / 0.1)', 
                    color: p.tag === 'Sale' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700 
                  }}>{p.tag}</span>
                )}
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.series}</p>
                <Link href="/products/1">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{p.name}</h3>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem', color: 'hsl(var(--primary))', fontSize: '0.875rem' }}>
                  <FiStar fill="hsl(var(--primary))" />
                  <span style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>{p.rating}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    {p.oldPrice && <span style={{ fontSize: '0.875rem', textDecoration: 'line-through', color: 'hsl(var(--muted-foreground))', marginRight: '0.5rem' }}>{p.oldPrice}</span>}
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{p.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(p)}
                    className="btn btn-primary" 
                    style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px' }}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style={{ alignSelf: 'center', padding: '0 0.5rem' }}>...</span>
            <button className="page-btn">12</button>
          </div>
        </div>
      </div>
    </div>
  );
}
