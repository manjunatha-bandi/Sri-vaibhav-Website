import { Typography, Row, Col, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { FireOutlined, CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Events = () => {
  const eventsList = [
    { title: "Dance & Sangeet Choreography", desc: "Professional celebrity choreographers for weddings & corporate galas.", img: "/events_card.png", tag: "Sangeet & Dance" },
    { title: "High-Energy DJ & Concert Audio", desc: "Top concert Sound systems, intelligent laser lights, and celebrity DJs.", img: "/events_card.png", tag: "Concert & DJ" },
    { title: "Cinematic Photography & Film", desc: "4K Drone videography, candid wedding cinema, and pre-wedding shoots.", img: "/events_card.png", tag: "Cinematography" },
    { title: "Theme Floral & Stage Decoration", desc: "Royal mandap floral arrangements, LED visual walls & ambient lighting.", img: "/events_card.png", tag: "Luxury Decor" },
    { title: "Corporate Summits & Award Galas", desc: "End-to-end event production, stage management & VIP hospitality.", img: "/events_card.png", tag: "Corporate" },
    { title: "Birthday & Private Celebrations", desc: "Custom theme decor, balloon arches, live entertainment & catering.", img: "/events_card.png", tag: "Parties" },
  ];

  return (
    <div style={{ padding: '80px 24px', maxWidth: 1240, margin: '0 auto', color: '#fff' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(251, 191, 36, 0.3)', color: '#fbbf24', padding: '6px 18px', borderRadius: 50, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          <FireOutlined /> Unforgettable Spectacles
        </span>
        <Title level={1} style={{ color: '#fff', fontSize: '3rem', fontWeight: 800, marginTop: 16, marginBottom: 16 }}>
          Luxury Event Management
        </Title>
        <Paragraph style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
          From intimate celebrations to grand stadium concerts, we bring your vision to life with flawless execution.
        </Paragraph>
      </motion.div>

      <Row gutter={[32, 32]}>
        {eventsList.map((event, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card
                hoverable
                style={{ 
                  background: 'rgba(30, 41, 59, 0.4)', 
                  backdropFilter: 'blur(16px)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: 20, 
                  overflow: 'hidden' 
                }}
                cover={
                  <div style={{ height: 230, overflow: 'hidden', position: 'relative' }}>
                    <img alt={event.title} src={event.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(11, 15, 25, 0.8)', backdropFilter: 'blur(8px)', color: '#fbbf24', padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700 }}>
                      {event.tag}
                    </div>
                  </div>
                }
              >
                <Title level={4} style={{ color: '#fff', marginBottom: 8 }}>{event.title}</Title>
                <Paragraph style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 20 }}>{event.desc}</Paragraph>
                <Button type="primary" block style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', border: 'none', borderRadius: 10, height: 42, fontWeight: 700 }}>
                  Book Event Services <ArrowRightOutlined />
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Events;

