import { rautaStories } from './rautaStories';
import { bhedaStories } from './bhedaStories';
import rautaHero from '../assets/rauta/rauta10.jpg';
import bhedaHero from '../assets/Nuwakot Bhedafarm/bheda0.JPG';
import rautaMusic from '/src/assets/audio/Hindda Hinddai.mp3';

// Placeholder for Kathmandu until we have images
export const ALL_BLOGS = {
  rauta: {
    id: 'rauta',
    title: "Memories of Rauta Hill",
    subtitle: "Udayapur, Nepal | The Peak of Tranquility",
    heroImage: rautaHero,
    musicUrl: rautaMusic,
    stories: rautaStories 
  },
  bhedafarm: {
    id: 'bhedafarm',
    title: "Mist of Bheda Farm",
    subtitle: "Nuwakot, Nepal | The Rolling Meadows",
    heroImage: bhedaHero,
    stories: bhedaStories 
  },
  kathmandu: {
    id: 'kathmandu',
    title: "Vibrance of Kathmandu",
    subtitle: "The Living Goddess & Ancient Squares",
    heroImage: 'https://images.unsplash.com/photo-1541411194564-c2b3e39f1c83?auto=format&fit=crop&q=80&w=1200',
    stories: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1541411194564-c2b3e39f1c83',
        title: "Basantapur Morning",
        date: "07:00 AM",
        description: "The sound of pigeons' wings over the ancient temples of Kathmandu Durbar Square is the city's unique alarm clock."
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1524314113005-0431804f3299',
        title: "Pashupatinath Evening",
        date: "06:30 PM",
        description: "As the Aarti ceremony begins at the banks of the Bagmati, the fragrance of incense and the sound of bells fill the air."
      }
    ]
  }
};
