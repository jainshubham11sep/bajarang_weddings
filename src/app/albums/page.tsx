import type { Metadata } from 'next';
import AlbumsGalleryClient from './AlbumsGalleryClient';

export const metadata: Metadata = {
  title: 'Wedding Gallery | Bajranng Weddings',
  description: 'A visual journey through real Bajranng weddings — mandap ceremonies, royal baraats, bridal portraits, and more.',
};

export default function AlbumsPage() {
  return <AlbumsGalleryClient />;
}
