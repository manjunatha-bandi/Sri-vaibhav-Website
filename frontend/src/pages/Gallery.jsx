import { Typography, Row, Col, Image } from 'antd';
import { motion } from 'framer-motion';
import { CameraOutlined } from '@ant-design/icons';

import { useState, useEffect } from 'react';
import api from '../services/api';

const { Title, Paragraph } = Typography;

const defaultGalleryImages = [
  { src: "/hero_banner.png", title: "Grand Celebration Stage" },
  { src: "/matrimony_card.png", title: "Royal Wedding Union" },
  { src: "/events_card.png", title: "Sangeet Dance Performance" },
  { src: "/edu_eng.png", title: "Engineering Campus" },
  { src: "/edu_med.png", title: "Medical Research Institute" },
  { src: "/edu_card.png", title: "Graduation Convocation" },
  { src: "/events_card.png", title: "Corporate Award Night" },
  { src: "/hero_banner.png", title: "Theme Event Decoration" },
];

const Gallery = () => {
  const [images, setImages] = useState(defaultGalleryImages);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get('/media/category/Gallery');
        if (res.data && res.data.length > 0) {
          const apiImages = res.data.map(item => ({
            src: item.filePath || `/api/media/download/${item.fileName}`,
            title: item.title || 'SriVaibhav Gallery'
          }));
          setImages([...apiImages, ...defaultGalleryImages]);
        }
      } catch (err) {
        // Use default photos if backend is offline
      }
    };
    fetchGallery();
  }, []);
  return (
    <div style={{ padding: '80px 24px', maxWidth: 1240, margin: '0 auto', color: '#fff' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', color: '#34d399', padding: '6px 18px', borderRadius: 50, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          <CameraOutlined /> Visual Portfolio
        </span>
        <Title level={1} style={{ color: '#fff', fontSize: '3rem', fontWeight: 800, marginTop: 16, marginBottom: 16 }}>
          Moments of Triumph & Joy
        </Title>
        <Paragraph style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>
          Explore our visual showcase of successful admissions, royal weddings, and vibrant events.
        </Paragraph>
      </motion.div>

      <Image.PreviewGroup>
        <Row gutter={[24, 24]}>
          {images.map((item, i) => (
            <Col xs={24} sm={12} md={6} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(30, 41, 59, 0.4)' }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    style={{ width: '100%', height: 220, objectFit: 'cover', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ padding: '14px 16px', background: 'rgba(15, 23, 42, 0.8)' }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>{item.title}</span>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Image.PreviewGroup>
    </div>
  );
};

export default Gallery;

