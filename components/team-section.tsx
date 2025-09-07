'use client'

import Image from "next/image"
import { useState } from "react"

const coaches = [
   {
    id: 1,
    name: "Kaina Aureoles",
    role: "Coach",
    image: "/headshots/kaina-341.jpg",
    bio: "I've been a personal trainer/group trainer for over 8 years with NASM and in the fitness industry for over 10 years. I earned my certification in Pain-Free performance movement in 2023 and I'm currently working on my NASM nutrition certification. I won 2nd place in Decoded's After Dark 2024 Competition and I got my first muscle up this year! Achieving more than one in a row is my next challenge. My training philosophy is simple: QUALITY OVER QUANTITY. What's the point in going heavier when you haven't mastered the form? I live by this in and out of the gym--follow through with patience and repetition. Moving your body as long as you can as well as you can for the rest of your life is the goal. When I'm not at the gym, I enjoy spending time with my husband, Edwin, watching our favorite comfort TV shows like Friends and Big Bang Theory. I also love hanging out with my friends, who I admire so much. In addition to that, I'm busy taking care of our German Shepherd like he's my own son while simultaneously working on my professional modeling/acting portfolio, hoping to one day see myself on a billboard!"
  },
  {
    id: 2,
    name: "Edwin Aureoles",
    role: "Coach",
    image: "/headshots/edwin-341.jpg",
    bio: "Hi, I'm Edwin Aureoles, and I'm excited to start my new role as a coach. With nearly a decade of fitness experience and three years at Decoded, I've seen the impact of a strong community. As a coach, I'll share my knowledge and skills to help others improve their performance, approaching training with enthusiasm and optimism. My past experiences, including overcoming a broken left Humerus, have taught me to stay hopeful and focused. Decoded has amazing athletes who make classes entertaining and competitive. They make you want to come back every single day! Each day it’s a new challenge and preparation is key to taking on those challenges to the best of your ability. That’s where my training philosophy comes in. I break down the movement into parts and really try to understand what I’m doing and the intention of the exercise because if you know what you’re targeting, the movement will come easier. Visualizing the movement before attempting it is important. Outside of the gym, my personal interests include spending time with loved ones and my dog, Mylo. I'm a fan of diverse music genres. Please feel free to share your song requests, and I'll incorporate them into our workout playlists to boost your energy. As someone known for being a hype man, I'm committed to creating an engaging atmosphere. I also enjoy attending concerts and festivals. With that being said. Let's get to work!"
  },
  {
    id: 3,
    name: "German Rodriguez",
    role: "Coach",
    image: "/headshots/german-341.jpg",
    bio: " Hello! My name is German Rodríguez, most people call me GMan. I am the Dad of a frequently featured baby boy in many of the Decoded Lab videos (Liam) and although being active and a first time parent is tough, we always strive to show up and show out! I am First Aid and CPR certified and I have been training Functional Strength for 2 1/2 years and counting. It didn’t take long to love the sport. After the first week of class (although my body felt exhausted), I knew this was something I WANTED to keep up. Other than Functional Strength Training, I also play soccer recreationally. So, all in all, I’ve been physically active all my life. The feeling of completing a challenging workout or even winning a soccer match is uplifting. Being one of the tying teams at our first Decoded competition felt even better! I love learning what my body is capable of and seeing what everyone else is able to accomplish! Something that also keeps me going is the community we’ve built! It doesn’t take long to feel like you’re at home. My goal as a coach is to help bring out everyone’s hidden strength and talent! We at Decoded all know first hand what it feels like to accomplish something we never thought we were capable of and I hope to help you all do just that! Apart from helping you reach your fitness goals, I hope to also make you feel as if you are part of the team from day one! My personality is unserious so we will get the serious work done with a whole lot of fun. FOMO is the best motivator! Esmer Hey, everyone!"
  },
  {
    id: 4,
    name: "Esmeralda Rodriguez",
    role: "Coach",
    image: "/headshots/esmer-341.jpg",
    bio: " I've been a five-sport athlete my entire life and an original member of Decoded (2022). I moved from McAllen, TX (Gig'em Aggies!) to North Carolina in 2018 to study finance at Elon University.   Relocating 22 hours from home and no longer being part of a team was a challenging transition for me. I knew I needed to fill the void created by leaving sports so I quickly sought out a job at Gold's Gym. This is where I took my fitness journey into my own hands. I learned how much I loved creating workouts, trying new movements, and figuring out plans that worked for me. This is also where I met Jude and was introduced to functional fitness. I fell in love with its intensity and how I was always able to find new ways to push myself.   A personal goal for me over the past year has been to laser focus on my fitness and overall health. I lost 25 lbs while increasing muscle mass and adding new skills to my belt, such as muscle-ups and handstand walks. Through functional fitness, Jude and the team made my goals attainable. It took time and lots of sweat, but I got there!   During my time in the gym, l developed a love for helping others and working together to reach our goals. I've become a dedicated and encouraging coach--driven by the desire to see you full your potential. I'm also not afraid to offer tough love because I believe it's necessary for growth! My next step is pursuing CrossFit coaching certification to bring new knowledge, skills, and experience to our team and our members! I'm truly excited about the opportunity to work with you all and share my passion for fitness and coaching."
  },
  {
    id: 5,
    name: "Tyler Lenz",
    role: "Coach",
    image: "/headshots/tyler-341.jpg",
    bio: "My name is Tyler Lenz and I’ve been lucky to be a part of the Decoded community since July 2023. Growing up, I never really considered myself an athlete—I didn’t play organized sports in high school or college. Until I joined Decoded, my workout experience was recreational at best. Despite being 38, in the past two years I’ve seen my strength hit an all-time high, my well-being improve, and I’ve redefined what’s possible for my body. My coaching philosophy focuses less on the 'what' and more on the 'why.' Why you want to be here is just as important as what you want to accomplish. I spent years not really knowing my 'why' or how to sustain progress. Now, I’m excited to learn your 'why'—your journey is unique. By understanding your aspirations, challenges, and what drives you, I can better coach you and help us reach your full potential together. I genuinely love working with people, and the chance to motivate you and invite you into the place that transformed my life is a true blessing. Once you step through our doors, our community spirit will speak for itself. I’m just happy and excited to teach and guide you along the way.",
  }
]

const staff = [
  {
    id: 6,
    name: "Mollie Rose",
    role: "Box Manager",
    image: "/headshots/mollie.jpg",
    bio: "When I discovered Decoded Training Lab in 2023 I was immediately moved by the way this community cultivates passion and perseverance. As a behavioral health scientist and educator, Decoded's ability to help people image possibilities for themselves resonates with me. My goal is to leverage my experience designing, implementing, and evaluating community-driven health promotion initiatives to assist the gym in fulfilling its mission. In my role as Box Manager I will help drive the advancement of Decoded's vision and programming, communicate with stakeholders, lead staff management and development, and support innovations that grow the business and enhance the community's longterm health and wellbeing. When I'm not at Decoded you can find me coaching Lyra and Trapeze at Upside Aerial, reading poetry to our puppy, singing loudly in my car, or texting my mom to go look at the moon."
  },
  {
    id: 7,
    name: "Hasler Zuniga",
    role: "Digital Growth Manager",
    image: "/headshots/hasler.jpg",
    bio: "I joined the Decoded team in 2025 and I have been working out here for 11 months. What I like about Decoded is you’re never alone: It feels like family. As soon as you enter the gym you feel the energy. You see all the hard work everyone is putting in. I’m so grateful to be apart of this community. My role is to manage/maintain our website, develop useful apps (coming soon), and helping with advertisements. With a Bachelor of Science degree in Computer Science and three years of e-commerce experience, I am dedicated to showing Alamance County how awesome Decoded is! When I'm not at the gym, I'm probably playing with my dog Milo, at home building apps, or at an EDM concert."
  },
  {
    id: 8,
    name: "Susanna Gaither",
    role: "Social Media Manager",
    image: "/headshots/susana.jpg",
    bio: "I came to my first Decoded class in May 2024, and my life was instantly changed for the better. I have a background in Digital & Electronic Media (High Point University) and since February 2025, have been focused on Decoded’s social media strategy and content creation - aka lurking with a camera and editing for Instagram and TikTok. I’m so grateful to have the opportunity to show a glimpse of the incredible people at Decoded and the encouragement, hard work, and fun everyone brings to every workout. As for my other interests, I live and breathe football and basketball and take great pride in my brain’s catalog of music trivia and song lyrics."
  },
  {
    id: 9,
    name: "Sydney Miller",
    role: "Social Media Content Creator",
    image: "/headshots/sydney.jpg",
    bio: "I joined the Decoded team in 2025 and have been working out at Decoded since 2022. My favorite thing about Decoded is the community; you walk in and feel welcomed by everyone. Everyone cheers for you and pushes you to do your best. My role is to make social media content for Tiktok. When I’m not at the gym, you can find me walking my dog, in my garden, or cooking new recipes."
  },
  {
    id: 10,
    name: "Victoria Bonifield",
    role: "Social Media Content Creator",
    image: "/headshots/victoria-headshot.jpg",
    bio: "I joined the Decoded team this month! I've been working out at Decoded since May 2025. I love the amount of one-on-one training included in our classes. Coach has taught me so much. I also love the team aspect: it helps push me to limits I didn’t know where possible. My role is to show people through pictures and videos how great Decoded is! Decoded has changed my life in 3 months and I am passionate about bringing people in and making them feel at home. With a background in the military, I’ve always wanted to find another “family outside of a family” with likeminded goals and a desire for self improvement.  I am dedicated to helping people in all walks of life. The misconception about functional fitness is you have to be fit when you start, but that is not true. I want to help others improve and gain confidence in themselves and their bodies. When I'm not at the gym, you can find me at the movies or painting outside."
  },
  {
    id: 11,
    name: "Mary Jo Corleto",
    role: "Box Consultant",
    image: "/headshots/mary.jpg",
    bio: "I am excited to be serving as the Box Consultant at Decoded Training Lab, where my focus is around supporting our members and contributing to the growth of our community. In this role, I collaborate with members to gather ideas and input that enhance their experience, while also helping to strengthen the gym’s presence through social media support and creative initiatives. With experience in community engagement and a strong passion for health and wellness, I enjoy finding ways to connect people and create meaningful experiences. Being actively involved in the community has taught me the value of collaboration and building connections that last. I bring enthusiasm, creativity, and a genuine commitment to making the gym not just a place to work out, but a welcoming space where everyone feels supported and motivated."
  },
  {
    id: 12,
    name: "Josh Carr",
    role: "Equipment Tech",
    image: "/headshots/josh.jpg",
    bio: " A military veteran, I've cultivated discipline and resilience through consistent training. Since 2015, I've dedicated myself to physical fitness, starting at Gold's Gym and then for two and a half years at Decoded Training Lab. Despite my commitment to strength, one exercise I'll never enjoy is pull-ups!"
  }
]

const TeamCard = ({ member, onClick }: { member: any, onClick: () => void }) => (
  <div className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={onClick}>
    <div className="relative h-[300px] rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={90}
        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${member.name === "German Rodriguez"  ? "object-top" : ""}`}
      />
    </div>
    <div className="text-center mb-4">
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-primary font-medium">{member.role}</p>
    </div>
    <p className="text-white/70 text-sm text-center">Click to read bio</p>
  </div>
)

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const allMembers = [...coaches, ...staff]

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">Meet Our Team</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our certified coaches and dedicated staff are the heart of our community.
          </p>
        </div>

        {/* Coaches Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="heading-sm mb-4 text-primary">Our Coaches</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <TeamCard 
                key={coach.id} 
                member={coach} 
                onClick={() => setSelectedMember(coach.id)} 
              />
            ))}
          </div>
        </div>

        {/* Staff Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="heading-sm mb-4 text-primary">Our Staff</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((staffMember) => (
              <TeamCard 
                key={staffMember.id} 
                member={staffMember} 
                onClick={() => setSelectedMember(staffMember.id)} 
              />
            ))}
          </div>
        </div>

        {/* Bio Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedMember(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const member = allMembers.find(m => m.id === selectedMember)
                if (!member) return null
                return (
                  <div className="p-6">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="128px"
                          quality={90}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                        <p className="text-primary font-medium text-lg mb-4">{member.role}</p>
                        <button 
                          onClick={() => setSelectedMember(null)}
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                    <div className="text-black/80 leading-relaxed">
                      <p>{member.bio}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
