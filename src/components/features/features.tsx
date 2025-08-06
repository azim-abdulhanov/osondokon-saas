import { Store, Rocket, ShieldCheck, TimerReset } from 'lucide-react'
import FeatureItem from '@/components/features/feature-item'
import { motion } from 'framer-motion'

const features = [
  {
    id: 1,
    icon: <Rocket />,
    title: 'Launch in Minutes',
    description: 'Start your online store in just 15 minutes — no coding or setup needed.'
  },
  {
    id: 2,
    icon: <Store />,
    title: 'All-in-One Platform',
    description: 'Product management, payments, analytics — everything you need in one place.'
  },
  {
    id: 3,
    icon: <ShieldCheck />,
    title: 'Secure & Reliable',
    description: 'Built with security and performance in mind for your peace of mind.'
  },
  {
    id: 4,
    icon: <TimerReset />,
    title: 'No Learning Curve',
    description: 'User-friendly interface designed for everyone — from novice to pro.'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black" id='features'>
      <div className="container max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Why Choose OsonDo'kon?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12"
        >
          Everything you need to create, run, and grow your online business — in one simple platform.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <FeatureItem
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.id * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
