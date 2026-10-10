import { Layout, Menu, Button } from 'antd';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { PhoneOutlined, WhatsAppOutlined, CompassOutlined } from '@ant-design/icons';
import './MainLayout.css';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className="main-layout">
      <Header className="header">
        <div className="logo-container" onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.png" alt="Sri Vaibhav Logo" style={{ height: 48, objectFit: 'contain' }} />
          <h2 className="logo-text" style={{ fontSize: '1.25rem', margin: 0, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Sri Vaibhav Matrimony & Events
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          className="menu"
        >
          <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/matrimony"><Link to="/matrimony">Matrimony</Link></Menu.Item>
          <Menu.Item key="/education"><Link to="/education">Education</Link></Menu.Item>
          <Menu.Item key="/events"><Link to="/events">Events</Link></Menu.Item>
          <Menu.Item key="/gallery"><Link to="/gallery">Gallery</Link></Menu.Item>
          <Menu.Item key="/contact"><Link to="/contact">Contact</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>
      <Footer className="footer" style={{ background: '#080512', borderTop: '1px solid rgba(251, 191, 36, 0.15)', padding: '40px 24px', color: '#94a3b8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <img src="/logo.png" alt="Sri Vaibhav" style={{ height: 60, marginBottom: 12, objectFit: 'contain' }} />
          <h3 style={{ color: '#f8fafc', margin: '0 0 6px 0', fontSize: '1.3rem' }}>Sri Vaibhav Matrimony & Events</h3>
          <p style={{ color: '#fbbf24', fontWeight: 600, margin: '0 0 12px 0' }}>పరిచయం మా వంతు - పరిశీలన మీ వంతు | ALL CASTE MARRIAGE BUREAU</p>
          <p style={{ margin: '0 0 6px 0', fontSize: '0.95rem', color: '#cbd5e1' }}>
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Prop: SURYA</span> &nbsp;|&nbsp; 
            <strong>Cell:</strong> <a href="tel:+919347877674" style={{ color: '#60a5fa' }}>9347877674</a>, <a href="tel:+917330977674" style={{ color: '#60a5fa' }}>7330977674</a>
          </p>
          <p style={{ margin: '0 0 16px 0', fontSize: '0.9rem', color: '#94a3b8' }}>
            📍 # D.No. 11/218, MEDA Petrol Bunk back side, Sai Nagar Zero Cross, Ananthapuramu.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Sri Vaibhav Matrimony & Events. All rights reserved.
          </div>
        </div>
      </Footer>
      
      <div className="floating-buttons">
        <Button type="primary" shape="circle" icon={<PhoneOutlined style={{ fontSize: 20 }} />} size="large" className="float-btn call-btn" href="tel:+919347877674" />
        <Button type="primary" shape="circle" icon={<WhatsAppOutlined style={{ fontSize: 22 }} />} size="large" className="float-btn wa-btn" href="https://wa.me/919347877674" target="_blank" />
      </div>
    </Layout>
  );
};

export default MainLayout;

