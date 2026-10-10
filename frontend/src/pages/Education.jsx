import { Typography, Row, Col, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { BookOutlined, RightOutlined, BuildOutlined, MedicineBoxOutlined, ExperimentOutlined, HeartOutlined, ToolOutlined, BankOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Education = () => {
  const courses = [
    { 
      title: "Engineering (B.Tech / M.Tech)", 
      desc: "Direct admission assistance into top NBA accredited & Autonomous Engineering institutions.", 
      tag: "Engineering",
      icon: <BuildOutlined style={{ fontSize: 32, color: '#818cf8' }} />,
      gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(79, 70, 229, 0.05) 100%)",
      border: "rgba(99, 102, 241, 0.3)"
    },
    { 
      title: "Medical & Health (MBBS / BDS / MD)", 
      desc: "Comprehensive counseling for NEET qualified students across premier medical universities.", 
      tag: "Healthcare",
      icon: <MedicineBoxOutlined style={{ fontSize: 32, color: '#34d399' }} />,
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)",
      border: "rgba(52, 211, 153, 0.3)"
    },
    { 
      title: "Pharmacy (B.Pharm / Pharm.D)", 
      desc: "Expert placement in top PCI approved pharmaceutical sciences & research institutes.", 
      tag: "Pharma",
      icon: <ExperimentOutlined style={{ fontSize: 32, color: '#f472b6' }} />,
      gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(190, 24, 93, 0.05) 100%)",
      border: "rgba(244, 114, 182, 0.3)"
    },
    { 
      title: "Nursing Sciences (B.Sc / M.Sc)", 
      desc: "Specialized admissions into recognized nursing colleges with guaranteed hospital clinical training.", 
      tag: "Nursing",
      icon: <HeartOutlined style={{ fontSize: 32, color: '#fbbf24' }} />,
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.05) 100%)",
      border: "rgba(251, 191, 36, 0.3)"
    },
    { 
      title: "Polytechnic & Diploma", 
      desc: "Skill-oriented technical diplomas to jumpstart your career right after secondary school.", 
      tag: "Diploma",
      icon: <ToolOutlined style={{ fontSize: 32, color: '#38bdf8' }} />,
      gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(2, 132, 199, 0.05) 100%)",
      border: "rgba(56, 189, 248, 0.3)"
    },
    { 
      title: "Business & Management (BBA / MBA)", 
      desc: "Global exposure & top placement management seats at leading business schools.", 
      tag: "Management",
      icon: <BankOutlined style={{ fontSize: 32, color: '#c084fc' }} />,
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(126, 34, 206, 0.05) 100%)",
      border: "rgba(192, 132, 252, 0.3)"
    },
  ];

  return (
    <div style={{ padding: '80px 24px', maxWidth: 1240, margin: '0 auto', color: '#fff' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(129, 140, 248, 0.3)', color: '#a5b4fc', padding: '6px 18px', borderRadius: 50, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          <BookOutlined /> Academic Excellence
        </span>
        <Title level={1} style={{ color: '#fff', fontSize: '3rem', fontWeight: 800, marginTop: 16, marginBottom: 16 }}>
          Educational Consultancy & Admissions
        </Title>
        <Paragraph style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
          We bridge the gap between ambitious students and India's premier educational institutions with 100% transparent guidance.
        </Paragraph>
      </motion.div>

      <Row gutter={[32, 32]} align="stretch">
        {courses.map((course, index) => (
          <Col xs={24} sm={12} md={8} key={index} style={{ display: 'flex' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              style={{ width: '100%', display: 'flex' }}
            >
              <Card
                style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  backdropFilter: 'blur(20px)', 
                  border: `1px solid ${course.border}`, 
                  borderRadius: 24, 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                bodyStyle={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: course.gradient, border: `1px solid ${course.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {course.icon}
                    </div>
                    <span style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#94a3b8', padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700 }}>
                      {course.tag}
                    </span>
                  </div>

                  <Title level={4} style={{ color: '#fff', marginBottom: 12, fontSize: '1.25rem', lineHeight: 1.3 }}>
                    {course.title}
                  </Title>
                  
                  <Paragraph style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 28 }}>
                    {course.desc}
                  </Paragraph>
                </div>

                <Button type="primary" block style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', border: 'none', borderRadius: 12, height: 46, fontWeight: 700, fontSize: '0.95rem' }}>
                  Apply For Admission <RightOutlined />
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Education;


