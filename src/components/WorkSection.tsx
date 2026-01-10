import FeaturedProjectCard from "./FeaturedProjectCard";
import WhatsAppAgentCards from "./WhatsAppAgentCards";
import dhunjamImage from "../assets/dhunjamW.png";

const WorkSection = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Decorative line with sparkle */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px bg-gray-800 w-96"></div>
          <div className="text-2xl">✨</div>
          <div className="h-px bg-gray-800 w-96"></div>
        </div>

        {/* Section title */}
        <div className="mb-16 text-left">
          <h2 className="text-xl font-semibold text-gray-700">
            — professional work ✿{" "}
            <span className=" text-lg text-gray-400 font-base">
              contact me for my full portfolio!
            </span>
          </h2>
        </div>

        <div className="space-y-16">
          <FeaturedProjectCard
            title="Dhunjam - Music Streaming Platform"
            description="Sole frontend developer owning four dashboards (Customer, Host, Admin, Super Admin), building real-time features, payment flows, and scalable systems used in production."
            image={dhunjamImage}
            link="https://dhunjam.in/"
            isExternal={true}
          />

          <div className="mt-24">
            <FeaturedProjectCard
              title="WhatsApp Calling AI Agent"
              description="AI-powered restaurant assistant that enables customers to chat and call on WhatsApp in multiple languages, providing seamless multilingual support for orders and inquiries."
              customContent={<WhatsAppAgentCards />}
              link="mailto:simranawasthi.cc@gmail.com"
              isExternal={false}
              customBorderColor="#9ac443"
              customBackgroundColor="#e8f5d0"
              customShadowColor="#9ac443"
              customButtonText="mail me"
              hideDecorations={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
