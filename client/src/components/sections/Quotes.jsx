import { motion } from "framer-motion";
import ScratchReveal from "@/components/ui/ScratchReveal";
const quotes = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier"
  }
];
function Quotes() {
  return <section id="quotes" className="py-20 relative bg-neu-light dark:bg-neu-dark transition-colors duration-300">
            <div className="container-custom">
                <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-primary">Daily</span>
                        <span className="text-gradient-coral"> Inspiration</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Scratch the cards below to reveal some wisdom for your journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quotes.map((quote, index) => <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-64 rounded-xl overflow-hidden shadow-neumorph dark:shadow-neumorph-dark border border-white/20 dark:border-white/5"
  >
                            <ScratchReveal width={void 0} height={void 0} className="w-full h-full">
                                <div className="bg-white dark:bg-gray-800 p-8 w-full h-full flex flex-col justify-center items-center text-center">
                                    <p className="text-lg md:text-xl font-medium mb-4 italic text-gray-800 dark:text-gray-200">
                                        "{quote.text}"
                                    </p>
                                    <p className="text-sm font-bold text-primary">
                                        — {quote.author}
                                    </p>
                                </div>
                            </ScratchReveal>
                        </motion.div>)}
                </div>
            </div>
        </section>;
}
export {
  Quotes as default
};
