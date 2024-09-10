import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tractor - Industrial Solutions</title>
                <meta name="description" content="Leading industrial solutions provider" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroSection />
            <ServiceSection />
            <TestimonialsSection />
        </div>
    );
}