import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

/**
 * Lightbox — fullscreen image viewer for blog memory photos.
 * Props:
 *   images       — array of { image, title }
 *   currentIndex — active image index
 *   onClose      — close handler
 *   onPrev       — go to previous
 *   onNext       — go to next
 *   onSelect     — go to specific index
 */
const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext, onSelect }) => {

  /* Keyboard navigation */
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose();
    if (e.key === 'ArrowLeft')  onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!images?.length) return null;
  const item = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="lb-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
      >
        {/* ── Counter ── */}
        <div className="lb-counter" onClick={(e) => e.stopPropagation()}>
          <span className="lb-counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="lb-counter-sep">/</span>
          <span className="lb-counter-total">{String(images.length).padStart(2, '0')}</span>
        </div>

        {/* ── Close ── */}
        <button className="lb-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {/* ── Prev ── */}
        <button
          className="lb-nav lb-prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
        >
          <ChevronLeft size={26} />
        </button>

        {/* ── Image ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="lb-img-wrapper"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={item.image} alt={item.title || 'Travel memory'} />

            {/* Caption */}
            {item.title && (
              <div className="lb-caption">
                <span className="lb-caption-num">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="lb-caption-divider" />
                <span className="lb-caption-title">{item.title}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Next ── */}
        <button
          className="lb-nav lb-next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
        >
          <ChevronRight size={26} />
        </button>

        {/* ── Thumbnail Strip ── */}
        <div className="lb-strip" onClick={(e) => e.stopPropagation()}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`lb-strip-thumb ${i === currentIndex ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); if (onSelect) onSelect(i); }}
              style={{ backgroundImage: `url(${img.image})` }}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
