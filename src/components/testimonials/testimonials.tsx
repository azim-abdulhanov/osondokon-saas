import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Alisher Karimov',
    role: "Online Do'kon Egasi",
    content: "15 daqiqada do'konimni ishga tushirdim. Ajoyib platforma!",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Madina Rashidova',
    role: 'Startap Asoschisi',
    content: 'Eng yaxshi ecommerce yechimi. Hammaga tavsiya qilaman!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Bobur Toshmatov',
    role: 'IT Tadbirkor',
    content: 'Professional va oson. Biznesimni yangi bosqichga olib chiqdi!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  }
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900/20'>
      <div className='container mx-auto max-w-6xl px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6'
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12'
        >
          Join thousands of satisfied entrepreneurs building their stores with
          OsonDo'kon.
        </motion.p>

        {/* Carousel Container */}
        <div
          className='relative max-w-4xl mx-auto'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className='overflow-hidden rounded-3xl'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5
                }}
                className='bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-800'
              >
                <div className='flex flex-col md:flex-row items-center gap-8'>
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='flex-shrink-0'
                  >
                    <div className='relative'>
                      <img
                        className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-xl'
                        src={
                          testimonials[currentIndex].avatar ||
                          '/placeholder.svg'
                        }
                        alt={testimonials[currentIndex].name}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className='flex-1 text-center md:text-left'>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className='mb-6'
                    >
                      <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic'>
                        "{testimonials[currentIndex].content}"
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className='mb-4'
                    >
                      <h3 className='text-xl md:text-2xl font-bold text-gray-900 dark:text-white'>
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400 font-medium'>
                        {testimonials[currentIndex].role}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className='flex justify-center md:justify-start gap-1'
                    >
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                          >
                            <Star
                              size={24}
                              fill='#fbbf24'
                              strokeWidth={0}
                              className='text-yellow-400'
                            />
                          </motion.div>
                        )
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110 cursor-pointer'
          >
            <ChevronLeft
              size={24}
              className='text-gray-600 dark:text-gray-300'
            />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110 cursor-pointer'
          >
            <ChevronRight
              size={24}
              className='text-gray-600 dark:text-gray-300'
            />
          </button>
        </div>

        {/* Progress Bar */}
        <div className='max-w-md mx-auto mt-6'>
          <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1'>
            <motion.div
              className='bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full'
              initial={{ width: '0%' }}
              animate={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
