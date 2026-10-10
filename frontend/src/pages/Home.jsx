import { Typography, Row, Col, Card, Button, Statistic } from 'antd';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneOutlined, WhatsAppOutlined, ArrowRightOutlined, StarFilled, SafetyCertificateOutlined, TeamOutlined, CustomerServiceOutlined, TrophyOutlined } from '@ant-design/icons';
import './Home.css';

const { Title, Paragraph } = Typography;

const AnimatedCounter = ({ end, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="counter-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Statistic 
          value={inView ? end : 0} 
          suffix="+" 
          valueStyle={{ color: '#818cf8', fontSize: '2.8rem', fontWeight: 800, fontFamily: 'Plus Jakarta Sans' }} 
        />
        <p style={{ color: '#94a3b8', marginTop: 8, fontSize: '0.95rem', fontWeight: 500 }}>{label}</p>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  
  const services = [
    { 
      image: '/edu_card.png', 
      title: 'Education Consultancy', 
      desc: 'Expert academic counseling and admissions guidance for Engineering, Medical, Pharmacy & Business programs.', 
      path: '/education',
      tag: 'Academic Guidance'
    },
    { 
      image: '/matrimony_card.png', 
      title: 'Matrimonial Services', 
      desc: 'Trusted matchmaking bringing compatible souls together with verified profiles and privacy controls.', 
      path: '/matrimony',
      tag: 'Verified Matchmaking'
    },
    { 
      image: '/events_card.png', 
      title: 'Event Management', 
      desc: 'Unforgettable celebrations featuring world-class DJ, Dance troupes, professional Photography & luxury Decors.', 
      path: '/events',
      tag: 'Grand Celebrations'
    },
  ];

  const features = [
    { 
      icon: <TrophyOutlined style={{ fontSize: 24, color: '#f59e0b' }} />, 
      bg: 'rgba(245, 158, 11, 0.12)',
      title: 'Prop: SURYA Leadership', 
      telugu: 'వ్యక్తిగత శ్రద్ధ & నమ్మకమైన సేవ',
      desc: 'Direct personalized attention and trusted family guidance from Sri Surya.' 
    },
    { 
      icon: <TeamOutlined style={{ fontSize: 24, color: '#818cf8' }} />, 
      bg: 'rgba(129, 140, 248, 0.12)',
      title: 'All Caste Marriage Bureau', 
      telugu: 'అన్ని కులాల వారికి పెండ్లి సంబంధాలు',
      desc: 'Dedicated matrimonial matching alliances across all communities and castes.' 
    },
    { 
      icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: '#10b981' }} />, 
      bg: 'rgba(16, 185, 129, 0.12)',
      title: 'Verified Profiles & People', 
      telugu: 'ధృవీకరించబడిన ప్రొఫైల్స్ & నిజమైన వ్యక్తులు',
      desc: 'పరిచయం మా వంతు - పరిశీలన మీ వంతు. 100% verified genuine backgrounds.' 
    },
    { 
      icon: <CustomerServiceOutlined style={{ fontSize: 24, color: '#ec4899' }} />, 
      bg: 'rgba(236, 72, 153, 0.12)',
      title: 'Ananthapuramu Office', 
      telugu: 'సాయి నగర్ జీరో క్రాస్, మేడా బంక్ వెనుక',
      desc: '# D.No. 11/218, Sai Nagar Zero Cross, MEDA Petrol Bunk back side, Ananthapuramu.' 
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero-badge"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.35)', color: '#fbbf24', padding: '6px 20px', borderRadius: 50, fontSize: '0.9rem', fontWeight: 700 }}
            >
              <StarFilled style={{ color: '#f59e0b' }} /> Prop: SURYA &nbsp;|&nbsp; Sai Nagar Zero Cross, Ananthapuramu
            </motion.div>
            
            <div style={{ marginTop: 16, marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
              <img src="/logo.png" alt="Sri Vaibhav Logo" style={{ maxHeight: 110, objectFit: 'contain', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))' }} />
            </div>

            <Title className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.2, margin: '12px 0 16px 0' }}>
              <span style={{ color: '#fff' }}>Sri Vaibhav </span>
              <span className="hero-highlight" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Matrimony & Events
              </span>
            </Title>
            
            <p style={{ color: '#fef08a', fontSize: '1.35rem', fontWeight: 700, margin: '8px 0 16px 0', letterSpacing: '0.5px' }}>
              పరిచయం మా వంతు - పరిశీలన మీ వంతు
            </p>

            <div style={{ background: 'rgba(236, 72, 153, 0.2)', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: 12, padding: '8px 20px', display: 'inline-block', marginBottom: 16 }}>
              <span style={{ color: '#f472b6', fontWeight: 800, fontSize: '1rem', letterSpacing: 1 }}>
                ALL CASTE MARRIAGE BUREAU &nbsp;•&nbsp; అన్ని కులాల వారికి పెండ్లి సంబంధాలు చూడబడును
              </span>
            </div>
            
            <Paragraph className="hero-description" style={{ maxWidth: 820, margin: '0 auto 28px auto' }}>
              Located at Sai Nagar Zero Cross, Ananthapuramu. We provide trusted all-caste matrimonial alliances, magnificent event management (Dance, DJ, Photography, Decor), and professional education counseling.
            </Paragraph>
            
            <div className="hero-buttons">
              <Button 
                type="primary" 
                size="large" 
                icon={<PhoneOutlined />} 
                className="hero-primary-btn"
                href="tel:+919347877674"
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', border: 'none', height: 50, fontWeight: 700, fontSize: '1rem', borderRadius: 12 }}
              >
                Call: 9347877674
              </Button>
              <Button 
                size="large" 
                icon={<WhatsAppOutlined style={{ color: '#25d366' }} />}
                className="hero-secondary-btn"
                href="https://wa.me/919347877674" 
                target="_blank"
                style={{ height: 50, fontWeight: 700, fontSize: '1rem', borderRadius: 12 }}
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Official Business Banner Section */}
      <section style={{ padding: '40px 24px', background: '#080512', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 1100, width: '100%', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', border: '2px solid rgba(251, 191, 36, 0.3)' }}>
          <img src="/banner.jpg" alt="Sri Vaibhav Matrimony & Events Official Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </section>

      {/* Counters Section */}
      <section className="counters-section">
        <div className="counters-inner">
          <AnimatedCounter end={5000} label="Students Guided" />
          <AnimatedCounter end={1200} label="Couples Matched" />
          <AnimatedCounter end={800} label="Grand Events Organized" />
          <AnimatedCounter end={15} label="Years of Excellence" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <Title level={2} className="section-title">Our Signature Services</Title>
          <p className="section-subtitle">Delivering world-class experiences backed by integrity and passion</p>
          
          <Row gutter={[32, 32]} justify="center">
            {services.map((svc, i) => (
              <Col xs={24} sm={24} md={8} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="service-card-wrapper"
                >
                  <Card
                    hoverable
                    className="service-glass-card"
                    cover={
                      <div className="service-img-wrapper">
                        <img src={svc.image} alt={svc.title} />
                      </div>
                    }
                    onClick={() => navigate(svc.path)}
                  >
                    <div className="service-card-body">
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1, color: '#818cf8', fontWeight: 700 }}>
                        {svc.tag}
                      </span>
                      <Title level={4} style={{ color: '#fff', marginTop: 6, marginBottom: 12 }}>
                        {svc.title}
                      </Title>
                      <Paragraph style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 20 }}>
                        {svc.desc}
                      </Paragraph>
                      <Button type="link" style={{ padding: 0, color: '#a5b4fc', fontWeight: 600 }}>
                        Explore Service <ArrowRightOutlined />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="container">
          <Title level={2} className="section-title">Why Choose SriVaibhav</Title>
          <p className="section-subtitle">Building relationships built on trust, quality, and commitment</p>
          
          <Row gutter={[24, 24]} align="stretch">
            {features.map((item, i) => (
              <Col xs={24} sm={12} md={6} key={i} style={{ display: 'flex' }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ width: '100%', height: '100%', display: 'flex' }}
                >
                  <Card className="feature-glass-card" style={{ width: '100%' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                      {item.icon}
                    </div>
                    <Title level={5} style={{ color: '#fff', minHeight: 46, display: 'flex', alignItems: 'center', margin: '0 0 8px 0', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>
                      {item.title}
                    </Title>
                    <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600, minHeight: 40, display: 'flex', alignItems: 'center', marginBottom: 10, lineHeight: 1.4 }}>
                      {item.telugu}
                    </div>
                    <Paragraph style={{ color: '#94a3b8', margin: 0, fontSize: '0.84rem', lineHeight: 1.6, flex: 1 }}>
                      {item.desc}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" style={{ maxWidth: 800 }}>
          <Title level={2} style={{ color: '#fff', marginBottom: 16 }}>Ready to Take the Next Step?</Title>
          <Paragraph style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: 36 }}>
            Connect with our dedicated advisors today to discuss your academic aspirations, matrimonial matches, or upcoming event requirements.
          </Paragraph>
          <div style={{ display: 'flex', gap: 16, justifyCenter: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button 
              type="primary" 
              size="large" 
              className="hero-primary-btn"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
            <Button 
              size="large" 
              className="hero-secondary-btn"
              onClick={() => navigate('/gallery')}
            >
              View Our Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

