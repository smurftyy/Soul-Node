import React from 'react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Academic Credentials',
      description: 'Universities can issue soul-bound tokens for degrees and certifications that cannot be transferred or forged.',
      image: '🎓',
      category: 'Education',
    },
    {
      title: 'Professional Certifications',
      description: 'Professional bodies can issue verifiable credentials that stay with the individual throughout their career.',
      image: '💼',
      category: 'Professional',
    },
    {
      title: 'Gaming Achievements',
      description: 'Gamers can earn soul-bound tokens for achievements that represent their true gaming accomplishments.',
      image: '🎮',
      category: 'Gaming',
    },
    {
      title: 'Healthcare Records',
      description: 'Medical institutions can issue soul-bound tokens for health records and vaccination certificates.',
      image: '🏥',
      category: 'Healthcare',
    },
    {
      title: 'Membership Cards',
      description: 'Organizations can issue non-transferable membership tokens that represent genuine affiliation.',
      image: '🏛️',
      category: 'Membership',
    },
    {
      title: 'Event Attendance',
      description: 'Event organizers can issue soul-bound tokens as proof of attendance and participation.',
      image: '🎪',
      category: 'Events',
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how SoulNode is revolutionizing various industries with soul-bound tokens
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{useCase.image}</span>
                <span className="text-sm font-medium text-purple-400 bg-purple-900/50 px-3 py-1 rounded-full">
                  {useCase.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-300">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases; 