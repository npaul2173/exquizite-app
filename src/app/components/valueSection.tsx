function ValueSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Create Engaging Quizzes</h3>
          <p className="text-gray-700">
            Craft quizzes on any topic with our intuitive tools and diverse
            question types.
          </p>
        </div>
        <div className="rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Test Your Knowledge</h3>
          <p className="text-gray-700">
            Challenge yourself with quizzes from various creators and expand
            your knowledge base.
          </p>
        </div>
        <div className="rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Connect with Others</h3>
          <p className="text-gray-700">
            Share quizzes with friends, compete on leaderboards, and discover
            new communities of learners.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
