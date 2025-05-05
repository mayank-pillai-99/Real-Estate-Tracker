export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Jennifer Reynolds",
      role: "CEO & Founder",
      bio: "Former real estate agent with 15+ years of experience. Passionate about bringing transparency to the property market.",
      image: "home/customer1.jpg",
    },
    {
      id: 2,
      name: "David Wong",
      role: "CTO",
      bio: "Data scientist and software engineer with expertise in real estate analytics and property valuation models.",
      image: "home/customer2.jpg",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Head of Property Research",
      bio: "Real estate economist with a background in market analysis and property valuation across diverse metropolitan areas.",
      image: "home/customer3.jpg",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "UX Design Lead",
      bio: "User experience specialist focused on making complex property data accessible and intuitive for all users.",
      image: "home/customer4.jpg",
    }
  ];

  return (
    <div className="w-full bg-[#1A3C5A] text-[#F9FAFB] py-8 px-8">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Meet the Team</h2>
      <div className="flex flex-col sm:flex-row  space-y-6 md:space-y-1 sm:space-x-4 pb-4 justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-none w-80 sm:w-96 bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
            <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover"/>
            <h2 className="text-lg sm:text-xl font-semibold">{member.name}</h2>
            <h3 className="text-base sm:text-lg font-semibold">{member.role}</h3>
            <p className="text-sm sm:text-lg italic mb-4">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

