import React from "react";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <img
          src="https://placehold.co/100x30?text=IntelliRoute"
          alt="IntelliRoute logo"
          className="h-8"
        />
        <nav>
          <ul className="flex space-x-6 text-sm">
            {["Products", "Solutions", "Pricing", "Developers", "Company"].map(
              (item) => (
                <li key={item}>
                  <a href="/" className="hover:text-purple-600">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            The Leading Enterprise AI Platform
          </h1>
          <p className="text-xl mb-6">Built on the language of business</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
            Get started for free
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Summarize",
              description:
                "Instantly generate concise summaries from enterprise data",
              content:
                "AI-powered summaries save time and increase productivity across your organization.",
            },
            {
              title: "Search",
              description:
                "Unlock valuable insights with AI-powered semantic search",
              content:
                "Enhance your search capabilities with our advanced AI models.",
            },
            {
              title: "Generate",
              description: "Automate content creation and boost productivity",
              content:
                "Leverage AI to create high-quality content efficiently and at scale.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-purple-600 font-semibold mb-2">
                {item.title}
              </h3>
              <h2 className="text-2xl font-bold mb-4">{item.description}</h2>
              <p className="mb-4">{item.content}</p>
              <button className="text-purple-600 font-semibold">
                Learn more →
              </button>
            </div>
          ))}
        </section>

        <section className="bg-gray-900 text-white p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Build with Advanced Retrieval
          </h2>
          <p className="mb-6">
            Enhance your AI applications with our cutting-edge retrieval
            technology. Seamlessly integrate external knowledge into your models
            for more accurate and contextually relevant outputs.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
            Learn more
          </button>
          <img
            src="https://placehold.co/600x300?text=Advanced+Retrieval+Interface"
            alt="Advanced retrieval interface showing various options and settings"
            className="mt-8 w-full rounded-lg"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Enterprise-grade AI trusted by industry leaders
          </h2>
          <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4">
            <div className="inline-block animate-[scroll_30s_linear_infinite]">
              {[
                "IntelliRoute",
                "AWS",
                "Azure",
                "Google Cloud",
                "Oracle",
                "IBM",
              ].map((company) => (
                <img
                  key={company}
                  src={`https://placehold.co/120x60?text=${company}`}
                  alt={`${company} logo`}
                  className="h-12 inline-block mx-8"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Documentation",
                description:
                  "Explore our comprehensive guides and API references",
              },
              {
                title: "LLM University",
                description:
                  "Master large language models with our educational resources",
              },
              {
                title: "The IntelliRoute Platform",
                description:
                  "Discover the power of our enterprise AI solutions",
              },
            ].map((item) => (
              <div key={item.title} className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <a href="/" className="text-purple-600 font-semibold">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
            Sign up for free
          </button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {[
              {
                title: "Product",
                items: [
                  "Generate",
                  "Summarize",
                  "Classify",
                  "Embed",
                  "Search",
                  "Rerank",
                ],
              },
              {
                title: "Solutions",
                items: ["By Industry", "By Use Case"],
              },
              {
                title: "Developers",
                items: [
                  "Documentation",
                  "API Reference",
                  "Tools",
                  "LLM University",
                  "Community",
                ],
              },
              {
                title: "Company",
                items: ["About", "Blog", "Careers", "Contact", "Partners"],
              },
              {
                title: "Legal",
                items: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <img
              src="https://placehold.co/120x40?text=IntelliRoute"
              alt="IntelliRoute logo"
              className="h-10"
            />
            <div className="flex space-x-4">
              {["twitter", "linkedin", "github", "youtube"].map((social) => (
                <i key={social} className={`fab fa-${social}`}></i>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
