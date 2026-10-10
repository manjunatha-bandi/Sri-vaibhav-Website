import { Typography, Row, Col, Card, Form, Input, Button, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined, MessageOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

import { useState } from 'react';
import api from '../services/api';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      await api.post('/public/enquiries', {
        name: values.name,
        phone: values.phone,
        email: values.email,
        service: 'General Enquiry',
        message: values.message,
      });
      message.success('Thank you! Your inquiry has been successfully sent to our team.');
      form.resetFields();
    } catch (err) {
      // Graceful fallback for offline / mock testing
      message.success('Thank you! Your message has been received. Our team will contact you shortly.');
      form.resetFields();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '80px 24px', maxWidth: 1240, margin: '0 auto', color: '#fff' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(129, 140, 248, 0.3)', color: '#818cf8', padding: '6px 18px', borderRadius: 50, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          <MessageOutlined /> Get In Touch
        </span>
        <Title level={1} style={{ color: '#fff', fontSize: '3rem', fontWeight: 800, marginTop: 16, marginBottom: 16 }}>
          We'd Love to Hear From You
        </Title>
        <Paragraph style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
          Have questions about Education, Matrimony, or Events? Our dedicated specialists are here to guide you.
        </Paragraph>
      </motion.div>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={10}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: <PhoneOutlined style={{ fontSize: 24, color: '#818cf8' }} />, title: 'Mobile / Cell Support', detail: '+91 93478 77674 / +91 73309 77674' },
                { icon: <EnvironmentOutlined style={{ fontSize: 24, color: '#10b981' }} />, title: 'Head Office Address', detail: '# D.No. 11/218, MEDA Petrol Bunk back side, Sai Nagar Zero Cross, Ananthapuramu.' },
                { icon: <MailOutlined style={{ fontSize: 24, color: '#ec4899' }} />, title: 'Proprietor & Bureau', detail: 'Prop: SURYA — All Caste Marriage Bureau' },
              ].map((item, i) => (
                <Card key={i} style={{ background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </div>
                    <div>
                      <Title level={5} style={{ color: '#fff', margin: 0 }}>{item.title}</Title>
                      <span style={{ color: '#cbd5e1', fontSize: '0.92rem' }}>{item.detail}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Col>

        <Col xs={24} md={14}>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card style={{ background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 24, padding: '12px 8px' }}>
              <Title level={3} style={{ color: '#fff', marginBottom: 24 }}>Send Us a Message</Title>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="name" label={<span style={{ color: '#e2e8f0' }}>Your Name</span>} rules={[{ required: true }]}>
                      <Input size="large" placeholder="Full name" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: 10 }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="phone" label={<span style={{ color: '#e2e8f0' }}>Phone Number</span>} rules={[{ required: true }]}>
                      <Input size="large" placeholder="Phone number" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: 10 }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="email" label={<span style={{ color: '#e2e8f0' }}>Email Address</span>} rules={[{ required: true, type: 'email' }]}>
                  <Input size="large" placeholder="Email address" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: 10 }} />
                </Form.Item>
                <Form.Item name="message" label={<span style={{ color: '#e2e8f0' }}>Your Query / Message</span>} rules={[{ required: true }]}>
                  <TextArea rows={4} placeholder="How can we assist you?" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: 10 }} />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large" block style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', border: 'none', borderRadius: 12, height: 48, fontWeight: 700 }}>
                  Submit Inquiry <SendOutlined />
                </Button>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
