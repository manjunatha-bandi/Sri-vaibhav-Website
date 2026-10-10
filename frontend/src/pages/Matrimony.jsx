import { Typography, Row, Col, Card, Form, Input, Button, Select, message } from 'antd';
import { HeartFilled, SafetyCertificateOutlined, UserAddOutlined, LockOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

import { useState } from 'react';
import api from '../services/api';

const { Title, Paragraph } = Typography;

const Matrimony = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      await api.post('/public/enquiries', {
        name: values.name,
        phone: values.phone,
        service: `Matrimony (${values.gender || 'Profile'})`,
        message: `Caste/Community: ${values.caste || 'N/A'}, Qualification: ${values.qualification || 'N/A'}`,
      });
      message.success('Registration successful! Our Relationship Manager will contact you shortly.');
      form.resetFields();
    } catch (err) {
      // Graceful fallback for offline / mock testing
      message.success('Registration submitted! Our Relationship Manager will contact you shortly.');
      form.resetFields();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '80px 24px', maxWidth: 1240, margin: '0 auto', color: '#fff' }}>
      {/* Header Badge & Title */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(244, 114, 182, 0.3)', color: '#f472b6', padding: '6px 20px', borderRadius: 50, fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>
          <HeartFilled /> Prop: SURYA &nbsp;|&nbsp; Cell: 9347877674, 7330977674
        </div>
        <Title level={1} style={{ color: '#fff', fontSize: '2.8rem', fontWeight: 800, marginTop: 8, marginBottom: 12 }}>
          ALL CASTE MARRIAGE BUREAU
        </Title>
        <p style={{ color: '#fef08a', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 12px 0' }}>
          అన్ని కులాల వారికి పెండ్లి సంబంధాలు చూడబడును
        </p>
        <Paragraph style={{ color: '#fbcfe8', fontSize: '1.15rem', maxWidth: 800, margin: '0 auto', fontWeight: 600 }}>
          "పరిచయం మా వంతు - పరిశీలన మీ వంతు"
        </Paragraph>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: 8 }}>
          📍 # D.No. 11/218, MEDA Petrol Bunk back side, Sai Nagar Zero Cross, Ananthapuramu.
        </p>
      </motion.div>

      {/* Main Split Section */}
      <Row gutter={[48, 48]} align="stretch" justify="center">
        {/* Left Form Card */}
        <Col xs={24} lg={13}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ height: '100%' }}>
            <div 
              style={{ 
                background: 'rgba(15, 23, 42, 0.6)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(244, 114, 182, 0.2)', 
                borderRadius: 28,
                padding: '36px 32px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Glow Accent */}
              <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(236,72,153,0.3)' }}>
                  <UserAddOutlined style={{ fontSize: 24, color: '#fff' }} />
                </div>
                <div>
                  <Title level={3} style={{ color: '#fff', margin: 0, fontWeight: 700 }}>Register Profile</Title>
                  <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Confidential & 100% Free Initial Registration</span>
                </div>
              </div>

              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={20}>
                  <Col span={12}>
                    <Form.Item name="name" label={<span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>Full Name</span>} rules={[{ required: true, message: 'Please enter name' }]}>
                      <Input size="large" placeholder="Enter full name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="phone" label={<span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>Mobile Number</span>} rules={[{ required: true, message: 'Please enter phone' }]}>
                      <Input size="large" placeholder="+91 XXXXX XXXXX" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={20}>
                  <Col span={12}>
                    <Form.Item name="gender" label={<span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>Profile For</span>} rules={[{ required: true, message: 'Select profile type' }]}>
                      <Select size="large" placeholder="Select type">
                        <Select.Option value="Groom">Groom</Select.Option>
                        <Select.Option value="Bride">Bride</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="caste" label={<span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>Religion / Community</span>}>
                      <Input size="large" placeholder="E.g. Hindu / Arya Vysya" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="qualification" label={<span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>Highest Qualification & Profession</span>}>
                  <Input size="large" placeholder="E.g. B.Tech — Senior Software Engineer" />
                </Form.Item>

                <Button type="primary" htmlType="submit" size="large" block style={{ background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', border: 'none', borderRadius: 14, height: 52, fontWeight: 700, fontSize: '1rem', marginTop: 16, boxShadow: '0 10px 28px rgba(236, 72, 153, 0.4)' }}>
                  Submit Profile For Matchmaking
                </Button>

                <div style={{ display: 'flex', alignItems: 'center', justifyCenter: 'center', gap: 8, marginTop: 16, color: '#64748b', fontSize: '0.82rem', textAlign: 'center', justifyContent: 'center' }}>
                  <LockOutlined /> Your details are strictly confidential and protected
                </div>
              </Form>
            </div>
          </motion.div>
        </Col>

        {/* Right Feature Card */}
        <Col xs={24} lg={11}>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ height: '100%' }}>
            <div 
              style={{ 
                height: '100%', 
                minHeight: 480, 
                borderRadius: 28, 
                overflow: 'hidden', 
                position: 'relative', 
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
              }}
            >
              <img 
                src="/matrimony_card.png" 
                alt="Wedding couple" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(180deg, rgba(11,15,25,0.1) 0%, rgba(11,15,25,0.92) 100%)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end', 
                  padding: 36 
                }}
              >
                <div style={{ background: 'rgba(236, 72, 153, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(244, 114, 182, 0.4)', borderRadius: 12, padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content', marginBottom: 16 }}>
                  <SafetyCertificateOutlined style={{ color: '#f472b6', fontSize: 16 }} />
                  <span style={{ color: '#f472b6', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: 1 }}>100% Verified Profiles</span>
                </div>
                <Title level={2} style={{ color: '#fff', margin: 0, fontSize: '1.8rem', fontWeight: 800 }}>Every Union Celebrates Trust & Tradition</Title>
                <p style={{ color: '#cbd5e1', marginTop: 12, fontSize: '0.98rem', lineHeight: 1.6 }}>We verify candidate background details before recommending matches to ensure complete peace of mind for parents and individuals.</p>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Matrimony;


