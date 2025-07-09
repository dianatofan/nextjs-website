'use client';

export default function TravelStatistics() {
  return (
    <div className="min-h-screen p-8 md:p-16">
      <style jsx>{`
        @keyframes wobble1 {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 50% 50% 40% 60% / 50% 60% 50% 40%;
          }
          50% {
            border-radius: 40% 60% 60% 40% / 40% 50% 60% 50%;
          }
          75% {
            border-radius: 70% 30% 50% 50% / 30% 70% 40% 60%;
          }
        }

        @keyframes wobble2 {
          0%,
          100% {
            border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
          }
          25% {
            border-radius: 60% 40% 50% 50% / 60% 40% 50% 50%;
          }
          50% {
            border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%;
          }
          75% {
            border-radius: 30% 70% 60% 40% / 70% 30% 40% 60%;
          }
        }

        @keyframes wobble3 {
          0%,
          100% {
            border-radius: 70% 30% 60% 40% / 30% 60% 40% 70%;
          }
          25% {
            border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%;
          }
          50% {
            border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
          }
          75% {
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
          }
        }

        @keyframes wobble4 {
          0%,
          100% {
            border-radius: 50% 50% 80% 20% / 70% 30% 50% 50%;
          }
          25% {
            border-radius: 70% 30% 40% 60% / 50% 50% 70% 30%;
          }
          50% {
            border-radius: 30% 70% 50% 50% / 60% 40% 40% 60%;
          }
          75% {
            border-radius: 60% 40% 70% 30% / 40% 60% 50% 50%;
          }
        }

        @keyframes wobble5 {
          0%,
          100% {
            border-radius: 30% 70% 40% 60% / 50% 50% 80% 20%;
          }
          25% {
            border-radius: 50% 50% 60% 40% / 40% 60% 50% 50%;
          }
          50% {
            border-radius: 70% 30% 50% 50% / 60% 40% 30% 70%;
          }
          75% {
            border-radius: 40% 60% 30% 70% / 50% 50% 60% 40%;
          }
        }

        @keyframes wobble6 {
          0%,
          100% {
            border-radius: 80% 20% 50% 50% / 40% 60% 30% 70%;
          }
          25% {
            border-radius: 50% 50% 70% 30% / 60% 40% 50% 50%;
          }
          50% {
            border-radius: 20% 80% 40% 60% / 50% 50% 40% 60%;
          }
          75% {
            border-radius: 60% 40% 50% 50% / 30% 70% 60% 40%;
          }
        }

        .wobble1 {
          animation: wobble1 8s ease-in-out infinite;
        }

        .wobble2 {
          animation: wobble2 7s ease-in-out infinite;
        }

        .wobble3 {
          animation: wobble3 9s ease-in-out infinite;
        }

        .wobble4 {
          animation: wobble4 6s ease-in-out infinite;
        }

        .wobble5 {
          animation: wobble5 8.5s ease-in-out infinite;
        }

        .wobble6 {
          animation: wobble6 7.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Statistic 1 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 flex flex-col items-center justify-center p-6 text-center wobble1">
              <div className="text-5xl font-semibold text-black mb-3">70%</div>
              <div className="text-base md:text-lg text-black leading-tight">
                <div className="font-medium">date-flexible users</div>
              </div>
            </div>
          </div>

          {/* Statistic 2 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 flex flex-col items-center justify-center p-6 text-center wobble2">
              <div className="text-5xl font-semibold text-black mb-3">50%</div>
              <div className="text-base md:text-lg text-black leading-tight">
                <div className="font-medium">destination-flexible users</div>
              </div>
            </div>
          </div>

          {/* Statistic 3 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 flex flex-col items-center justify-center p-6 text-center wobble3">
              <div className="text-5xl font-semibold text-black mb-3">37%</div>
              <div className="text-base md:text-lg text-black leading-tight">
                <div className="font-medium">
                  users who shift plans mid-search
                </div>
              </div>
            </div>
          </div>

          {/* Statistic 4 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 flex flex-col items-center justify-center p-6 text-center wobble4">
              <div className="text-5xl font-semibold text-black mb-3">34</div>
              <div className="text-base md:text-lg text-black leading-tight">
                <div className="font-medium">
                  days needed to plan & book a trip
                </div>
              </div>
            </div>
          </div>

          {/* Statistic 5 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 flex flex-col items-center justify-center p-6 text-center wobble5">
              <div className="text-3xl font-semibold text-black mb-3">✨😍</div>
              <div className="text-base md:text-lg text-black leading-tight">
                <div className="font-medium">explore phase is most loved</div>
              </div>
            </div>
          </div>

          {/* Statistic 6 */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-200 flex flex-col items-center justify-center p-6 text-center wobble6">
              <div className="text-4xl font-semibold text-black mb-3 leading-tight">
                🔎+ 🗺️
              </div>
              <div className="text-base md:text-lg text-black leading-tight">
                <div className="font-medium">most used tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
