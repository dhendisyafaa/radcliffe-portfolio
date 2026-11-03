import ContactSection from "@/components/homepage/ContactSection";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import TitleSection from "@/components/homepage/TitleSection";
import RATE_CARD from "@/constant/rate_card.json";

const RateTable = ({ headers, rows, markedServices = [] }) => (
  <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm">
    <table className="w-full min-w-[32rem] text-left text-sm text-gray-200">
      <thead className="border-b border-white/10 bg-white/5 text-xs uppercase text-gray-300">
        <tr>
          {headers.map((header, index) => (
            <th
              key={header}
              scope="col"
              className={`px-4 py-3 font-semibold ${
                index === headers.length - 1 ? "text-right" : ""
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/10">
        {rows.map((row) => (
          <tr key={row[0]} className="transition-colors hover:bg-white/5">
            {row.map((cell, index) => (
              <td
                key={`${row[0]}-${index}`}
                className={`px-4 py-3 ${
                  index === 0
                    ? "font-medium text-white"
                    : index === row.length - 1
                      ? "whitespace-nowrap text-right font-semibold text-primary"
                      : ""
                }`}
              >
                {cell}
                {index === 0 && markedServices.includes(row[0]) && (
                  <span className="ml-1 text-red-500" aria-hidden="true">
                    *
                  </span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RateCard = () => {
  return (
    <div className="bg-[url('/assets/hero-pattern.svg')] bg-center bg-cover bg-no-repeat">
      <HomepageLayout>
        <main className="pt-16">
          <section>
            <TitleSection
              title={RATE_CARD.title}
              description={RATE_CARD.description}
            />
            <p className="mb-8 max-w-2xl text-gray-200">
              {RATE_CARD.introduction}
            </p>

            <div className="space-y-10">
              {RATE_CARD.serviceCategories.map((category) => (
                <section key={category.title}>
                  <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                    {category.title}
                  </h2>
                  <RateTable
                    headers={category.headers}
                    rows={category.rows}
                    markedServices={category.markedServices}
                  />
                </section>
              ))}

              <section>
                <TitleSection
                  title={RATE_CARD.technologies.title}
                  description={RATE_CARD.technologies.description}
                />
                <RateTable
                  headers={RATE_CARD.technologies.headers}
                  rows={RATE_CARD.technologies.rows}
                />
              </section>

              <section>
                <TitleSection
                  title={RATE_CARD.terms.title}
                  description={RATE_CARD.terms.description}
                />
                <div className="rounded-lg border border-white/10 bg-black/30 p-5 text-gray-200 backdrop-blur-sm md:p-6">
                  <h2 className="mb-4 font-semibold text-white">
                    {RATE_CARD.terms.heading}
                  </h2>
                  <ol className="list-inside list-decimal space-y-3">
                    {RATE_CARD.terms.items.map((term) => (
                      <li key={term}>{term}</li>
                    ))}
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                  {RATE_CARD.notes.title}
                </h2>
                <ul className="space-y-3 text-gray-200">
                  {RATE_CARD.notes.items.map((note) => (
                    <li
                      key={note.relatedService}
                      className="flex items-start gap-2"
                    >
                      <span className="font-bold text-red-500" aria-hidden="true">
                        {note.marker}
                      </span>
                      <span>{note.content}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>

          <ContactSection />
        </main>
      </HomepageLayout>
    </div>
  );
};

export default RateCard;
