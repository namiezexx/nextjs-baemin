import DeliveryCard from '../card/DeliveryCard';
import MainCard from '../card/MainCard';

const property = [
  {
    title: '배달',
    description: '세상은 넓고 맛집은 없다.',
    imageUrl: '/images/1.png',
  },
  {
    title: 'B마트',
    description: '장보기도 더 빠르게',
    imageUrl: '/images/1.png',
  },
  {
    title: '배민스토어',
    description: '배달은 지금 옵니다.',
    imageUrl: '/images/1.png',
  },
];

export default function MainSection() {
  return (
    <section className='h-[80%]'>
      <div className='flex'>
        {property.map((value: any, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
      <DeliveryCard />
    </section>
  );
}
