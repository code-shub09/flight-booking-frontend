import { TicketIcon, FireIcon, PhoneIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: <TicketIcon className="h-10 w-10 text-teal-600" />,
    title: "FAST BOOKING",
    description:
      "We offer fast booking, fantastic products, competitive pricing & amazing experience.",
  },
  {
    icon: <FireIcon className="h-10 w-10 text-teal-600" />,
    title: "EXCITING DEALS",
    description:
      "Book exciting deals on with published & exclusive flights.",
  },
  {
    icon: <PhoneIcon className="h-10 w-10 text-teal-600" />,
    title: "24/7 SUPPORT",
    description:
      "Get assistance 24/7 for any travel-related query. We are happy to assist you!",
  },
];

export default function ReasonsToBook() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Reasons to book with us?
        </h2>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
