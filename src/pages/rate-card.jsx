import ContactSection from "@/components/homepage/ContactSection";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import TitleSection from "@/components/homepage/TitleSection";
import RATE_CARD from "@/constant/rate_card.json";

const RateTable = ({ headers, rows, markedServices = [] }) => (
  <>
    <div className="space-y-3 sm:hidden">
      {rows.map((row) => (
        <article
          key={row[0]}
          className="rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-gray-200 backdrop-blur-sm"
        >
          <h3 className="break-words font-semibold text-white">
            {row[0]}
            {markedServices.includes(row[0]) && (
              <span className="ml-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </h3>
          <dl className="mt-3 space-y-3">
            {row.slice(1).map((cell, index) => {
              const columnIndex = index + 1;
              const isPrice = columnIndex === row.length - 1;

              return (
                <div
                  key={`${row[0]}-${columnIndex}`}
                  className="border-t border-white/10 pt-2"
                >
                  <dt className="text-xs font-medium text-gray-400">
                    {headers[columnIndex]}
                  </dt>
                  <dd
                    className={`mt-1 break-words ${
                      isPrice ? "font-semibold text-primary" : ""
                    }`}
                  >
                    {cell}
                  </dd>
                </div>
              );
            })}
          </dl>
        </article>
      ))}
    </div>

    <div className="hidden overflow-x-auto rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm sm:block">
      <table className="w-full table-fixed text-left text-sm text-gray-200">
        <thead className="border-b border-white/10 bg-white/5 text-xs uppercase text-gray-300">
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                className={`break-words px-3 py-3 font-semibold md:px-4 ${
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
                  className={`break-words px-3 py-3 md:px-4 ${
                    index === 0
                      ? "font-medium text-white"
                      : index === row.length - 1
                        ? "text-right font-semibold text-primary"
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
  </>
);

const RateCard = () => {
  return (
    <div className="bg-[url('/assets/hero-pattern.svg')] bg-center bg-cover bg-no-repeat">
      <HomepageLayout>
        <main className="min-w-0 pt-16">
          <section className="min-w-0">
            <TitleSection
              title={RATE_CARD.title}
              description={RATE_CARD.description}
            />
            <p className="mb-8 max-w-2xl break-words text-sm leading-relaxed text-gray-200 sm:text-base">
              {RATE_CARD.introduction}
            </p>

            <div className="space-y-8 sm:space-y-10">
              {RATE_CARD.serviceCategories.map((category) => (
                <section key={category.title}>
                  <h2 className="mb-4 break-words text-lg font-bold text-white sm:text-xl md:text-2xl">
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
                <div className="rounded-lg border border-white/10 bg-black/30 p-4 text-sm leading-relaxed text-gray-200 backdrop-blur-sm sm:p-5 sm:text-base md:p-6">
                  <h2 className="mb-4 font-semibold text-white">
                    {RATE_CARD.terms.heading}
                  </h2>
                  <ol className="list-outside space-y-3 pl-5">
                    {RATE_CARD.terms.items.map((term) => (
                      <li key={term}>{term}</li>
                    ))}
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="mb-4 break-words text-lg font-bold text-white sm:text-xl md:text-2xl">
                  {RATE_CARD.notes.title}
                </h2>
                <ul className="space-y-3 text-sm leading-relaxed text-gray-200 sm:text-base">
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
