import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Committee data - easy to edit and maintain
const committeeRoles = [
  {
    role: "President",
    description: "Manages the society. Oversees everything. Makes sure everything gets done and that everyone on the committee has something to do. Takes ultimate responsibility for everything FragSoc does, and generally delegates.",
    color: "from-blue-500 to-purple-600",
    borderColor: "border-blue-500",
    shadowColor: "shadow-blue-600/25",
    members: [
      {
        name: "Aaron 'Baldnut' Heald",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Secretary",
    description: "Deals with all paperwork and booking for the society and society events. Liaises with YorkSU, the University, and other relevant organisations to ensure smooth running.",
    color: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500",
    shadowColor: "shadow-purple-600/25",
    members: [
      {
        name: "Charlie Greasby",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Treasurer",
    description: "Handles all of the society's finances. Applies for grants from YorkSU annually, handles payment for event admissions, budget plans for committee ideas, pays cash in to our bank account and guards the petty cash tin.",
    color: "from-green-500 to-blue-600",
    borderColor: "border-green-500",
    shadowColor: "shadow-green-600/25",
    members: [
      {
        name: "Hamish Parker",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Social Secretary",
    description: "Organises socials and events run outside of LAN and competitive environments.",
    color: "from-indigo-500 to-purple-600",
    borderColor: "border-indigo-500",
    shadowColor: "shadow-indigo-600/25",
    members: [
      {
        name: "William Pym",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Esports Officer",
    description: "Monitors and maintains official FragSoc UoY Esports teams. Arranges streaming of large event tournaments and the Roses against Lancaster. Co-ordinates the Roses event with Lancaster University. Keeps up to date with all areas of esports over multiple games.",
    color: "from-red-500 to-orange-600",
    borderColor: "border-red-500",
    shadowColor: "shadow-red-600/25",
    members: [
      {
        name: "James Sutton",
        image: "/logo.png" // Replace with actual photo when available
      },
      {
        name: "Aryaman Marathe",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Smash Tournaments Officer",
    description: "Organises and runs weekly smash meet-ups as well as admining the larger Smash tournaments with 100+ players.",
    color: "from-yellow-500 to-red-600",
    borderColor: "border-yellow-500",
    shadowColor: "shadow-yellow-600/25",
    members: [
      {
        name: "Charlie Greasby",
        image: "/logo.png" // Replace with actual photo when available
      },
      {
        name: "Hamish Parker",
        image: "/logo.png" // Replace with actual photo when available
      },
      {
        name: "James Orwin",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "FGC Coordinator",
    description: "Coordinates Fighting Game Community events and manages FGC tournaments and competitions.",
    color: "from-orange-500 to-red-600",
    borderColor: "border-orange-500",
    shadowColor: "shadow-orange-600/25",
    members: [
      {
        name: "Charlie Greasby",
        image: "/logo.png" // Replace with actual photo when available
      },
      {
        name: "Phillip Hatt",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Events Officer",
    description: "Decides the games and activities to be run at LANs and other gaming events. Organises rules and teams, and shouts at people to get on the server.",
    color: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500",
    shadowColor: "shadow-cyan-600/25",
    members: [
      {
        name: "Phillip Hatt",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Infrastructure Officer",
    description: "Handles the hardware/technological side of running tournaments at events. Sets up servers for tournaments and organised games.",
    color: "from-gray-500 to-blue-600",
    borderColor: "border-gray-500",
    shadowColor: "shadow-gray-600/25",
    members: [
      {
        name: "Ren Herring",
        image: "/logo.png" // Replace with actual photo when available
      },
      {
        name: "Evelyn Gravett",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Stream Manager",
    description: "Manages the streams for any FragSoc event being broadcast live, as well as creating and updating the schedule for members to use the Twitch account. Creates general graphics & alerts for FragSoc streams, as well as custom graphics and overlays for bigger events.",
    color: "from-pink-500 to-purple-600",
    borderColor: "border-pink-500",
    shadowColor: "shadow-pink-600/25",
    members: [
      {
        name: "Ren Herring",
        image: "/logo.png" // Replace with actual photo when available
      },
      {
        name: "Evelyn Gravett",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  },
  {
    role: "Press and Publication",
    description: "Arranges publicity and advertisements for the society. Manages the society's Facebook and other social media accounts.",
    color: "from-teal-500 to-green-600",
    borderColor: "border-teal-500",
    shadowColor: "shadow-teal-600/25",
    members: [
      {
        name: "Dorothy Lo",
        image: "/logo.png" // Replace with actual photo when available
      }
    ]
  }
];

export default function Committee() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">FragSoc Committee</h1>
            
            <div className="text-center mb-16">
              <Image
                src="/logo.png"
                alt="FragSoc Logo"
                width={220}
                height={220}
                className="mx-auto rounded-full shadow-2xl mb-8"
              />
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the dedicated team behind FragSoc! Our committee members work hard to organize events,
                manage teams, and ensure everyone has an amazing experience in our gaming community.
              </p>
            </div>

            <div className="bg-indigo-950 border border-indigo-800 rounded-2xl p-12 mb-16">
              <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">Get in Touch</h2>
              <p className="text-xl text-indigo-200 text-center mb-8 leading-relaxed">
                Have questions about events, want to join a team, or need help with something?
                Our committee is here to help!
              </p>
              <div className="flex justify-center">
                <a
                  href="https://discord.gg/vaTV73U5Hz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-indigo-600/25"
                >
                  Contact Us on Discord
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {committeeRoles.map((role, index) => (
                <div key={index} className={`bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:${role.borderColor} transition-all duration-300`}>
                  <div className={`w-28 h-28 bg-gradient-to-r ${role.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl`}>
                    {role.role.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{role.role}</h3>
                  <div className="mb-4">
                    {role.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-center justify-center mb-2">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${role.role}`}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-600 mr-3"
                        />
                        <span className="text-lg font-semibold text-gray-300">{member.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-2xl p-12 text-center border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Want to Get Involved?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Interested in joining the committee or helping out with events? We're always looking for
                enthusiastic members to help make FragSoc even better! Committee positions typically open
                at the beginning of each academic year.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://discord.gg/vaTV73U5Hz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-indigo-600/25"
                >
                  Join Our Discord
                </a>
                <a
                  href="https://yorksu.org/activities/view/fragsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-green-600/25"
                >
                  Get Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
