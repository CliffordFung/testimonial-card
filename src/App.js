import TestimonalCard from "./components/TestimonialCard";
import sarahDoleAvatar from "./assets/profile-thumbnail.png";

function App() {
  return (
    <div className="gradient flex h-screen items-start justify-center py-[200px]">
      <TestimonalCard
        avatar={sarahDoleAvatar}
        description="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        handle="@sarahdole"
        name="Sarah Dole"
      />
    </div>
  );
}

export default App;
